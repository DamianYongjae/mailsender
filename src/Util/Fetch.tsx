export const fetchPost = async ({ endpoint, data }: any) => {
  return fetch(`https://mailsender-api-john.herokuapp.com/${endpoint}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "*",
      // "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
      // "Access-Control-Allow-Credentials": "true",
    },
    mode: "cors",
  });
};
