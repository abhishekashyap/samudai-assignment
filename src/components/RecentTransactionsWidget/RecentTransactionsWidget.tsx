import { useGetTransactionListQuery } from "../../api/etherscanApiSlice";
import { useAppSelector } from "../../app/hooks";
import Widget from "../../template/Widget";
import { selectWalletAddress } from "../SignInWithEthereum/signInSlice";

export const RecentTransactionsWidget = () => {
  const currentWalletAddress = useAppSelector(selectWalletAddress);

  const { data: transactionList = [], isLoading } =
    useGetTransactionListQuery(currentWalletAddress);

  return (
    <Widget header="Recent Transactions" className="bg-purple-500 -left-52">
      {transactionList.length === 0 ? (
        <div className="flex flex-1 items-center justify-center text-purple-800 border-4 border-dashed border-purple-600 rounded font-semibold">
          {isLoading ? `Loading...` : `- No Recent Transactions -`}
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
