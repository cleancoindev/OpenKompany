import React from 'react';

export default ({
  fill = '#8F8F8F',
  width = 18,
  height = 16,
  handleHover = () => {},
  handleClear = () => {},
  handleClick = () => {},
}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    xmlns="http://www.w3.org/2000/svg"
    onClick={handleClick}
    onMouseOver={handleHover}
    onMouseLeave={handleClear}
    onFocus={handleHover}
  >
    <path
      d="M16.51 5.72998C16.687 5.75732 16.8328 5.87793 16.8882 6.04639C16.9439 6.21484 16.8987
      6.40088 16.7635 6.52441L12.9593 10.2217L13.8721 15.3979C13.8824 15.4326 13.886 15.4668
      13.886 15.5049C13.886 15.7593 13.6741 15.9692 13.4173 15.9692C13.3445 15.9692 13.2715
      15.9517 13.2022 15.9175L8.47806 13.4722L3.76785 15.9448C3.69852 15.9829 3.62552 16
      3.54935 16C3.45218 16 3.35501 15.9692 3.27518 15.9106C3.12918 15.8076 3.05643 15.6318
      3.08768 15.4565L3.97269 10.2495L0.144316 6.57275C0.0158982 6.45215 -0.0329299 6.2666
      0.0227341 6.09814C0.078154 5.92969 0.22415 5.80908 0.401152 5.78174L5.67703
      5.00439L8.0198 0.26123C8.09964 0.0996094 8.26297 0 8.43997 0C8.61697 0 8.78006
      0.0996094 8.85989 0.257812L11.2342 4.9873L16.51 5.72998Z"
      transform="translate(0.566406)"
      fill={fill}
    />
  </svg>
)