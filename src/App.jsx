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

  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1;

  if (month === 2 && date === 12) {
    return <HugDay />;
  }

  if (month === 2 && date === 13) {
    return <KissDay />;
  }

  if (month === 2 && date === 14) {
    return <ValentineDay />;
  }

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h1>Hi Sanjana ❤️</h1>
      <p>Something special is here for you mah bbg...</p>
    </div>
  );
}

export default App;
