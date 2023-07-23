import ImageSlider from '@components/ImageSlider';
import ButtonGreen from '@components/ButtonGreen';

const Hero = () => {
  // dummy
  const slideImages = [
    { url: '/assets/images/image-1.png', caption: 'image-1' },
    { url: '/assets/images/image-2.png', caption: 'image-2' },
    { url: '/assets/images/image-3.png', caption: 'image-3' },
    { url: '/assets/images/image-4.png', caption: 'image-4' },
  ];

  return (
    <section className="w-full h-screen bg_gradient" id="hero">
      <div className="container mx-auto h-screen">
        <div className="w-full h-full flex flex-col lg:flex-row justify-center items-cente">
          <div className="flex-1 flex justify-center items-center">
            <div className="flex flex-col items-start justify-center gap-8 w-full pt-20 md:pt-32 lg:pt-0 lg:-mt-8 text-center lg:text-left">
              <h1 className="font-bold text-3xl lg:text-4xl text-white">
                BALAI PENELITIAN & <br className="hidden lg:block" />
                PENGEMBANGAN KESEHATAN
              </h1>
              <div className="flex flex-col gap-5 mx-auto lg:mx-0">
                <h3 className="font-semibold text-xl lg:text-2xl text-white">
                  Tanah Bumbu, Kalimantan Selatan
                </h3>
                <div className="w-14 h-2 bg-white rounded-lg mx-auto lg:mx-0" />
                <h3 className="font-semibold text-xl lg:text-2xl text-white">
                  Surveilance Penyakit
                </h3>
              </div>
              <ButtonGreen link="/" text="Selengkapnya" />
            </div>
          </div>
          <div className="flex-1 flex-wrap flex justify-center items-center h-full p-4 md:mb-12 lg:p-0">
            <div className="w-full">
              <ImageSlider slideImages={slideImages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
