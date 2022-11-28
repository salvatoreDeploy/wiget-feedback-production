import { Router } from "express";
import { CreateFeedbackController } from "./useCase/CreateFeedbackController";

const createFeedbackController = new CreateFeedbackController();

const feedBackRoutes = Router();

feedBackRoutes.post("/createfeedback", createFeedbackController.handle);

export { feedBackRoutes };
