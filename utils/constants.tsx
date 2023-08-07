import AdminVisiMisi from "@components/admin/AdminVisiMisi";
import AdminSejarah from "@components/admin/AdminSejarah";
import AdminStrukturOrganisasi from "@components/admin/AdminStrukturOrganisasi";
import AdminTupoksi from "@components/admin/AdminTupoksi";
import AdminZonaIntegritas from "@components/admin/AdminZonaIntegritas";
import AdminGaleri from "@components/admin/AdminGaleri";
import AdminBerita from "@components/admin/AdminBerita";
import AdminPengumuman from "@components/admin/AdminPengumuman";
import AdminFormatSurat from "@components/admin/AdminFormatSurat";
import AdminLaporanTahunan from "@components/admin/AdminLaporanTahunan";
import AdminLaporanKinerja from "@components/admin/AdminLaporanKinerja";
import AdminRencanaKegiatan from "@components/admin/AdminRencanaKegiatan";
import AdminKeuangan from "@components/admin/AdminKeuangan";
import AdminKearsipan from "@components/admin/AdminKearsipan";
import AdminLainLain from "@components/admin/AdminLainLain";

export const menuConstants = [
  {
    id: 0,
    name: "Visi / Misi",
    component: <AdminVisiMisi />,
  },
  {
    id: 1,
    name: "Sejarah",
    component: <AdminSejarah />,
  },
  {
    id: 2,
    name: "Struktur Organisasi",
    component: <AdminStrukturOrganisasi />,
  },
  {
    id: 3,
    name: "Tupoksi",
    component: <AdminTupoksi />,
  },
  {
    id: 4,
    name: "Zona Integritas",
    component: <AdminZonaIntegritas />,
  },
  {
    id: 5,
    name: "Galeri",
    component: <AdminGaleri />,
  },
  {
    id: 6,
    name: "Berita",
    component: <AdminBerita />,
  },
  {
    id: 7,
    name: "Pengumuman",
    component: <AdminPengumuman />,
  },
  {
    id: 8,
    name: "Format Surat",
    component: <AdminFormatSurat />,
  },
  {
    id: 9,
    name: "Laporan Tahunan",
    component: <AdminLaporanTahunan />,
  },
  {
    id: 10,
    name: "Laporan Kinerja",
    component: <AdminLaporanKinerja />,
  },
  {
    id: 11,
    name: "Rencana Kegiatan",
    component: <AdminRencanaKegiatan />,
  },
  {
    id: 12,
    name: "Keuangan",
    component: <AdminKeuangan />,
  },
  {
    id: 13,
    name: "Kearsipan",
    component: <AdminKearsipan />,
  },
  {
    id: 14,
    name: "Lain-lain",
    component: <AdminLainLain />,
  },
];
