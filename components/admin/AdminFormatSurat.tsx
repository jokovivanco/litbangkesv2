import AdminHeader from "@components/admin/AdminHeader";

const AdminFormatSurat = () => {
  const onSave = () => {
    console.log("saved");
  };

  return (
    <div>
      <AdminHeader title="Format Surat" onSave={onSave} />
    </div>
  );
};

export default AdminFormatSurat;
