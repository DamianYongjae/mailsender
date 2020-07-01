import cookie from "cookie";

const cookieName = {
  token: "__session",
  authorization: "Authorization",
};

export const fetchPost = async ({ endpoint, data }: any) => {
  return fetch(`https://mailsender-api.vercel.app/${endpoint}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods":
        "GET, POST, PUT, PATCH, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Origin, Content-Type, X-Auth-Token, X-Requested-With, Accept, Authorization",
      "Access-Control-Max-Age": "86400",
      "Authorization": `Bearer ${new Cookies().get(cookieName.token)}`,
    },
    mode: "cors",
  }).then((res) => {
    return res;
  });
};
