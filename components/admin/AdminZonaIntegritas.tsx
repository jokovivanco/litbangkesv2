import AdminHeader from "@components/admin/AdminHeader";

const AdminZonaIntegritas = () => {
  const onSave = () => {
    console.log("saved");
  };

  return (
    <div>
      <AdminHeader title="Zona Integritas" onSave={onSave} />
    </div>
  );
};

export default AdminZonaIntegritas;
