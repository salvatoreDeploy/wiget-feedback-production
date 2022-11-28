import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../Loading/Loading";
import "../Loading/index.css";

interface ScreenShotButtonProps {
  screenShot: string | null;
  onScreenShotTook: (screenShot: string | null) => void;
}

export function ScreensShotButton({
  screenShot,
  onScreenShotTook,
}: ScreenShotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    //console.log(base64image);

    onScreenShotTook(base64image);

    setIsTakingScreenshot(false);
  }

  if (screenShot) {
    return (
      <button
        type="button"
        onClick={() => onScreenShotTook(null)}
        /* Somente para teste pois pagina não tem fundo */
        style={{
          backgroundImage: `url(${screenShot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 180,
        }}
        className="screenShotButton"
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="buttonFooterCamera"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="buttonCamera" />}
    </button>
  );
}
