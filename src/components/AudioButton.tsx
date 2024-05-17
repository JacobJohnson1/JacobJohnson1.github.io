import React, { useState, useEffect } from "react";

export default function AudioButton() {

    let audio = new Audio("/ITHINKIMBOUTTOSTEAL.mp3")

    const start = () => {
        audio.play()
    }


  return (
    < div >
      <button onClick={start}>insert name of audio file here</button>
    </div >
  );
}