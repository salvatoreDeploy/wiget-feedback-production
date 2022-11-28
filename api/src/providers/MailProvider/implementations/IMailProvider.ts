import { ISendMailDTO } from "../dto/ISendMail";

interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}

export { IMailProvider };
