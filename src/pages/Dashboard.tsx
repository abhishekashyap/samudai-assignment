// @ts-nocheck
import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import CalendarEventList from "../components/CalendarEventList";
import {
  DISCOVERY_DOC,
  GOOGLE_API_URL,
  GSI_CLIENT_API_URL,
  SCOPES,
} from "../constants";
import { useScript } from "../hooks";
import { PageLayout, ProtectedPageLayout } from "../layouts";

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CAL_CLIENT_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_CAL_API_KEY;

export const Dashboard = () => {
  const googleAPIStatus = useScript(GOOGLE_API_URL);
  const gsiClientStatus = useScript(GSI_CLIENT_API_URL);

  const [showAuthorizeButton, setShowAuthorizeButton] = useState(false);
  const [showSignoutButton, setShowSignoutButton] = useState(false);

  const [gapiInited, setGapiInited] = useState(false);
  const [gisInited, setGisInited] = useState(false);

  const [eventList, setEventList] = useState([]);

  const tokenClientRef = useRef<{
    callback: (resp: any) => Promise<void>;
    requestAccessToken: ({ prompt }: { prompt: string }) => void;
  }>();

  useEffect(() => {
    if (gapiInited && gisInited) setShowAuthorizeButton(true);
  }, [gapiInited, gisInited]);

  async function initializeGapiClient() {
    // @ts-ignore
    await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });
    setGapiInited(() => true);
  }

  useEffect(() => {
    if (typeof gapi !== "undefined") {
      (function gapiLoaded() {
        gapi.load("client", initializeGapiClient);
      })();
    }
  }, [googleAPIStatus]);

  useEffect(() => {
    if (typeof google !== "undefined") {
      (function gisLoaded() {
        tokenClientRef.current = google.accounts.oauth2.initTokenClient({
          client_id: CLIENT_ID,
          scope: SCOPES,
          callback: "", // defined later
        });
        setGisInited(() => true);
      })();
    }
  }, [gsiClientStatus]);

  function handleAuthClick() {
    if (tokenClientRef.current) {
      tokenClientRef.current.callback = async (resp) => {
        if (resp.error !== undefined) {
          throw resp;
        }
        setShowSignoutButton(true);
        await listUpcomingEvents();
      };

      if (gapi.client.getToken() === null) {
        // Prompt the user to select a Google Account and ask for consent to share their data
        // when establishing a new session.
        tokenClientRef.current.requestAccessToken({ prompt: "consent" });
      } else {
        // Skip display of account chooser and consent dialog for an existing session.
        tokenClientRef.current.requestAccessToken({ prompt: "" });
      }
    }
  }

  function handleSignoutClick() {
    const token = gapi.client.getToken();
    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token);
      gapi.client.setToken("");
      setShowSignoutButton(false);
    }
    setEventList([]);
  }

  async function listUpcomingEvents() {
    let response;
    try {
      const request = {
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: "startTime",
      };
      response = await gapi.client.calendar.events.list(request);
    } catch (err) {
      console.error(err.message);
    }

    setEventList(response.result.items);
  }

  return (
    <ProtectedPageLayout header="Dashboard">
      <PageLayout>
        <div className="flex gap-2 items-center justify-center">
          {showAuthorizeButton && (
            <Button
              className={
                showSignoutButton
                  ? "text-gray-500 border-gray-500 hover:bg-gray-500 cursor-not-allowed"
                  : ""
              }
              onClick={handleAuthClick}
              isDisabled={showSignoutButton}
            >
              Authorize
            </Button>
          )}
          {showSignoutButton && (
            <Button
              className="text-red-400 border-red-400 hover:bg-red-400"
              onClick={handleSignoutClick}
            >
              Sign out
            </Button>
          )}
        </div>
        <CalendarEventList events={eventList} />
      </PageLayout>
    </ProtectedPageLayout>
  );
};
