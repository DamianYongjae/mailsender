export const fetchPost = async ({ endpoint, data }: any) => {
  return fetch(`https://mailsender-api.vercel.app/${endpoint}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "cors",
  });
};
