import { useRef } from "react";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const historyRef = useRef(null);
  const teamRef = useRef(null);

  return (
    <>
      <Navbar historyRef={historyRef} teamRef={teamRef} />
      <Main historyRef={historyRef} />
      <Footer teamRef={teamRef} />
    </>
  );
}

export default App;
