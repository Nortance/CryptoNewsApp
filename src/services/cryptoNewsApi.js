import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "75592591d2msh526f4b6d80da2c1p10f55ajsn6b197102e807",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

// Create a custom axios baseQuery to use the cryptoApiHeaders in each request
const baseQuery = fetchBaseQuery({
  baseUrl: "https://bing-news-search1.p.rapidapi.com",
  headers: cryptoNewsHeaders,
});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery,
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => ({
        url: `/news/search?q=${newsCategory}&count=${count}`,
        method: "GET",
        params: { safeSearch: "Off", textFormat: "Raw" },
      }),
    }),
  }),
});

// Export the created API endpoints for use in the application
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
