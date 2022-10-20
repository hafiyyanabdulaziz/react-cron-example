import React from "react";

const Input = ({ onChange, value }) => {
  return (
    <div className='border border-black p-5'>
      <p>Input cron expression</p>
      <input
        onChange={onChange}
        type='text'
        value={value}
        className='border border-black'
      />
    </div>
  );
};

export default Input;
