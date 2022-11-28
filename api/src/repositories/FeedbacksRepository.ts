import { prisma } from "../database/prismaClient";
import { ICreateFeedBackDTO } from "./dtos/ICreateFeedBackDTO";
import { IFeedbacksRepository } from "./IFeedbacksRepository";

class FeedbackRepository implements IFeedbacksRepository {
  public async create({ type, comment, screenshot }: ICreateFeedBackDTO) {
    const feedback = await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });

    return feedback;
  }
}

export { FeedbackRepository };
