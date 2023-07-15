import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { 
//   BrowserRouter, 
//   Route, 
//   Routes
//  } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [mode2, setMode2] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#050927';
      showAlert("Dark mode has been enabled", "success");
      setInterval(() => {
        document.title = 'TextUtils- Dark mode'
      }, 2000);

      setInterval(() => {
        document.title = 'TextUtils- Amazing install now'
      }, 1500);

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }


  }


  const toggleMode2 = () => {
    if (mode2 === 'light' && mode === 'light') {
      setMode2('green');
      document.body.style.backgroundColor = 'green';
      showAlert("Green mode has been enabled", "success");
    } else if (mode2 === 'light' && mode === 'dark') {
      setMode2('light');

    } else {
      setMode2('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }


  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" />*/}
      {/* <BrowserRouter> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} mode2={mode2} toggleMode2={toggleMode2} />
      <Alert alert={alert} />
      <div className="container my-3" >
      {/* <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={ */}
                <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} mode2={mode2}/>
              {/* }
            ></Route>
          </Routes> */}
        </div>
        {/* </BrowserRouter> */}
     


     
    </>
  );
}

export default App;
