import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";
import { WidgetForm } from "../WidgetForm/WidgetForm";
import "../WidgetForm/index.css";

export function Widget() {
  return (
    <Popover className="container absolute bottom-4 right-4">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="button group">
        <ChatTeardropDots className="chatTeardDropsDots" />

        <span className="spanFeedBack group-hover">
          <span>FeedBack</span>
        </span>
      </Popover.Button>
    </Popover>
  );
}
