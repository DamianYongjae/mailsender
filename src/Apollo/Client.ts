import ApolloClient from "apollo-boost";

export default new ApolloClient({
  uri: "https://reverent-johnson-8853fa.netlify.app/",
  // process.env.NODE_ENV === "development"
  //   ? "http://localhost:4000"
  //   : "https://prismagram-backend-damian.herokuapp.com/",
  headers: {
    mode: "cors",
  },
});
