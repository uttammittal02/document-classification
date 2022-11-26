import React, { useState, useEffect } from "react";

export default function FormInput(props) {
  let id = props.id;
  return (
    <input
      value={props.data.id}
      type="text"
      className="w-40 h-10 border-solid border-2"
      key={props.id}
      onClick={(e) => {
        e.preventDefault();
        props.setActiveCellId(props.id);
      }}
      id={props.id}
      onContextMenu={(e) => {
        e.preventDefault();
        console.log(`Previewing ${props.id}`);
      }}
    />
  );
}
