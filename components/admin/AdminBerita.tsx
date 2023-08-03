import AdminHeader from "@components/admin/AdminHeader";

const AdminBerita = () => {
  const onSave = () => {
    console.log("saved");
  };

  return (
    <div>
      <AdminHeader title="Berita" onSave={onSave} />
    </div>
  );
};

export default AdminBerita;
