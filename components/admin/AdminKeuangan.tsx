import AdminHeader from "@components/admin/AdminHeader";

const AdminKeuangan = () => {
  const onSave = () => {
    console.log("saved");
  };

  return (
    <div>
      <AdminHeader title="Keuangan" onSave={onSave} />
    </div>
  );
};

export default AdminKeuangan;
