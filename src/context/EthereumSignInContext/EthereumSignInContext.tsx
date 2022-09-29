import { ethers } from "ethers";
import type { FunctionComponent, PropsWithChildren } from "react";
import { createContext } from "react";
import { EthereumSignInContextProps } from "./types";

export const EthersContext = createContext<EthereumSignInContextProps>(null);

export const EthersProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  // @ts-ignore - window.ethereum is injected from the MetaMask plugin thus is not defined
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const value = { provider };

  return (
    <EthersContext.Provider value={value}>{children}</EthersContext.Provider>
  );
};
