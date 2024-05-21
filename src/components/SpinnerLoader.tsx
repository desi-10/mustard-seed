import React from "react";
import { RotatingLines } from "react-loader-spinner";

const SpinnerLoader = () => {
  return (
    <RotatingLines
      width="20"
      strokeColor="rgb(23 37 84 / var(--tw-text-opacity))"
    />
  );
};

export default SpinnerLoader;
