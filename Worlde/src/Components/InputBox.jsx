function InputBox({ letter, onChange, disabled }) {
  return (
    <input
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      value={letter}
      className="grid place-items-center-safe text-2xl border-2 uppercase "
      maxLength={1}
    ></input>
  );
}

export default InputBox;
