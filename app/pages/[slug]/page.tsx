import Section from "@components/Section";
import BlogCard from "@components/main/BlogCard";

const Pages = ({ params }: { params: { slug: string } }) => {
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
    {
      id: 4,
      imgUrl: '/assets/images/berita-3.png',
      title: 'Wista Mahasiswa Menjadi Sangat Positif di 2023',
      text: 'Lorem ipsum berita 3 dua tiga empat',
      dateString: '05/07/2023',
    },
    {
      id: 5,
      imgUrl: '/assets/images/berita-3.png',
      title: 'Wista Mahasiswa Menjadi Sangat Positif di 2023',
      text: 'Lorem ipsum berita 3 dua tiga empat',
      dateString: '05/07/2023',
    },
  ];
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
    {
      id: 4,
      imgUrl: '/assets/images/galeri-3.png',
      title: 'Kegiatan #3 oleh kepala daerah tanah bumbu',
    },
    {
      id: 5,
      imgUrl: '/assets/images/galeri-3.png',
      title: 'Kegiatan #3 oleh kepala daerah tanah bumbu',
    },
  ];

  const { slug } = params;
  
  return (
    <Section title={slug}>
      <div>
        <div className="grid column grid-cols-2 lg:grid-cols-3 gap-4">
          {
            slug === 'berita'? 
            beritas.map((berita) => (
              <BlogCard
                key={berita.title}
                imgUrl={berita.imgUrl}
                title={berita.title}
                text={berita.text}
                dateString={berita.dateString}
              />
            )) :
            galeries.map((galeri) => (
              <BlogCard
                key={galeri.title}
                imgUrl={galeri.imgUrl}
                title={galeri.title}
              />
            ))
          }
        </div>
      </div>
    </Section>
  );
};
export default Pages;
