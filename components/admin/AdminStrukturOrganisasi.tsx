"use client";

import { useState } from "react";
import Image from "next/image";
import AdminHeader from "@components/admin/AdminHeader";

const AdminStrukturOrganisasi = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onSave = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      // use later after api existed
      // const response = await fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData
      // })
      //
      // if (!response.ok) {
      //   throw new Error (`Failed to upload file: ${response.statusText}`)
      // }
    }
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <div>
      <AdminHeader title="Struktur Organisasi" onSave={onSave} />
      <input
        type="file"
        name="file"
        id="file"
        accept="image/*"
        onChange={onChangeFile}
        className="mb-4"
      />
      {previewUrl && (
        <Image
          src={previewUrl}
          alt="preview image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      )}
    </div>
  );
};

export default AdminStrukturOrganisasi;
