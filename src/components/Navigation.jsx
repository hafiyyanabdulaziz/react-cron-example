import React from "react";

const Navigation = ({ data, setTab }) => {
  const onCLick = (index) => {
    setTab(index);
  };
  return (
    <div className=''>
      {data.map((item, index) => (
        <button
          key={index}
          onClick={() => onCLick(item.tab)}
          className='border border-black p-1 m-1 '>
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
