import { SiweMessage } from "siwe";

export function createSiweMessage(address: string, statement: string) {
  const origin = window.location.origin;
  const domain = window.location.host;

  const message = new SiweMessage({
    domain,
    address,
    statement,
    uri: origin,
    version: "1",
    chainId: 1,
  });

  return message.prepareMessage();
}
