"use client";

import { useState } from "react";
import { MdDelete } from "react-icons/md";

interface IMisiCardData {
  id: string;
  text: string;
}

interface IMisiCardParams {
  order: number;
  data: IMisiCardData;
}

const MisiCard = ({ order, data }: IMisiCardParams) => {
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
      <div className="flex space-x-2 items-center w-full">
        <div className="rounded-md bg-primary-green text-white px-3 py-1">
          {order}
        </div>
        <input type="hidden" value={data.id} />
        <input
          type="text"
          className="w-full"
          onChange={onChange}
          value={text}
        />
      </div>
      <button type="button" onClick={onDelete}>
        <span className="text-red-600">
          <MdDelete />
        </span>
      </button>
    </div>
  );
};
export default MisiCard;
