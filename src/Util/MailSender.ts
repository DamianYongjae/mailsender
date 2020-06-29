import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import sgMail from "@sendgrid/mail";
import nodemailerSendgrid from "nodemailer-sendgrid";

export const sendMailNew = (email: any) => {
  const transport = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey:
        "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",
    })
  );

  return transport.sendMail(email);
};

export const sendScheduledMail = (
  address: string,
  subject: String,
  content: string
) => {
  const email = {
    from: "CBLM@CBLM.com",
    to: address,
    subject: subject,
    html: `기도 지향 내용: <p>${content}</p>`,
    send_at: new Date(),
  };
  return sendMailNew(email);
};
