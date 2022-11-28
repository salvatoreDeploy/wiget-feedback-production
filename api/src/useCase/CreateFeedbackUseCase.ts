import { IMailProvider } from "../providers/MailProvider/implementations/IMailProvider";
import { ICreateFeedBackRequest } from "../repositories/dtos/ICreateFeedBackRequest";
import { IFeedbacksRepository } from "../repositories/IFeedbacksRepository";

class CreateFeedbackUseCase {
  constructor(
    private feedbacksRepository: IFeedbacksRepository,
    private mailprovider: IMailProvider
  ) {}

  async execute({ type, comment, screenshot }: ICreateFeedBackRequest) {
    if (!type) {
      throw new Error("Type is required.");
    }

    if (!comment) {
      throw new Error("Comment is required.");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64,")) {
      throw new Error("Invalid screenshot format.");
    }

    const feedback = this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailprovider.sendMail({
      subject: "Novo feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do feedback: ${type}<p>`,
        `<p>Comentario: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}">` : null,
        `</div>`,
      ].join("\n"),
    });

    return feedback;
  }
}

export { CreateFeedbackUseCase };
