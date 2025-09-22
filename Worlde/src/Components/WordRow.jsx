import InputBox from "./InputBox";

export default function WordRow({
  dispatch,
  setLetters,
  letters,
  finishedWord,
  isSubmitted,
  setIsSubmitted,
}) {
  // Identify letter in the index
  function updateLetter(index, value) {
    setLetters((prev) => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (finishedWord.length === 5) {
      console.log("Submitted");

      dispatch({
        type: "SUBMITTED",
        payload: { word: finishedWord, isLocked: true },
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-5 w-120 h-13 bg-white "
    >
      {letters.map((letter, index) => (
        <InputBox
          key={index}
          value={letter}
          onChange={(val) => updateLetter(index, val)}
        />
      ))}

      <button type="submit" className="hidden" aria-hidden="true" />
    </form>
  );
}
