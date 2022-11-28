"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackRepository = void 0;
const prismaClient_1 = require("../database/prismaClient");
class FeedbackRepository {
    async create({ type, comment, screenshot }) {
        const feedback = await prismaClient_1.prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            },
        });
        return feedback;
    }
}
exports.FeedbackRepository = FeedbackRepository;
