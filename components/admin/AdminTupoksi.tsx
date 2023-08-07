"use client";

import { useState, Fragment } from "react";
import InputFieldText from "@components/InputFieldTextWithDelete";
import AdminHeader from "@components/admin/AdminHeader";
import { MdAdd } from "react-icons/md";
import { v4 } from "uuid";
import InputTextArea from "@components/InputTextArea";
import groupArray from "@utils/groupArray";
import dummyTupoksi from "@utils/dummyTupoksi";

const Tupoksi = () => {
  const [tupoksi, setTupoksi] = useState(dummyTupoksi);

  const onSave = () => {
    const data = Array.prototype.slice.call(
      document.querySelectorAll("input, textarea")
    );
    const dataTupoksiHTMLElements = groupArray<HTMLInputElement>(data, 3);
    const dataTupoksi = dataTupoksiHTMLElements.map((dataTupoksi) => {
      const [idElement, titleElement, textareaElement] = dataTupoksi;
      const id = idElement.value;
      const title = titleElement.value;
      const textarea = textareaElement.value;
      return {
        id,
        title,
        textarea,
      };
    });
    console.log(dataTupoksi);
  };

  return (
    <div>
      <AdminHeader title="Tupoksi" onSave={onSave} />
      {tupoksi.map((tup) => (
        <Fragment key={tup.id}>
          <div className="space-y-2 mb-4">
            <InputFieldText
              data={{ id: tup.id, text: tup.title }}
              placeholder="Judul..."
            />
            <InputTextArea
              data={{ id: tup.id, textarea: tup.textarea }}
              placeholder="Teks..."
            />
          </div>
          <div className="w-full h-1 rounded-lg bg-gray-500/20 mb-5" />
        </Fragment>
      ))}
    </div>
  );
};

export default Tupoksi;
