import React from "react";

const ButtonProcess = ({ onClick, error }) => {
  return (
    <div className='p-5'>
      <button onClick={onClick} className='border border-black p-1'>
        Process
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ButtonProcess;
