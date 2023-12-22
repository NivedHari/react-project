import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  if (props.type === "select") {
    return (
      <div className={`${classes.control} `}>
        <label htmlFor={props.id}>{props.label}</label>
        <select id={props.id} value={props.value} onChange={props.onChange}>
          <option value="">Select</option>
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className={`${classes.control} `}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
