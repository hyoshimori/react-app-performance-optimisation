// Rerendering of child components
import React, { useState } from "react";
import Child from "./Child";
import "./style/app.css";

const App = () => {
  console.log("Parent rendered");
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  return (
    <div className="parent">
      <div>
        <h3>Parent components</h3>
        <div>
          <button
            onClick={() => {
              setCountA((pre) => pre + 1);
            }}
          >
            ButtonA
          </button>
          <span>Update the parent</span>
        </div>

        {/* Button B starts from here */}

        <div>
          <button
            onClick={() => {
              setCountB((pre) => pre + 1);
            }}
          >
            ButtonB
          </button>
          <span>Update the props which is to be passed to Child</span>
        </div>
      </div>
      <div>
        <p>Number of clicks：{countA}</p>
      </div>
      <Child countB={countB} />
    </div>
  );
};

export default App;
