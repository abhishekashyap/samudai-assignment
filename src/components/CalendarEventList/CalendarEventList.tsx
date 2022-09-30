import { format, parseISO } from "date-fns";
import { FunctionComponent } from "react";
import { CalendarEventListProps } from "./types";

export const CalendarEventList: FunctionComponent<CalendarEventListProps> = ({
  events,
}) => {
  return (
    <ul className="pt-10">
      {events.length === 0 ? (
        <div className="text-center text-xl mt-24 text-gray-600">
          - No events found -
        </div>
      ) : (
        events.map((event) => (
          <div
            key={event.summary}
            className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8 mb-5 shadow-xl hover:shadow-2xl hover:cursor-pointer hover:-translate-y-1 transition-all"
          >
            <div className="flex-1 flex justify-between items-center">
              <div className="rounded">{event.summary}</div>
              <div className="h-6 rounded-lg bg-purple-500 px-2 text-white">
                {format(parseISO(event.start.dateTime), "do LLL hh:MM a")}
              </div>
            </div>
          </div>
        ))
      )}
    </ul>
  );
};
