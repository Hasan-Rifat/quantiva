// services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/' }), // update as needed
  endpoints: (builder) => ({
    /*  // Example endpoint
    getUsers: builder.query<any, void>({
      query: () => 'users',
    }), */
  }),
});

// export const { useGetUsersQuery } = api;
