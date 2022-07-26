import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl62d33qa5yi901t5esyg8tx9/master',
  cache: new InMemoryCache()
})