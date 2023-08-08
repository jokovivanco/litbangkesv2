"use client";

import { useState, useEffect, Fragment } from "react";
import AdminHeader from "@components/admin/AdminHeader";
import AdminSejarahComponent from "@components/admin/AdminSejarahComponent";
import { MdAdd } from "react-icons/md";
import { v4 } from "uuid";
import groupArray from "@utils/groupArray";
import { Oval } from "react-loader-spinner";
import axios from "axios";

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

const AdminSejarah = () => {
  const [data, setData] = useState<IData>({
    sejarah: [],
    isLoading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/sejarah");
      const data = await response.json();
      setData({
        sejarah: data,
        isLoading: false,
      });
    };

    fetchData();
  }, []);

  const onSave = async () => {
    const data = Array.prototype.slice.call(
      document.querySelectorAll("input, textarea")
    );
    const dataSejarahHTMLElements = groupArray<HTMLInputElement>(data, 4);
    const dataSejarah = dataSejarahHTMLElements.map((dataSejarah) => {
      const [idElement, newDataElement, yearElement, textareaElement] =
        dataSejarah;
      const id = idElement.value;
      const newData = newDataElement.checked;
      const year = Number(yearElement.value);
      const textarea = textareaElement.value;
      return {
        id,
        newData,
        year,
        textarea,
      };
    });

    if (!dataSejarah.length) {
      return console.log("Sejarah is empty!");
    }

    const checkDataSejarah = dataSejarah.every((item) => {
      return item.year > 0 && item.textarea.length > 0;
    });

    if (!checkDataSejarah) {
      return console.log("Some of Sejarah Item is empty!");
    }

    setData((prev) => ({ ...prev, isLoading: true }));

    const dataSejarahUpdated = dataSejarah.map(async (dataSejarah) => {
      if (dataSejarah.newData) {
        return await axios("/api/sejarah", {
          method: "POST",
          data: {
            id: dataSejarah.id,
            year: dataSejarah.year,
            textarea: dataSejarah.textarea,
          },
        });
      }

      return await axios(`/api/sejarah/${dataSejarah.id}`, {
        method: "PATCH",
        data: {
          year: dataSejarah.year,
          textarea: dataSejarah.textarea,
        },
      });
    });

    Promise.all(dataSejarahUpdated).then((result) => {
      const dataSejarah = result.map((sejarah) => sejarah.data);
      setData((prev) => ({
        ...prev,
        sejarah: dataSejarah.map((sejarah) => ({ ...sejarah, newData: false })),
        isLoading: false,
      }));
    });
  };

  const onAdd = () => {
    const newId = v4();
    setData((prev) => ({
      ...prev,
      sejarah: [
        ...prev.sejarah,
        {
          id: newId,
          year: 1970,
          textarea: "",
          newData: true,
        },
      ],
    }));
  };

  if (data.isLoading)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Oval
          height={80}
          width={80}
          color="#21928F"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#21928FCC"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );

  return (
    <div>
      <AdminHeader title="Sejarah" onSave={onSave} />
      {data.sejarah.length > 0 && (
        <AdminSejarahComponent sejarah={data.sejarah} setData={setData} />
      )}
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
