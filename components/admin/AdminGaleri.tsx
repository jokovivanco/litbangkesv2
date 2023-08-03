import AdminHeader from "@components/admin/AdminHeader";

const AdminGaleri = () => {
  const onSave = () => {
    console.log("saved");
  };

  return (
    <div>
      <AdminHeader title="Galeri" onSave={onSave} />
    </div>
  );
};

export default AdminGaleri;
