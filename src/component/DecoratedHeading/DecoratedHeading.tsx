import React from 'react'
import "./DecoratedHeading.css";
type Props={
    primary:string;
    secondary:string;
}
function DecoratedHeading(props:Props) {
  return (
    <h3 className="nk-decorated-h-2">
      <span>
        <span className="text-main-1">{props.primary}</span> {props.secondary}
      </span>
    </h3>
  );
}

export default DecoratedHeading