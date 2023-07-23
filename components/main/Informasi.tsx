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
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <LinkListWithSection data={pengumumans} title="Format Surat" />
        <LinkListWithSection data={pengumumans} title="Laporan Tahunan" />
        <LinkListWithSection data={pengumumans} title="Laporan Kinerja" />
        <LinkListWithSection data={pengumumans} title="Rencana Kegiatan" />
        <LinkListWithSection data={pengumumans} title="Keuangan" />
        <LinkListWithSection data={pengumumans} title="Kearsipan" />
        <LinkListWithSection data={pengumumans} title="Lain-lain" />
      </div>
    </section>
  );
};
export default Informasi;
