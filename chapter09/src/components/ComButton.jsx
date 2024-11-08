import "./ComButton.css";

const ComButton = ({ text, type, onClick }) => {
  return (
    <button onClick={onClick} className={`ComButton ComButton_${type}`}>
      {text}
    </button>
  );
};

export default ComButton;
