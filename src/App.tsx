import React, { useState } from "react";
import "./App.css";
import TextField from "./components/TextField";

export const App: React.FC = () => {
  const [value, setValue] = useState<String | any>("my initial state");
  const [myArr, setMyArr] = useState<any[]>([1, 2, 3, 4]);

  const deleteItem = (item: any) => {
    setMyArr([...myArr.filter((el) => el !== item)]);
  };

  return (
    <div className="App">
      <h1>My first TypeScript</h1>
      <TextField
        title="hello title"
        value={value}
        setValue={setValue}
        myArr={myArr}
        setMyArr={setMyArr}
        // age={4}
      />
      <div>
        {myArr.map((item) => {
          return (
            <li key={item} style={{ width: "200px", backgroundColor: "red", margin: '5px', borderRadius: '3px', justifyContent: 'space-between' }}>
              {item}
              <button onClick={() => deleteItem(item)}>delete</button>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default App;
