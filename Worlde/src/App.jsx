import NavBar from "./UI/NavBar";
import GameBox from "./Components/GameBox";
import WordRow from "./Components/WordRow";

import wordList from "./Server/WordsApi";
import Answer from "./Components/Answer";
import { useReducer } from "react";
import { initialState, reducer } from "./Reducer/gameReducer";

const { id } = wordList; // Each id represents the word associated with it

const randomNumber = Math.floor(Math.random() * id.length);
const answer = id[randomNumber];

const split = answer.split("");

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <NavBar />

      <button
        className="flex justify-center text-1xl"
        onClick={() => dispatch({ type: "SUBMITTED" })}
      >
        Test
      </button>
      <GameBox>
        <h2>{state.guessCount}</h2>
        <WordRow />
      </GameBox>
      <Answer split={split} />
    </div>
  );
}

export default App;
