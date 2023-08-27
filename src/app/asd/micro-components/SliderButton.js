"use client";

const SliderButton = ({ onClickCallback, value }) => {
  const isLeft = value == "<" ? { left: "20px" } : { right: "20px" };
  return (
    <button className='SliderButton' onClick={onClickCallback} style={isLeft}>
      {value}
    </button>
  );
};

export default SliderButton;
