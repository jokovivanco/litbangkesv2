import Image from 'next/image';

const Footer = () => {
  return (
    <section className="w-full bg-primary-green">
      <div className="container mx-auto py-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-0">
        <div className="lg:w-1/2">
          <h3 className="text-3xl text-center lg:text-left py-4 text-white font-bold mb-8 lg:mb-4 uppercase">
            Kontak
          </h3>
          <div className="flex flex-col gap-4 text-white">
            <div className="flex flex-row-reverse items-start justify-end gap-2">
              <p>Litbangkes.tanbu</p>
              <Image
                src="/assets/icons/instagram.svg"
                alt="instagram"
                width={0}
                height={0}
                sizes="100vw"
                className="w-6 h-6"
              />
            </div>
            <div className="flex flex-row-reverse items-start justify-end gap-2">
              <p>Litbangkes.tanbu</p>
              <Image
                src="/assets/icons/facebook.svg"
                alt="facebook"
                width={0}
                height={0}
                sizes="100vw"
                className="w-6 h-6"
              />
            </div>
            <div className="flex flex-row-reverse items-start justify-end gap-2">
              <p>Litbangkes Tanah Bumbu</p>
              <Image
                src="/assets/icons/youtube.svg"
                alt="youtube"
                width={0}
                height={0}
                sizes="100vw"
                className="w-6 h-6"
              />
            </div>
            <div className="flex flex-row-reverse items-start justify-end gap-2">
              <p>litbangkestanbu@gmail.com</p>
              <Image
                src="/assets/icons/envelope.svg"
                alt="envelope"
                width={0}
                height={0}
                sizes="100vw"
                className="w-6 h-6"
              />
            </div>
            <div className="flex flex-row-reverse items-start justify-end gap-2">
              <p>
                Jl. Loka Litbang, Kawasan Perkantoran Pemda Kabupaten Tanah
                Bumbu, Kalimantan Selatan Kotak Pos 666, Telepon (0818) 6076049
              </p>
              <Image
                src="/assets/icons/location.svg"
                alt="location"
                width={0}
                height={0}
                sizes="100vw"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/assets/images/footer-logo.png"
            alt="footer logo litbangkes"
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-auto mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
export default Footer;
