import { useState } from "react";

interface ITupoksiData {
  id: string;
  title: string;
  textarea: string;
}

const TupoksiCard = ({ data }: { data: ITupoksiData }) => {
  const [title, setTitle] = useState(data.title);
  const [textarea, setTextarea] = useState(data.textarea);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(e.target.value);
  };
  return (
    <>
      <div className="flex justify-between items-center rounded-md border-2 border-gray-500 pl-2 pr-4 py-2">
        <input type="hidden" value={data.id} />
        <input
          type="number"
          placeholder="Judul..."
          className="w-full"
          onChange={onChangeTitle}
          value={title}
        />
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

export default TupoksiCard;
