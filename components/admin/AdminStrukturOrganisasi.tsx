import AdminHeader from "@components/admin/AdminHeader";

const AdminStrukturOrganisasi = () => {
  const onSave = () => {
    console.log("saved");
  };

  return (
    <div>
      <AdminHeader title="Struktur Organisasi" onSave={onSave} />
    </div>
  );
};

export default AdminStrukturOrganisasi;
