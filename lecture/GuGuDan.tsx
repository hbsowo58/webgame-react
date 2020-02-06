import * as React from "react";
import { useState, useRef } from "react";

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputEl = useRef<HTMLInputElement>();

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputEl.current;
    if (parseInt(value) === first * second) {
      setResult("정답");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      if (input) {
        input.focus();
      }
    } else {
      setResult("땡");
      if (input) {
        input.focus();
      }
    }
  };

  return (
    <>
      <div>
        {first} 곱하기 {second}는 ?
        <form onSubmit={onSubmitForm}>
          <input
            ref={inputEl}
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </form>
        <div id="reuslt">{result}</div>
      </div>
    </>
  );
};

export default GuGuDan;
