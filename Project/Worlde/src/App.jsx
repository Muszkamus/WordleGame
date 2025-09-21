import NavBar from "./UI/NavBar";
import GameBox from "./Components/GameBox";
import WordRow from "./Components/WordRow";

import wordList from "./Server/WordsApi";
import Answer from "./Components/Answer";

const { id } = wordList; // Each id represents the word associated with it

const randomNumber = Math.floor(Math.random() * id.length);
const answer = id[randomNumber];

const split = answer.split("");

function App() {
  return (
    <div>
      <NavBar />
      <GameBox>
        <WordRow />
        <WordRow />
        <WordRow />
        <WordRow />
      </GameBox>
      <Answer split={split} />
    </div>
  );
}

export default App;
