import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
  // useEffect(() => {
  //   const disableRightClick = (event) => event.preventDefault();
  //   const disableShortcuts = (event) => {
  //     if (event.ctrlKey && event.key.toLowerCase() === "u") {
  //       event.preventDefault();
  //     }
  //     if (event.keyCode === 123) {
  //       event.preventDefault();
  //     }
  //   };

  //   document.addEventListener("contextmenu", disableRightClick);
  //   document.addEventListener("keydown", disableShortcuts);

  //   return () => {
  //     document.removeEventListener("contextmenu", disableRightClick);
  //     document.removeEventListener("keydown", disableShortcuts);
  //   };
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
