import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TransactionType } from "../components/RecentTransactionsWidget/types";

const ETHERSCAN_API_KEY = process.env.REACT_APP_ETHERSCAN_API_KEY;

export const etherscanApiSlice = createApi({
  reducerPath: "signInApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.etherscan.io/api" }),
  endpoints: (builder) => ({
    getTransactionList: builder.query<TransactionType[], string>({
      query: (walletAddress) => ({
        url: "",
        params: {
          module: "account",
          action: "txlist",
          address: walletAddress,
          startblock: 0,
          endblock: 99999999,
          page: 1,
          offset: 10,
          sort: "asc",
          apikey: ETHERSCAN_API_KEY,
        },
      }),
      transformResponse: (response: { data: TransactionType[] }) =>
        response.data,
    }),
  }),
});

export const { useGetTransactionListQuery } = etherscanApiSlice;
