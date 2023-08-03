"use client";

import { useState } from "react";
import { MdDelete } from "react-icons/md";

interface IData {
  id: string;
  text: string | number;
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

  const onDelete = () => {
    console.log("request delete to server...");
    console.log("delete simulated on id " + data.id);
  };

  return (
    <div className="flex justify-between items-center rounded-md border-2 border-gray-500 pl-2 pr-4 py-2">
      <input type="hidden" value={data.id} />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full"
        onChange={onChange}
        value={text}
      />
      <button type="button" onClick={onDelete}>
        <span className="text-red-600">
          <MdDelete />
        </span>
      </button>
    </div>
  );
};
export default InputFieldText;
