import React from "react";
import { useState } from "react";
import { Footer } from "../../components/Footer/Footer.js";
import Header from "../../components/Header/Header.js";
import Mode from '../../components/Mode.js'

export function ProfilePage() {

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
      <div style={currentStyle}>
        <Header/>
        <div style={{
      'display': 'flex',
      'height': '100vh',
      'justify-content': 'center',
      'align-content': 'center',
      'align-items': 'center'}}>
          <Mode mode={mode} changeMode={setMode} />
        </div>
        <Footer/>
      </div>
  )
}
