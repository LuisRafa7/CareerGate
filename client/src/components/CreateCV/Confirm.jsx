import React from "react";

function Confirm({ setNumber, submit }) {
  const handleConfirm = () => {
    setNumber(0);
    submit();
  };

  return (
    <div>
      <button onClick={handleConfirm}>Confirm your CV</button>
    </div>
  );
}

export default Confirm;
