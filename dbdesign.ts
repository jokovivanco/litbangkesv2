// table vissions
interface Vission {
  text: string;
}

// table mission
interface Missions {
  id: number;
  text: string;
}

// table histories
interface Histories {
  id: number;
  year: number;
  asciiText: string;
}

// table organization tree
interface OrganizationImage {
  image: File;
}

// table tupoksi
interface Tupoksi {
  id: number;
  title: string;
  text: string;
}

type DownloadType =
  | "zona-integritas"
  | "pengumuman"
  | "format-surat"
  | "laporan-tahunan"
  | "laporan-kinerja"
  | "rencana-kegiatan"
  | "keuangan"
  | "kearsipan"
  | "lain-lain";

// table files
interface Downloads {
  id: number;
  name: string;
  file: File;
  page: DownloadType;
}
