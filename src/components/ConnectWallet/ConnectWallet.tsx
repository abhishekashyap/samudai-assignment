import { FunctionComponent } from "react";
import { useEthers } from "../../context/EthereumSignInContext";
import Button from "../Button";
import { ConnectWalletProps } from "./types";

export const ConnectWallet: FunctionComponent<ConnectWalletProps> = ({
  onConnect,
}) => {
  const { provider } = useEthers();

  function connectWallet() {
    provider
      .send("eth_requestAccounts", [])
      .then(() => onConnect())
      .catch(() => console.error("User Rejected Request"));
  }

  return (
    <Button
      className="text-yellow-600 border-yellow-600 hover:bg-yellow-600"
      onClick={connectWallet}
    >
      Connect Wallet
    </Button>
  );
};
