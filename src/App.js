import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextUtils from './component/TextUtils';
import Alert from './component/Alert';
import About from './component/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [alert,setAlert]=useState(null)
  const showAlert=(msg,alt)=>{
    setAlert({
       msg:msg,
      alt:alt
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const mode=()=>{
    console.log("Clicked to dark mode")
    if(defMode ==="light"){
      document.body.style.backgroundColor=`#08194f`
      console.log("clicked to light mode")
      setMode("dark")
      showAlert("Your dark mood is enabled","success")

    }else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mood is enabled","succeass")
    }
  }
  const [defMode,setMode] =useState("light")
  return (
    <>
       {/* <Router> */}
      <Navbar click={defMode==="light"?"Click to change to darkmode":"Click to change to lightmode"}  mode={mode} defMode={defMode}/>
      <Alert alert={alert}/>
      {/* <Switch>
          <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}

          {/* <Route path="/"> */}
            <div  className="container mt-5">
              <TextUtils showAlert={showAlert} defMode={defMode}  title="Enter the text in text box" />
            </div>
          {/* </Route> */}
        {/* </Switch>
        </Router> */}
    </>
  );
}

export default App;
