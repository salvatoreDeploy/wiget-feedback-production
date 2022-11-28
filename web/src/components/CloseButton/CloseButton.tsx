import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button
      className="closeButton hover"
      title="Fechar formulario de feedback"
    >
      <X weight="bold" className="inconsX" />
    </Popover.Button>
  );
}
