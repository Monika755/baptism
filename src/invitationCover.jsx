import { useState } from "react";
import "./invitationCover.css"; 

export default function InvitationCover({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const handleClick = () => {
    setOpening(true);

    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <div className="cover-page" onClick={handleClick}>
      <div className={`envelope ${opening ? "open" : ""}`}>
        <div className="flap"></div>

        <div className="letter"> 
          <div className="seal"></div>

          <p>Հրավեր</p>
        </div>
      </div>

      {!opening && (
        <span className="hint">
          Սեղմիր բացելու համար
        </span>
      )}
    </div>
  );
}