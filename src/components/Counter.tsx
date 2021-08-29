import React, { FC } from "react";

const Counter: FC<{value:number}> = (props) => {
  return <div>Current value: {props.value}</div>;
};

export default Counter;