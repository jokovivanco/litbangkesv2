import AdminHeader from "@components/admin/AdminHeader";

const AdminPengumuman = () => {
  const onSave = () => {
    console.log("saved");
  };

  return (
    <div>
      <AdminHeader title="Pengumuman" onSave={onSave} />
    </div>
  );
};

export default AdminPengumuman;
