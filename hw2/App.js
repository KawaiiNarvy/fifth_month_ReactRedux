import './App.css';
import TourList from './components/TourList';
import {useState} from 'react';
import Mode from './components/Mode/Mode'
import { Footer } from './components/Footer/Footer';

function App() {
  const [mode, setMode] = useState({current: "day"})

  const style = {
    day: {
        color: "black",
        backgroundColor: "white",
    },
    night: {
        color: "white",
        backgroundColor: "black",
    },
};

const currentStyle = mode.current === "day" ? style.day : style.night;

  return (
  <div className="App" style={currentStyle}>
    <Mode mode={mode} changeMode={setMode}/>
    <TourList/>
    <Footer/>
  </div>
  )
}

export default App;