import React from "react";
import logo from "../../logo.svg";
import Counter from "../Counter";
import {
  addCount,
  minusCount,
  addCountAsync,
  minusCountAsync,
} from "../../redux/Counter/reducer";
import "../../App.css";
import { useAppDispatch, useAppSelector } from "../../hook/redux";

function QuickDemo() {
  const dispatch = useAppDispatch();
  const { clicks,loading } = useAppSelector((state) => state.CountReducer);

  const increment = (num: number) => {
    dispatch(addCount(num));
  };

  const decrement = (num: number) => {
    dispatch(minusCount(num));
  };

  const incrementAsync = (num: number) => {
    dispatch(addCountAsync(num));
  };
  const decrementAsync = (num: number) => {
    dispatch(minusCountAsync(num));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter
          value={clicks}
          loading={loading}
          onIncrement={() => increment(1)}
          onDecrement={() => decrement(1)}
          onIncrementAsync={() => incrementAsync(1)}
          onDecrementAsync={() => decrementAsync(1)}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          Learn{" "}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React,
          </a>{" "}
          <a
            className="App-link"
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Typescript,
          </a>{" "}
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux,
          </a>{" "}
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux,
          </a>{" "}
          <a
            className="App-link"
            href="https://www.npmjs.com/package/redux-injectors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Injectors
          </a>{" "}
          and{" "}
          <a
            className="App-link"
            href="https://redux-saga.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Saga
          </a>
        </div>
      </header>
    </div>
  );
}

export default QuickDemo;
