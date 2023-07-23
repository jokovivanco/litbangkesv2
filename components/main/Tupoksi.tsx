import TupoksiCard from '@components/main/TupoksiCard';
import Section from '@components/Section';

const Tupoksi = () => {
  const tupoksi = [
    {
      imgUrl: '/assets/images/tupoksi-1.png',
      heading: 'Penelitian dan Pengembangan Kesehatan',
      text: 'Litbangkes Kemkes bertanggung jawab dalam menyusun kebijakan strategis, melaksanakan penelitian dan pengembangan ilmu pengetahuan dan teknologi kesehatan, serta melakukan kegiatan survei kesehatan dan pemantauan penyakit. Mereka juga mengembangkan sumber daya manusia dalam bidang penelitian kesehatan, melakukan uji klinis untuk produk kesehatan, dan berkoordinasi dengan berbagai pihak untuk menjalin kerjasama dalam penelitian dan pengembangan.',
    },
    {
      imgUrl: '/assets/images/tupoksi-2.png',
      heading: 'Pengembangan Kebijakan dan Diseminasi Pengetahuan',
      text: 'Litbangkes Kemkes memiliki peran penting dalam pengembangan kebijakan dan regulasi ilmiah di bidang kesehatan. Mereka juga melakukan kegiatan pengembangan teknologi dan inovasi kesehatan. Selain itu, Litbangkes menyusun laporan hasil penelitian dan pengembangan serta melakukan diseminasi pengetahuan kepada masyarakat, untuk menginformasikan kebijakan dan program yang berkaitan dengan kesehatan.',
    },
  ];

  return (
    <Section title="Tupoksi">
      <div>
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* card */}
          {tupoksi.map((item) => (
            <TupoksiCard key={item.heading} {...item} />
          ))}
          <div></div>
        </div>
      </div>
    </Section>
  );
};
export default Tupoksi;
