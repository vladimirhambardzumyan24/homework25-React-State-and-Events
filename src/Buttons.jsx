export default function Buttons({onClick,btnName}) {
  return (
    <button className="btn" onClick={onClick}>
      {btnName}
    </button>
  );
}
