import './App.css'
import Home from "./components/pages/Home.tsx";
import ModeSwitch from "./components/molecules/ModeSwitch.tsx";


function App() {


  return (
      <div className={"min-h-screen bg-white dark:bg-neutral-800"}>
          <ModeSwitch/>
          <Home/>
      </div>

  )
}

export default App
