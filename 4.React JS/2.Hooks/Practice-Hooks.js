import React, { useState } from 'react'


export default function Day1() {

    const [text , setText] = useState("Welcome Buddy...!");
    let newText = "Hello World...!";
    
    function changeText() {
        if(text === "Welcome Buddy...!") {
            setText(newText);
        } else {
            setText('Welcome Buddy...!')
        }

    }

  return (
    <div>
        <h1 id="text">{text}</h1>

        <button onClick={changeText} class="bg-black">
            Change Text
        </button>
    </div>
  )
}
