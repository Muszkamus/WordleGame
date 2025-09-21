import LetterSquare from "./LetterSquare";

export default function Answer({ split }) {
  return (
    <div className="flex justify-center mt-20">
      <div className="grid grid-cols-5 w-120 h-13 bg-black">
        {split.map((letter, index) => {
          return <LetterSquare key={index}>{letter}</LetterSquare>;
        })}
      </div>
    </div>
  );
}
