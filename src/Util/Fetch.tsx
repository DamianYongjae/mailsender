import { Cookies } from "react-cookie";

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
      Authorization: `Bearer ${new Cookies().get(cookieName.token)}`,
    },
    mode: "cors",
  }).then((res) => {
    return res;
  });
};
