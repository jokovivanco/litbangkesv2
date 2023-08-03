"use client";

import { MdDelete } from "react-icons/md";
import { useState, useRef, useLayoutEffect } from "react";

interface IData {
  id: string;
  name: string;
  file: File | null;
}

interface IPDFCardParams {
  order: number;
  data: IData;
}

const PDFCard = ({ order, data }: IPDFCardParams) => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(data.file);
  const [name, setName] = useState(data.name);

  useLayoutEffect(() => {
    if (fileRef.current) {
      if (file) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        fileRef.current.files = dataTransfer.files;
      }
    }
  }, [fileRef]);

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };
  const onDelete = () => {};

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
          onChange={onChangeText}
          value={name}
        />
      </div>
      <input
        type="file"
        name={`file-${data.id}`}
        accept="application/pdf"
        ref={fileRef}
        onChange={onChange}
      />
      <button type="button" onClick={onDelete}>
        <span className="text-red-600">
          <MdDelete />
        </span>
      </button>
    </div>
  );
};
export default PDFCard;
