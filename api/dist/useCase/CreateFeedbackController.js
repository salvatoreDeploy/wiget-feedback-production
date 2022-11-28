"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFeedbackController = void 0;
const CreateFeedbackUseCase_1 = require("./CreateFeedbackUseCase");
const FeedbacksRepository_1 = require("../repositories/FeedbacksRepository");
const Mailprovider_1 = require("../providers/MailProvider/implementations/Mailprovider");
class CreateFeedbackController {
    async handle(req, res) {
        const { type, comment, screenshot } = req.body;
        const feedbacksRepository = new FeedbacksRepository_1.FeedbackRepository();
        const mailProvider = new Mailprovider_1.MailProvider();
        const createFeedbackUseCase = new CreateFeedbackUseCase_1.CreateFeedbackUseCase(feedbacksRepository, mailProvider);
        const result = await createFeedbackUseCase.execute({
            type,
            comment,
            screenshot,
        });
        return res.status(201).json(result);
    }
}
exports.CreateFeedbackController = CreateFeedbackController;
