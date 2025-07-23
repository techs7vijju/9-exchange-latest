import React, { useState } from "react";


const StepperInput = ({ value: initialValue = 0, min = 0, max = Infinity, step = 1, onChange = () => {} }) => {
  const [value, setValue] = useState(initialValue);

  const decrement = () => {
    if (value - step >= min) setValue(prev => prev - step);
  };

  const increment = () => {
    if (value + step <= max) setValue(prev => prev + step);
  };

  return (
    <div div className="stake-stepper-input-container">
    <div className="stake-stepper-input w-100">
      <button className="step-btn" onClick={decrement}>-</button>
      <div className="step-value">{value}</div>
      <button className="step-btn" onClick={increment}>+</button>
    </div>
    <div className="stake-row">
        <div className="row mt-2">
        <div className="col-6">
            <button>+100</button>

        </div>
        <div className="col-6">
            <button>+500</button>

        </div>
        </div>
        <div className="row mt-2">
        <div className="col-6">
            <button>+1000</button>

        </div>
        <div className="col-6">
            <button>+10000</button>

        </div>
        </div>
        <div className="row mt-2">
        <div className="col-6">
            <button>+100000</button>

        </div>
        <div className="col-6">
            <button>+500000</button>

        </div>
        </div>
        <div className="row mt-2">
        <div className="col-6">
            <button>+1000000</button>

        </div>
        <div className="col-6">
            <button>+5000000</button>

        </div>
        </div>
    </div>
    </div>
  );
};

export default StepperInput;
