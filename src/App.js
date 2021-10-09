import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./Redux/actions/index";
import "./styles.css";

export default function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux Learning</h1>
      <h1>Increment/Decrement Counter</h1>
      <h2>Using React-Redux</h2>
      <div className="container">
        <a
          className="quantity-btn"
          title="Decrement"
          onClick={() => dispatch(decNumber())}
        >
          <span>-</span>
        </a>
        <input type="text" className="input-field" min="0" value={myState} />
        <a
          className="quantity-btn"
          title="Increment"
          onClick={() => dispatch(incNumber())}
        >
          <span>+</span>
        </a>
      </div>
    </div>
  );
}
