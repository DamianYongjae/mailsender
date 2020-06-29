import ApolloClient from "apollo-boost";

export default new ApolloClient({
  uri: "http://localhost:4000",
  // process.env.NODE_ENV === "development"
  //   ? "http://localhost:4000"
  //   : "https://prismagram-backend-damian.herokuapp.com/",
  headers: {
    mode: "cors",
  },
});
