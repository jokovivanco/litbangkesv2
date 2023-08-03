import AdminHeader from "@components/admin/AdminHeader";

const AdminLainLain = () => {
  const onSave = () => {
    console.log("saved");
  };

  return (
    <div>
      <AdminHeader title="Lain-lain" onSave={onSave} />
    </div>
  );
};

export default AdminLainLain;
