export const fetchPost = async ({ endpoint, data }: any) => {
  return fetch(`https://https://mailsender-api.vercel.app/${endpoint}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Allow-Headers":
      //     "X-Requested-With, Access-Control-Allow-Origin, X-HTTP-Method-Override, Content-Type, Authentication, Accept",
      //   "Access-Control-Allow-Credentials": "true",
    },
    mode: "cors",
  }).then((res) => {
    return res;
  });
};
