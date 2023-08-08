import axios from "axios";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

interface ISejarahData {
  id: string;
  year: number;
  textarea: string;
  newData: boolean;
}

interface IData {
  sejarah: ISejarahData[];
  isLoading: boolean;
}

const SejarahCard = ({
  data,
  setData,
}: {
  data: ISejarahData;
  setData: React.Dispatch<React.SetStateAction<IData>>;
}) => {
  const [year, setYear] = useState(data.year);
  const [textarea, setTextarea] = useState(data.textarea);

  const onDelete = async () => {
    if (data.newData) {
      setData((prev) => {
        const newSejarah = prev.sejarah.filter((item) => item.id !== data.id);
        return {
          ...prev,
          sejarah: newSejarah,
        };
      });

      return;
    }

    try {
      setData((prev) => ({ ...prev, isLoading: true }));
      await axios(`/api/sejarah/${data.id}`, {
        method: "DELETE",
      });
      setData((prev) => ({
        ...prev,
        sejarah: prev.sejarah.filter((item) => item.id !== data.id),
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(Number(e.target.value));
  };

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(e.target.value);
  };
  return (
    <>
      <div className="flex justify-between items-center rounded-md border-2 border-gray-500 pl-2 pr-4 py-2">
        <input type="hidden" value={data.id} />
        <input type="checkbox" defaultChecked={data.newData} hidden />
        <input
          type="number"
          placeholder="Tahun..."
          className="w-full"
          onChange={onChangeYear}
          value={year}
        />
        <button type="button" onClick={onDelete}>
          <span className="text-red-600">
            <MdDelete />
          </span>
        </button>
      </div>
      <textarea
        className="w-full border-2 border-gray-500 outline-none rounded-md px-2 py-2"
        rows={5}
        placeholder="Teks..."
        value={textarea}
        onChange={onChangeTextarea}
      />
    </>
  );
};

export default SejarahCard;
