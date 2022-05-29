import React from "react";
import "../../App.css";

interface ICounterProps {
  value?: number;
  loading?: boolean
  onIncrement?: any;
  onDecrement?: any;
  onIncrementAsync?: any;
  onDecrementAsync?: any;
}
const Counter: React.FC<ICounterProps> = ({
  value,
  loading,
  onIncrement,
  onDecrement,
  onIncrementAsync,
  onDecrementAsync
}): JSX.Element => {
  return (
    <div>
      <button onClick={onIncrementAsync} className="button">
        Increment after 5 second
      </button>{" "}
      <button onClick={onDecrementAsync} className="button">
        Decrement after 5 second
      </button>{" "}
      <button onClick={onIncrement} className="button">
        + Increment
      </button>{" "}
      <button onClick={onDecrement} className="button">
        - Decrement
      </button>
      <hr />
      <div>Clicked: {value} times</div>
      {
        loading&&(   <div>Loading...</div>)
      }
   
    </div>
  );
};

export default Counter;
