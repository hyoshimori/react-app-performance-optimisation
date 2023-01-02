import React from "react";

const Child = ({ countB }) => {
  console.log("%cChild render", "color: red;");
  return (
    <div className="child">
      <h3>Child Conponents</h3>
      <p>Number of clicks：{countB}</p>
    </div>
  );
};

export default Child;
