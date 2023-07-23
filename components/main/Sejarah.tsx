import Section from '@components/Section';
import ButtonGreenInverse from '@components/ButtonGreenInverse';
import Image from 'next/image';

const Sejarah = () => {
  return (
    <Section title="Sejarah">
      <div>
        <div className="flex flex-col lg:flex-row-reverse gap-4 lg:gap-8">
          <div className="flex-1">
            <Image
              src="https://source.unsplash.com/random"
              alt="unsplash"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-lg aspect-video"
            />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-primary-green text-lg text-left mb-4">
              Tahun 1948
            </h4>
            <p className="indent-8 text-justify">
              Pada tahun 1948, sebuah lembaga penelitian kesehatan muncul di
              wilayah yang kini dikenal sebagai Kabupaten Tanah Dummy. Lembaga
              tersebut dikenal sebagai Pusat Penelitian Kesehatan Tanah Dummy
              atau yang biasa disingkat dengan Litbangkes Tanah Dummy. Sejarah
              Litbangkes Tanah Dummy menggambarkan perjalanan panjang dan
              pentingnya penelitian kesehatan di daerah tersebut.
            </p>
            <br />
            <p className="indent-8 text-justify">
              Litbangkes Tanah Dummy didirikan sebagai respons terhadap
              kebutuhan akan pemahaman yang lebih mendalam tentang isu-isu
              kesehatan yang dihadapi oleh masyarakat setempat. Pada awalnya,
              lembaga ini fokus pada penelitian penyakit endemik, seperti
              malaria, demam berdarah, dan berbagai penyakit menular lainnya
              yang menjadi masalah kesehatan di daerah tersebut.
            </p>
            <br />
            <div className="lg:hidden">
              <ButtonGreenInverse link="/" text="Selengkapnya" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Sejarah;
