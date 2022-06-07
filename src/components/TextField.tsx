import React, { useState } from "react";

interface Props {
  title?: String;
  value: String | any;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  myArr: number[];
  setMyArr: React.Dispatch<React.SetStateAction<any[]>>;
}

type Inner = {
  age: any;
};

export const TextField: React.FC<Props> = (
  { title, value, setValue, myArr, setMyArr }: Props,
  props: Inner
) => {
  console.log('🚀 ~ props', props)
  const addToArray = () => {
    setMyArr([...myArr, value]);
    setValue("");
  };

  return (
    <div>
      <h2> {title}</h2>
      <input
        placeholder="set your task"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="button" onClick={addToArray}>
        send
      </button>
      <div>{value}</div>
      <div>{props.age}</div>
    </div>
  );
};

export default TextField;
