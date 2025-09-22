import NavBar from "./UI/NavBar";
import GameBox from "./Components/GameBox";
import WordRow from "./Components/WordRow";

import wordList from "./Server/WordsApi";
import Answer from "./Components/Answer";
import { useReducer, useState } from "react";
import { initialState, reducer } from "./Reducer/gameReducer";

const { id } = wordList; // Each id represents the word associated with it

// Answer memory
const randomNumber = Math.floor(Math.random() * id.length);
const answer = id[randomNumber];
const split = answer.split("");

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // WordRow migration
  const [letters, setLetters] = useState(Array(5).fill(""));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const finishedWord = letters.join("").toUpperCase();

  // Evaluation of the state
  // 1. Absent when word is not matching
  // 2. Amber when the word is in the array
  // 3. Correct when the word is matching

  return (
    <div>
      <NavBar />

      <h2 className="flex justify-center text-2xl">
        {state.guessCount}/6 attempts
      </h2>
      <GameBox>
        <WordRow
          dispatch={dispatch}
          setLetters={setLetters}
          letters={letters}
          finishedWord={finishedWord}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
      </GameBox>
      <Answer split={split} />
    </div>
  );
}

export default App;
