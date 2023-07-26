import LinkListWithSection from './LinkListWithSection';

const Informasi = () => {
  // dummy
  const pengumumans = [
    {
      id: 1,
      title: 'Permohonan Magang',
      link: '/download/permohonan-magang',
    },
    {
      id: 2,
      title: 'Izin Penelitian',
      link: '/download/izin-penelitian',
    },
    {
      id: 3,
      title: 'Pemakaian Gedung MMC',
      link: '/download/pemakaian-gedung-mmc',
    },
  ];

  return (
    <section className="container mx-auto">
      <LinkListWithSection
        data={pengumumans}
        title="Pengumuman"
        priority={true}
        link="/downloads/pengumuman"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <LinkListWithSection data={pengumumans} title="Format Surat" link="/downloads/format-surat" />
        <LinkListWithSection data={pengumumans} title="Laporan Tahunan" link="/downloads/laporan-tahunan" />
        <LinkListWithSection data={pengumumans} title="Laporan Kinerja" link="/downloads/laporan-kinerja" />
        <LinkListWithSection data={pengumumans} title="Rencana Kegiatan" link="/downloads/laporan-kegiatan" />
        <LinkListWithSection data={pengumumans} title="Keuangan" link="/downloads/keuangan" />
        <LinkListWithSection data={pengumumans} title="Kearsipan" link="/downloads/kearsipan" />
        <LinkListWithSection data={pengumumans} title="Lain-lain" link="/downloads/lain-lain" />
      </div>
    </section>
  );
};
export default Informasi;
