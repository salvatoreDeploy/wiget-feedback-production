"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFeedbackUseCase = void 0;
class CreateFeedbackUseCase {
    constructor(feedbacksRepository, mailprovider) {
        this.feedbacksRepository = feedbacksRepository;
        this.mailprovider = mailprovider;
    }
    async execute({ type, comment, screenshot }) {
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
exports.CreateFeedbackUseCase = CreateFeedbackUseCase;
