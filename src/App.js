import React, { useState } from "react";
import { BrowserRouter as Router, } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert.js";
// import About from "./components/About.js";
// import ImageCover from "./components/ImageCover.js";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <>
        <Navbar
          title="TextUtils"
          about="About Us"
          mode={mode}
          toggleDarkMode={toggleDarkMode}
        />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/imageCover" element={<ImageCover />} /> */}

            {/* <Route */}
              {/* path="/" */}
             {<TextForm showAlert={showAlert} mode={mode} />}
            {/* /> */}
          {/* </Routes> */}
          {/* element={<TextForm showAlert={showAlert} mode={mode} />} */}

        </div>
      </>
    </Router>
  );
}

export default App;
