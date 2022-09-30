import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import Widget from "../../template/Widget";
import { selectWalletAddress } from "../SignInWithEthereum/signInSlice";
import { RecentTransactionsResponseType, TransactionType } from "./types";

const ETHERSCAN_API_KEY = process.env.REACT_APP_ETHERSCAN_API_KEY;

export const RecentTransactionsWidget = () => {
  const currentWalletAddress = useAppSelector(selectWalletAddress);

  const [transactionList, setTransactionList] = useState<TransactionType[]>([]);

  async function getTransactionList(walletAddress: string) {
    const txnListRes =
      await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0
    &endblock=99999999&page=1&offset=10&sort=asc&apikey=${ETHERSCAN_API_KEY}`);

    const txnList = (await txnListRes.json()) as RecentTransactionsResponseType;
    setTransactionList(txnList.result);
    return txnList;
  }

  useEffect(() => {
    getTransactionList(currentWalletAddress);
  }, [currentWalletAddress]);

  return (
    <Widget header="Recent Transactions" className="bg-purple-500 -left-52">
      {transactionList.length === 0 ? (
        <div className="flex flex-1 items-center justify-center text-purple-800 border-4 border-dashed border-purple-600 rounded font-semibold">
          - No Recent Transactions -
        </div>
      ) : (
        <ul className="text-purple-200">
          {transactionList.map((item) => (
            <li key={item.blockNumber}>
              <span className="font-semibold">Block number:</span>{" "}
              {item.blockNumber}
            </li>
          ))}
        </ul>
      )}
    </Widget>
  );
};
