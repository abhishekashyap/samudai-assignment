import { useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import { selectWalletAddress } from "../components/SignInWithEthereum/signInSlice";
import { PageLayout, ProtectedPageLayout } from "../layouts";
import Widget from "../template/Widget";

const ETHERSCAN_API_KEY = process.env.REACT_APP_ETHERSCAN_API_KEY;

export const Stats = () => {
  const currentWalletAddress = useAppSelector(selectWalletAddress);

  async function getTransactionList(walletAddress: string) {
    const txnListRes =
      await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0
    &endblock=99999999&page=1&offset=10&sort=asc&apikey=${ETHERSCAN_API_KEY}`);

    const txnList = await txnListRes.json();
    console.log("txnList: ", txnList);
    return txnList;
  }

  useEffect(() => {
    getTransactionList(currentWalletAddress);
  }, [currentWalletAddress]);

  return (
    <ProtectedPageLayout header="Stats">
      <PageLayout>
        <Widget
          header="Recent Transactions"
          className="bg-purple-500 -left-52"
        />
        <Widget
          header="Latest Ethereum Block height"
          className="bg-blue-500 -right-72 top-96"
        />
      </PageLayout>
    </ProtectedPageLayout>
  );
};
