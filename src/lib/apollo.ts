import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4v5o3o318l201ue7f2nhnpa/master",
  cache: new InMemoryCache(),
});
