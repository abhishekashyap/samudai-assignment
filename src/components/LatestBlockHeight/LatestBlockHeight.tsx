import Widget from "../../template/Widget";

export const LatestBlockHeight = () => {
  return (
    <Widget
      header="Latest Ethereum Block height"
      className="bg-blue-500 -right-72 top-96"
    >
      <div className="flex flex-1 items-center justify-center text-blue-800 border-4 border-dashed border-blue-600 rounded font-semibold">
        - No information available -
      </div>
    </Widget>
  );
};
