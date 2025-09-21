import { useState } from "react";
import InputBox from "./InputBox";

export default function WordRow() {
  const [letters, setLetters] = useState(Array(5).fill(null));

  // Identify letter in the index
  function updateLetter(index, value) {
    setLetters((prev) => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });
  }
  const x = letters.join("").toUpperCase();
  console.log(x);
  return (
    <div className="grid grid-cols-5 w-120 h-13 bg-white ">
      {letters.map((letter, index) => (
        <InputBox
          key={index}
          value={letter}
          onChange={(val) => updateLetter(index, val)}
        />
      ))}
    </div>
  );
}
