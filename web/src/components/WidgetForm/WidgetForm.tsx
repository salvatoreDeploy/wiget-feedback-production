import { CloseButton } from "../CloseButton/CloseButton";
import "../CloseButton/index.css";
import bugImage from "../../assets/bug.svg";
import ideiaImage from "../../assets/idea.svg";
import thoughtImage from "../../assets/thought.svg";
import { useState } from "react";
import { FeedBackTypeStep } from "../FeedBackTypeStep/FeedBackTypeStep";
import "../FeedBackTypeStep/index.css";
import { FeedBackContentStep } from "../FeedBackContentStep/FeedBackContentStep";
import "../FeedBackContentStep/index.css";
import "../ScreensShotButton/index.css";
import { FeedBackSuccesStep } from "../FeedBackSuccesStep/FeedBackSuccesStep";
import "../FeedBackSuccesStep/index.css";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImage,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideiaImage,
      alt: "Imagem de uma lampada",
    },
  },
  OTHER: {
    title: "Outros",
    image: {
      source: thoughtImage,
      alt: "Imagem nuvem de pensamento",
    },
  },
};

export type feedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedBackType] = useState<feedbackType | null>(null);
  const [feedbackSent, setfeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setfeedbackSent(false);
    setFeedBackType(null);
  }

  return (
    <div className="containerForm">
      {feedbackSent ? (
        <FeedBackSuccesStep onFeedBackRestartRequest={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedBackTypeStep onFeedBackTypeChanged={setFeedBackType} />
          ) : (
            <FeedBackContentStep
              feedbackType={feedbackType}
              onFeedBackRestartRequest={handleRestartFeedback}
              onFeedBackSent={() => setfeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer>
        Feito com ♥ pela{" "}
        <a className="footerUrl" href="https://projetosdeploy.com.br">
          ProjetosDeploy
        </a>
      </footer>
    </div>
  );
}
