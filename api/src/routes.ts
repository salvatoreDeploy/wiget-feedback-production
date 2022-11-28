import { Router } from "express";
import { feedBackRoutes } from "./feedbacks.routes";

const routes = Router();

routes.use("/feedbacks", feedBackRoutes);

export { routes };
