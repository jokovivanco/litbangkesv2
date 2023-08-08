"use client";

import { useState, useEffect, Fragment } from "react";
import AdminHeader from "@components/admin/AdminHeader";
import AdminTupoksiComponent from "@components/admin/AdminTupoksiComponent";
import groupArray from "@utils/groupArray";
import { Oval } from "react-loader-spinner";
import axios from "axios";

interface ITupoksiData {
  id: string;
  title: string;
  textarea: string;
}

interface IData {
  tupoksi: ITupoksiData[];
  isLoading: boolean;
}

const AdminTupoksi = () => {
  const [data, setData] = useState<IData>({
    tupoksi: [],
    isLoading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/tupoksi");
      const data = await response.json();
      setData({
        tupoksi: data,
        isLoading: false,
      });
    };

    fetchData();
  }, []);

  const onSave = async () => {
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

    if (!dataTupoksi.length) {
      return console.log("Tupoksi is empty!");
    }

    const checkDataTupoksi = dataTupoksi.every((item) => {
      return item.title.length > 0 && item.textarea.length > 0;
    });

    if (!checkDataTupoksi) {
      return console.log("Some of Tupoksi Item is empty!");
    }

    setData((prev) => ({ ...prev, isLoading: true }));

    const dataTupoksiUpdated = dataTupoksi.map(async (dataTupoksi) => {
      return await axios(`/api/tupoksi/${dataTupoksi.id}`, {
        method: "PATCH",
        data: {
          title: dataTupoksi.title,
          textarea: dataTupoksi.textarea,
        },
      });
    });

    Promise.all(dataTupoksiUpdated).then((result) => {
      const dataTupoksi = result.map((tupoksi) => tupoksi.data);
      setData((prev) => ({
        ...prev,
        tupoksi: dataTupoksi,
        isLoading: false,
      }));
    });
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
      <AdminHeader title="Tupoksi" onSave={onSave} />
      <AdminTupoksiComponent tupoksi={data.tupoksi} />
    </div>
  );
};

export default AdminTupoksi;
