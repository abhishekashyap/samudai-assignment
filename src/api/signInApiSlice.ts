import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const signInApiSlice = createApi({
  reducerPath: "signInApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dev-gcn.samudai.xyz/api" }),
  endpoints: (builder) => ({
    addSignInData: builder.mutation({
      query: (walletAddress: string) => ({
        url: "/member/signup",
        method: "POST",
        body: JSON.stringify({
          walletAddress,
          chainId: 1,
          member: {
            did: "",
          },
        }),
      }),
    }),
  }),
});

export const { useAddSignInDataMutation } = signInApiSlice;
