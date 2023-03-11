import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "75592591d2msh526f4b6d80da2c1p10f55ajsn6b197102e807",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

// Create a custom axios baseQuery to use the cryptoApiHeaders in each request
const baseQuery = fetchBaseQuery({
  baseUrl: "https://coinranking1.p.rapidapi.com/",
  headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery,
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => ({
        url: `/coins?limit=${count}`,
        method: "GET",
      }),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => ({
        url: `/coin/${coinId}`,
        method: "GET",
      }),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) => ({
        url: `coin/${coinId}/history?timeperiod=${timePeriod}`,
        method: "GET",
      }),
    }),
    getExchanges: builder.query({
      query: () => ({
        url: "/exchanges",
        method: "GET",
      }),
    }),
  }),
});

// Export the created API endpoints for use in the application
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;
