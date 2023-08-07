"use client";

import { useState, Fragment } from "react";
import InputFieldText from "@components/InputFieldTextWithDelete";
import AdminHeader from "@components/admin/AdminHeader";
import dummySejarah from "@utils/dummySejarah";
import { MdAdd } from "react-icons/md";
import { v4 } from "uuid";
import InputTextArea from "@components/InputTextArea";
import groupArray from "@utils/groupArray";

const AdminSejarah = () => {
  const [sejarah, setSejarah] = useState(dummySejarah);

  const onSave = () => {
    const data = Array.prototype.slice.call(
      document.querySelectorAll("input, textarea")
    );
    const dataSejarahHTMLElements = groupArray<HTMLInputElement>(data, 3);
    const dataSejarah = dataSejarahHTMLElements.map((dataSejarah) => {
      const [idElement, yearElement, textareaElement] = dataSejarah;
      const id = idElement.value;
      const year = Number(yearElement.value);
      const textarea = textareaElement.value;
      return {
        id,
        year,
        textarea,
      };
    });
    console.log(dataSejarah);
  };

  const onAdd = () => {
    setSejarah((prev) => [...prev, { id: v4(), year: 1970, textarea: "" }]);
  };

  return (
    <div>
      <AdminHeader title="Sejarah" onSave={onSave} />
      {sejarah.map((history) => (
        <Fragment key={history.id}>
          <div className="space-y-2 mb-4">
            <InputFieldText
              data={{ id: history.id, text: history.year }}
              placeholder="Tahun..."
            />
            <InputTextArea
              data={{ id: history.id, textarea: history.textarea }}
              placeholder="Teks..."
            />
          </div>
          <div className="w-full h-1 rounded-lg bg-gray-500/20 mb-5" />
        </Fragment>
      ))}
      <div className="mt-4">
        <button
          onClick={onAdd}
          className="flex justify-between items-center rounded-md border-2 border-white pl-2 pr-4 py-2"
        >
          <div className="flex space-x-2 items-center w-full">
            <div className="rounded-md bg-blue-500 text-white px-2 py-2 text-lg">
              <MdAdd />
            </div>
            <p className="text-blue-500">Tambah baris sejarah</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AdminSejarah;
