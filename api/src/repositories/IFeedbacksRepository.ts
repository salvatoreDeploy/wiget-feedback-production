import { Feedback } from "@prisma/client";
import { ICreateFeedBackDTO } from "./dtos/ICreateFeedBackDTO";

interface IFeedbacksRepository {
  create(data: ICreateFeedBackDTO): Promise<Feedback>;
}

export { IFeedbacksRepository };
