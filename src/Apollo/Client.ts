import {ApolloClient,HttpLink} from "apollo-boost";

export default () => {
  return new ApolloClient({
    // uri: "https://mailsender-api.vercel.app/",
    // // process.env.NODE_ENV === "development"
    // //   ? "http://localhost:4000"
    // //   : "https://prismagram-backend-damian.herokuapp.com/",
    // headers: {
    //   mode: "cors",
    // },
    link: new HttpLink({
      uri: `https://mailsender-api.vercel.app/`, // Server URL (must be absolute)
      credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
      // Use fetch() polyfill on the server
      fetch: (fetch as any),
      // headers: {
      //   Authorization:
      //     initialState && `Bearer ${initialState.cookies[cookieName.token]}`,
      // },
      fetchOptions: {
        mode: "cors",
      },
      
  }),
  cache: new InMemoryCache({
    dataIdFromObject: (o) => o.id,
  }).restore(initialState),
}
