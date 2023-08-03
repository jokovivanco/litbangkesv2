import AdminHeader from "@components/admin/AdminHeader";

const AdminRencanaKegiatan = () => {
  const onSave = () => {
    console.log("saved");
  };

  return (
    <div>
      <AdminHeader title="Rencana Kegiatan" onSave={onSave} />
    </div>
  );
};

export default AdminRencanaKegiatan;
