"use client";

import { useState } from "react";
import AdminHeader from "@components/admin/AdminHeader";
import PDFCard from "@components/admin/PDFCard";
import dummyZonaIntegritas from "@utils/dummyZonaIntegritas";
import { MdAdd } from "react-icons/md";
import { v4 } from "uuid";

const AdminZonaIntegritas = () => {
  const [files, setFiles] = useState(dummyZonaIntegritas);

  const onSave = () => {
    console.log("saved");
  };

  const onAdd = () => {
    const newId = v4();
    setFiles((prev) => [...prev, { id: newId, name: "", file: null }]);
  };

  const onChange = () => {};
  const onDelete = () => {};

  return (
    <div>
      <AdminHeader title="Zona Integritas" onSave={onSave} />
      <div className="space-y-2">
        {files.length > 0 &&
          files.map((file, index) => (
            <PDFCard key={file.id} order={index + 1} data={file} />
          ))}
      </div>
      <div className="mt-4">
        <button
          onClick={onAdd}
          className="flex justify-between items-center rounded-md border-2 border-white pl-2 pr-4 py-2"
        >
          <div className="flex space-x-2 items-center w-full">
            <div className="rounded-md bg-blue-500 text-white px-2 py-2 text-lg">
              <MdAdd />
            </div>
            <p className="text-blue-500">Tambah baris</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AdminZonaIntegritas;
