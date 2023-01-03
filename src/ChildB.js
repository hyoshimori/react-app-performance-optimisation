import React from "react";

const ChildB = ({ countB }) => {
  console.log("%cChild B render", "color: red;");
  return (
    <div className="child">
      <h3>Child Conponent: B</h3>
      <p>Number of clicks：{countB}</p>
    </div>
  );
};

const MemoizedChildB = React.memo(ChildB);

export default MemoizedChildB;
