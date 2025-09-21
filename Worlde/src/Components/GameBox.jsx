export default function GameBox({ children }) {
  return (
    <div className=" flex justify-center mt-20">
      <div className="inline-block bg-gray-500 p-4 rounded">{children}</div>
    </div>
  );
}
