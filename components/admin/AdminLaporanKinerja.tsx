import AdminHeader from "@components/admin/AdminHeader";

const AdminLaporanKinerja = () => {
  const onSave = () => {
    console.log("saved");
  };

  return (
    <div>
      <AdminHeader title="Laporan Kinerja" onSave={onSave} />
    </div>
  );
};

export default AdminLaporanKinerja;
