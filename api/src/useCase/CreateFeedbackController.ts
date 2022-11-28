import { Request, Response } from "express";
import { CreateFeedbackUseCase } from "./CreateFeedbackUseCase";
import { FeedbackRepository } from "../repositories/FeedbacksRepository";
import { MailProvider } from "../providers/MailProvider/implementations/Mailprovider";

class CreateFeedbackController {
  async handle(req: Request, res: Response) {
    const { type, comment, screenshot } = req.body;

    const feedbacksRepository = new FeedbackRepository();
    const mailProvider = new MailProvider();

    const createFeedbackUseCase = new CreateFeedbackUseCase(
      feedbacksRepository,
      mailProvider
    );

    const result = await createFeedbackUseCase.execute({
      type,
      comment,
      screenshot,
    });

    return res.status(201).json(result);
  }
}

export { CreateFeedbackController };
