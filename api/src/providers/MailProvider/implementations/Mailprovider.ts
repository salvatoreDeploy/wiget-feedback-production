import nodemailer from "nodemailer";
import { ISendMailDTO } from "../dto/ISendMail";
import { IMailProvider } from "./IMailProvider";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b06730cdecebc6",
    pass: "2c50eb0e6433af",
  },
});

class MailProvider implements IMailProvider {
  async sendMail({ subject, body }: ISendMailDTO) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Henrique Araujo <liderhenrique@teste.com>",
      subject: subject,
      html: body,
    });
  }
}

export { MailProvider };
