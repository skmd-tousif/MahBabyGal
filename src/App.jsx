import { useState } from "react";
import HugDay from "./components/HugDay";
import KissDay from "./components/KissDay";
import ValentineDay from "./components/ValentineDay";

function App() {


   // ===== PREVIEW MODE =====
  // change this manually to test
  // "hug" | "kiss" | "valentine" | null
  // const preview = "kiss";

  // if (preview === "hug") return <HugDay />;
  // if (preview === "kiss") return <KissDay />;
  // if (preview === "valentine") return <ValentineDay />;

  //---------------------------
  // controls whether surprise is opened
  const [opened, setOpened] = useState(false);

  // today's date
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1;

  // ===== FUNCTION TO SHOW DAY CONTENT =====
  const renderDayContent = () => {

    if (month === 2 && date === 12) return <HugDay />;
    if (month === 2 && date === 13) return <KissDay />;
    if (month === 2 && date === 14) return <ValentineDay />;

    return (
      <div>
        <h1>Hi MahBabyGal ❤️</h1>
        <p>
          This little place is made only for you.
        </p>
        <p>
          No matter the distance, you are always close to my heart.
        </p>
      </div>
    );
  };

  // ===== FIRST PAGE (ALWAYS SHOWN FIRST) =====
  if (!opened) {
    return (
      <div>
        <h1>For My Sanjana ❤️</h1>

        <p>
          I made something small for you.
        </p>

        <p>
          Because you are far away, I miss you a little more on days like these.
        </p>

        <button onClick={() => setOpened(true)}>
          Open my surprise 💌
        </button>
      </div>
    );
  }

  // ===== AFTER CLICK =====
  return renderDayContent();
}

export default App;
