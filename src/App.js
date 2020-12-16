import React, { useState } from "react";
import "./styles.css";

const signDictionary = {
  "😁": "happy",
  "😍": "heart face",
  "😂": "happy tears of joy",
  "❤️": "heart",
  "🥺": "pleading face",
  "😭": "crying",
  "🔥": "fire",
  "😡": "angry"
};

var signDatabase = Object.keys(signDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function signInputHandler(event) {
    //console.log(event.target.value);
    var userInput = event.target.value;
    var meaning = signDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Not found in dataBases";
    }
    console.log(meaning);
    setMeaning(meaning);
  }

  function signClickHandler(sign) {
    //console.log(sign);
    var meaning = signDictionary[sign];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="head">Emoji Reader</h1>
      <input onChange={signInputHandler}></input>
      <div className="emojiName"> Emoji name 👉 {meaning}</div>
      <h3> Available Emojis </h3>
      {signDatabase.map((sign) => {
        return (
          <span
            onClick={() => signClickHandler(sign)}
            style={{ cursor: "Pointer" }}
            key={sign}
          >
            {sign}
          </span>
        );
      })}
    </div>
  );
}
