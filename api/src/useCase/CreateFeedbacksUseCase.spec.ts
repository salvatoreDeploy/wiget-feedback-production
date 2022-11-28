import { Feedback } from "@prisma/client";
import { CreateFeedbackUseCase } from "./CreateFeedbackUseCase";

/* test("sum 2 + 2", () => {
  expect(2 + 2).toBe(5);
}); */

const createFeedbacksSpy = jest.fn();
const sendMailSpy = jest.fn();

const feedback: Feedback = {
  id: "teste",
  type: "BUG",
  comment: "example comment",
  screenshot: "test.jpg",
};

/* const createFeedbackUseCase = new CreateFeedbackUseCase(
  {
    create: async () => {
      return feedback;
    },
  },
  { sendMail: async () => {} }
); */

const createFeedbackUseCase = new CreateFeedbackUseCase(
  { create: createFeedbacksSpy },
  { sendMail: sendMailSpy }
);

describe("Create feedback", () => {
  it("Should be possible to create feedback", async () => {
    await expect(
      createFeedbackUseCase.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "data:image/png;base64,hashimage",
      })
    ).resolves.not.toThrow();

    expect(createFeedbacksSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("shouldn't be possible to send feedback without the type", async () => {
    await expect(
      createFeedbackUseCase.execute({
        type: "",
        comment: "example comment",
        screenshot: "data:image/png;base64,hashimage",
      })
    ).rejects.toThrow();
  });

  it("shouldn't be possible to send feedback without the comment", async () => {
    await expect(
      createFeedbackUseCase.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,hashimage",
      })
    ).rejects.toThrow();
  });

  it("shouldn't be possible to send feedback with an invalid screeshot", async () => {
    await expect(
      createFeedbackUseCase.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "image.pdf",
      })
    ).rejects.toThrow();
  });
});
