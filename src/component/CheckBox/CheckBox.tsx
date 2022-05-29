import React from "react";

type Props={
    className?: string;
    onClick?: Function;
    title?:string;
    index?:number;
    checked?:boolean;
}
function CheckBox(props:Props) {
  return (
    <input
      type="checkbox"
      id={`custom-checkbox-${props.index}`}
      name={props.title}
      value={props.title}
      checked={props.checked}
      onChange={()=>{
          if(props.onClick){
            props.onClick()
          }
      }}
    />
  );
}

export default CheckBox;
