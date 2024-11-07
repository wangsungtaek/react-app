const Controller = ({ updateCount }) => {
  return (
    <>
      <button
        onClick={() => {
          updateCount(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          updateCount(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          updateCount(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          updateCount(+100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          updateCount(+10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          updateCount(+1);
        }}
      >
        +1
      </button>
    </>
  );
};

export default Controller;
