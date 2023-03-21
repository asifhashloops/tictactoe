import React from "react";
import "./box.css";
const Box = ({ value, onClick }) => {
  const style = value === "X" ? "box x" : "box o";
  return (
    <>
      <button onClick={onClick} className={style}>
        {value}
      </button>
    </>
  );
};

export default Box;
