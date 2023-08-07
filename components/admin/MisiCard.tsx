"use client";

import { useState } from "react";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { Mission } from "@prisma/client";

interface IMissionsData extends Mission {
  newData: boolean;
}

interface IData {
  vission: string;
  missions: IMissionsData[];
  isLoading: boolean;
}

interface IMisiCardData {
  id: string;
  text: string;
  newData: boolean;
}

interface IMisiCardParams {
  order: number;
  data: IMisiCardData;
  setData: React.Dispatch<React.SetStateAction<IData>>;
}

const MisiCard = ({ order, data, setData }: IMisiCardParams) => {
  const [text, setText] = useState(data.text);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onDelete = async () => {
    try {
      setData((prev) => ({ ...prev, isLoading: true }));
      await axios(`/api/mission/${data.id}`, {
        method: "DELETE",
      });
      setData((prev) => ({
        ...prev,
        missions: prev.missions.filter((item) => item.id !== data.id),
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between items-center rounded-md border-2 border-gray-500 pl-2 pr-4 py-2">
      <div className="flex space-x-2 items-center w-full">
        <div className="rounded-md bg-primary-green text-white px-3 py-1">
          {order}
        </div>
        <input type="hidden" value={data.id} />
        <input type="checkbox" defaultChecked={data.newData} hidden />
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
