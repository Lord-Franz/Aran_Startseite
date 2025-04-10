import './App.css'
import Home from "./components/pages/Home.tsx";
import ModeSwitch from "./components/molecules/ModeSwitch.tsx";
import {useState} from "react";


function App() {

    const [mode, setMode] = useState(false);

  return (
      <>
          <ModeSwitch
              isOn={mode}
              handleSwitch={() => setMode(!mode)}/>
          <Home/>
      </>

  )
}

export default App
