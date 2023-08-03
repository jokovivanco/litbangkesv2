import AdminHeader from "@components/admin/AdminHeader";

const AdminKearsipan = () => {
  const onSave = () => {
    console.log("saved");
  };

  return (
    <div>
      <AdminHeader title="Kearsipan" onSave={onSave} />
    </div>
  );
};

export default AdminKearsipan;
