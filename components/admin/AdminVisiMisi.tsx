"use client";

import { useState } from "react";
import dummyMission from "@app/utils/dummyMission";
import dummyVission from "@app/utils/dummyVission";
import InputFieldText from "@components/InputFieldText";
import AdminHeader from "@components/admin/AdminHeader";
import MisiCard from "@components/admin/MisiCard";
import { MdAdd } from "react-icons/md";
import { v4 } from "uuid";
import groupArray from "@app/utils/groupArray";

const AdminVisiMisi = () => {
  const [vission, setVission] = useState(dummyVission);
  const [missions, setMissions] =
    useState<Array<{ id: string; text: string }>>(dummyMission);

  const onSave = () => {
    const data = Array.prototype.slice.call(document.querySelectorAll("input"));
    const dataVission = data[0].value;
    const dataMissionsHTMLElements = groupArray<HTMLInputElement>(
      data.slice(1),
      2
    );
    const dataMissions = dataMissionsHTMLElements.map(
      (dataMissionHTMLElement) => {
        const [idElement, textElement] = dataMissionHTMLElement;
        return {
          id: idElement.value,
          text: textElement.value,
        };
      }
    );
    console.log("dataVission", dataVission);
    console.log("dataMissions", dataMissions);
  };

  const onAddMission = async () => {
    setMissions((prev) => [...prev, { id: v4(), text: "" }]);
  };

  return (
    <div>
      <AdminHeader title="Visi / Misi" onSave={onSave} />
      <div>
        <h4 className="input_title">Visi</h4>
        <InputFieldText data={vission} placeholder="Your vissions..." />
      </div>
      <div className="mt-4">
        <h4 className="input_title">Misi</h4>
        <div className="space-y-3">
          {missions.map((mission, index) => (
            <div className="relative" key={mission.id}>
              <MisiCard order={index + 1} data={mission} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={onAddMission}
          className="flex justify-between items-center rounded-md border-2 border-white pl-2 pr-4 py-2"
        >
          <div className="flex space-x-2 items-center w-full">
            <div className="rounded-md bg-blue-500 text-white px-2 py-2 text-lg">
              <MdAdd />
            </div>
            <p className="text-blue-500">Tambah baris misi</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AdminVisiMisi;
