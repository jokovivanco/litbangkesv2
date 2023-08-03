import AdminHeader from "@components/admin/AdminHeader";

const AdminLaporanTahunan = () => {
  const onSave = () => {
    console.log("saved");
  };

  return (
    <div>
      <AdminHeader title="Laporan Tahunan" onSave={onSave} />
    </div>
  );
};

export default AdminLaporanTahunan;
