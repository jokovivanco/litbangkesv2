import ButtonGreenInverse from '@components/ButtonGreenInverse';
import Section from '@components/Section';
import BlogCard from '@components/main/BlogCard';

const Galeri = () => {
  // dummy
  const galeries = [
    {
      id: 1,
      imgUrl: '/assets/images/galeri-1.png',
      title: 'Kegiatan #1 oleh kepala daerah tanah bumbu',
    },
    {
      id: 2,
      imgUrl: '/assets/images/galeri-2.png',
      title: 'Kegiatan #2 oleh kepala daerah tanah bumbu',
    },
    {
      id: 3,
      imgUrl: '/assets/images/galeri-3.png',
      title: 'Kegiatan #3 oleh kepala daerah tanah bumbu',
    },
  ];

  return (
    <Section title="Galeri">
      <div>
        <div className="grid column grid-cols-2 lg:grid-cols-3 gap-4 lg:[&>*:last-child]:col-span-3">
          {galeries.map((galeri) => (
            <BlogCard
              key={galeri.title}
              imgUrl={galeri.imgUrl}
              title={galeri.title}
            />
          ))}
          <div className="flex justify-center items-center">
            <ButtonGreenInverse link="/pages/galeri" text="Selengkapnya" />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Galeri;
