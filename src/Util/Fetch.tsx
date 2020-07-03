export const fetchPost = async ({ endpoint, data }: any) => {
  return fetch(`http://localhost:4000/${endpoint}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "cors",
  });
};
