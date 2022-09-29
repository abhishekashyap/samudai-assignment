import { useEthers } from "../../context/EthereumSignInContext";
import Button from "../Button";

export const ConnectWallet = () => {
  const { provider } = useEthers();

  function connectWallet() {
    provider
      .send("eth_requestAccounts", [])
      .catch(() => console.error("User Rejected Request"));
  }

  return <Button onClick={connectWallet}>Connect Wallet</Button>;
};
