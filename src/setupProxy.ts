import proxy from "http-proxy-middleware";

export default (app) => {
  app.use(proxy("sendmail", { target: "https://mailsender-api.vercel.app/" }));
};
