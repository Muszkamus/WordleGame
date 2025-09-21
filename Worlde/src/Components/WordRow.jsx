import { useState } from "react";
import InputBox from "./InputBox";
import { reducer } from "../Reducer/gameReducer";

// WordRow has finishedWord.

// Your reducer (gameReducer) wants to know when a word has been submitted.

// So, the “submit” action should carry finishedWord as a payload.

// How to trigger:

// Right now your <form> doesn’t actually submit anything.

// If you want, you can listen for onSubmit on the form, prevent default, then dispatch.

// Reducer responsibility:

// When it sees SUBMITTED, don’t just increment guessCount.

// Also push finishedWord into the state (maybe into a guesses array, or replace word).

// Temporary setup:

// You don’t need the full validation/Wordle logic yet.

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
  const finishedWord = letters.join("").toUpperCase();

  return (
    <form
      onSubmit={console.log("Submit")}
      className="grid grid-cols-5 w-120 h-13 bg-white "
    >
      {letters.map((letter, index) => (
        <InputBox
          key={index}
          value={letter}
          onChange={(val) => updateLetter(index, val)}
        />
      ))}
    </form>
  );
}
