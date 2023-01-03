// Rerendering of child components
import React, { useState, useCallback } from "react";
import ChildC from "./ChildC";
import ChildB from "./ChildB";
import "./style/app.css";

const App = () => {
  console.log("Parent rendered");
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [countC, setCountC] = useState(0);

  // ********** NOTE **********
  // This works but
  // const clickHandler = useCallback(() => {
  //   setCountC((pre) => pre + 1);
  // }, [])
  // This does not work
  // const clickHandler = useCallback(() => {
  //   setCountC(countC + 1);
  // }, [])
  // So you need to use the dependency
  // ********** NOTE **********
  const clickHandler = useCallback(() => {
    setCountC(countC + 1);
  }, [countC])
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

        {/* <div>
          <button
            onClick={() => {
              setCountC((pre) => pre + 1);
            }}
          >
            ButtonC
          </button>
          <span>Update the props which is to be passed to Child</span>
        </div> */}

      </div>
      <div>
        <p>Number of clicks：{countA}</p>
      </div>
      <ChildB countB={countB} />
      <ChildC countC={countC}  onClick={clickHandler}/>
    </div>
  );
};

export default App;
