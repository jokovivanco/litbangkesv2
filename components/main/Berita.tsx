'use client';

import ButtonGreenInverse from '@components/ButtonGreenInverse';
import Section from '@components/Section';
import BlogCard from '@components/main/BlogCard';

const Berita = () => {
  // dummy
  const beritas = [
    {
      id: 1,
      imgUrl: '/assets/images/berita-1.png',
      title: 'Portal Berita',
      text: 'Lorem ipsum berita 1 dua tiga empat',
      dateString: '05/07/2023',
    },
    {
      id: 2,
      imgUrl: '/assets/images/berita-2.png',
      title: 'Pelantikan P3K',
      text: 'Lorem ipsum berita 2 dua tiga empat',
      dateString: '05/07/2023',
    },
    {
      id: 3,
      imgUrl: '/assets/images/berita-3.png',
      title: 'Wista Mahasiswa Menjadi Sangat Positif di 2023',
      text: 'Lorem ipsum berita 3 dua tiga empat',
      dateString: '05/07/2023',
    },
  ];

  return (
    <Section title="Berita">
      <div>
        <div className="grid column grid-cols-2 lg:grid-cols-3 gap-4 lg:[&>*:last-child]:col-span-3">
          {beritas.slice(0, 3).map((berita) => (
            <BlogCard
              key={berita.title}
              imgUrl={berita.imgUrl}
              title={berita.title}
              text={berita.text}
              dateString={berita.dateString}
            />
          ))}
          <div className="flex justify-center items-center">
            <ButtonGreenInverse link="/pages/berita" text="Lainnya" />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Berita;
