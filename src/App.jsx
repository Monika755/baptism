import { useState } from "react";
import InvitationCover from "./InvitationCover";
import Home from "./Home";
import "./index.css";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="app">
      <div className={`scene ${opened ? "fade-out" : "fade-in"}`}>
        {!opened && (
          <InvitationCover onOpen={() => setOpened(true)} />
        )}
      </div>

      <div className={`scene ${opened ? "fade-in" : "fade-out"}`}>
        {opened && <Home />}
      </div>
    </div>
  );
}

export default App;