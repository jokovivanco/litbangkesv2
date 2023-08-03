"use client";

import { useState } from "react";

interface IData {
  id: number;
  text: string;
}

interface IInputFieldTextParams {
  placeholder?: string;
  data: IData;
}

const InputFieldText = ({ placeholder = "", data }: IInputFieldTextParams) => {
  const [text, setText] = useState(data.text);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <input
      placeholder={placeholder}
      type="text"
      onChange={onChange}
      className="w-full rounded-md border-2 border-gray-500 px-4 py-2"
      value={text}
    />
  );
};
export default InputFieldText;
