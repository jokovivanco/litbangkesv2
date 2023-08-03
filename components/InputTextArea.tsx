"use client";

import { ChangeEvent, useState } from "react";

interface IData {
  id: string;
  textarea: string;
}

interface IInputTextAreaParams {
  placeholder?: string;
  data: IData;
}

const InputTextArea = ({ placeholder, data }: IInputTextAreaParams) => {
  const [text, setText] = useState(data.textarea);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <textarea
      className="w-full border-2 border-gray-500 outline-none rounded-md px-2 py-2"
      rows={5}
      placeholder={placeholder}
      value={text}
      onChange={onChange}
    />
  );
};
export default InputTextArea;
