import { useContext } from "react";
import { EthersContext } from "./EthereumSignInContext";

export const useEthers = () => {
  const context = useContext(EthersContext);
  if (context === null) {
    throw new Error("useEthers must be used within a EthersProvider");
  }
  return context;
};
