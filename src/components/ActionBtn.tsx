import React from "react";
import { Button } from "./ui/button";
import SpinnerLoader from "./SpinnerLoader";

type TypeActionBtn = {
  isSubmitting: boolean;
  loadingLabel: string;
  label: string;
};

const ActionBtn = ({ isSubmitting, loadingLabel, label }: TypeActionBtn) => {
  return (
    <div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full  bg-amber-400 text-blue-900 hover:bg-blue-900 hover:text-amber-400 transition-colors duration-300 font-bold disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? (
          <div className="flex items-center space-x-2">
            <SpinnerLoader />
            <span className="cursive">{loadingLabel}</span>
          </div>
        ) : (
          <div>{label}</div>
        )}
      </Button>
    </div>
  );
};

export default ActionBtn;
