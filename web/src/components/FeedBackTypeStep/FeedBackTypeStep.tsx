import { CloseButton } from "../CloseButton/CloseButton";
import { feedbackType, feedbackTypes } from "../WidgetForm/WidgetForm";

interface FeedBackTypeStepProps {
  onFeedBackTypeChanged: (type: feedbackType) => void;
}

export function FeedBackTypeStep({
  onFeedBackTypeChanged,
}: FeedBackTypeStepProps) {
  return (
    <>
      <header>
        <span className="boxFeeback">Deixe seu Feedback</span>
        <CloseButton />
      </header>

      <div className="selectedFeedBack">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="buttonForm hover focus"
              onClick={() => onFeedBackTypeChanged(key as feedbackType)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
