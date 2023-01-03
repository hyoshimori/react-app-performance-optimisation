import React from "react";

const ChildC = ({ countC, onClick }) => {
  console.log("%cChild C render", "color: red;");
  return (
    <div className="child">
      <h3>Child Conponent: C</h3>
      <div>
        <button
          onClick={onClick}
        >
          ButtonC
          </button>
          <span>Update the props which is to be passed to Child</span>
        </div>
      <p>Number of clicks：{countC}</p>
    </div>
  );
};

const MemoizedChildC = React.memo(ChildC);

export default MemoizedChildC;
