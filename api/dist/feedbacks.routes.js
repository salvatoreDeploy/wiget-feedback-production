"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedBackRoutes = void 0;
const express_1 = require("express");
const CreateFeedbackController_1 = require("./useCase/CreateFeedbackController");
const createFeedbackController = new CreateFeedbackController_1.CreateFeedbackController();
const feedBackRoutes = (0, express_1.Router)();
exports.feedBackRoutes = feedBackRoutes;
feedBackRoutes.post("/createfeedback", createFeedbackController.handle);
