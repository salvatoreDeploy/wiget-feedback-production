"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailProvider = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b06730cdecebc6",
        pass: "2c50eb0e6433af",
    },
});
class MailProvider {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Henrique Araujo <liderhenrique@teste.com>",
            subject: subject,
            html: body,
        });
    }
}
exports.MailProvider = MailProvider;
