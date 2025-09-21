export default function LetterSquare({ children }) {
  // Here we print each letter in each Letter square given
  return (
    <div className="bg-stone-200 my-2 mx-3">
      <p className="grid place-items-center-safe text-2xl ">{children}</p>
    </div>
  );
}
