export const fetchPost = async ({ endpoint, data }: any) => {
  // return fetch(`https://mailsender-api-john.herokuapp.com/${endpoint}`, {
  return fetch(`https://mailsender-api.vercel.app:4000/${endpoint}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  });
};
