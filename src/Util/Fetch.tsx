export const fetchPost = async ({ endpoint, data }: any) => {
  return fetch(`https://mailsender-api.vercel.app/${endpoint}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
      // Accept: "application/json",
      // "Access-Control-Allow-Headers":
      //   "X-Requested-With, Access-Control-Allow-Origin, X-HTTP-Method-Override, Content-Type, Authentication, Accept",
      // "Access-Control-Allow-Credentials": "true",
    },
    mode: "cors",
  });
};
