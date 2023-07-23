'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

interface slideImage {
  url: string;
  caption: string;
}

const ImageSlider = ({ slideImages }: { slideImages: slideImage[] }) => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent(current === slideImages.length - 1 ? 0 : current + 1);
  }, [current, slideImages]);

  const prev = useCallback(() => {
    setCurrent(current === 0 ? slideImages.length - 1 : current - 1);
  }, [current, slideImages]);

  // const selectIndicator = () => {};

  useEffect(() => {
    const nextSlide = setInterval(next, 3000);

    return () => clearInterval(nextSlide);
  }, [next]);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <div className="w-full h-full relative">
        {slideImages.map((slide, index) => (
          <div
            key={slide.caption}
            className={`opacity-0 transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : ''
            }`}
          >
            {index === current && (
              <Image
                src={slide.url}
                alt={slide.caption}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            )}
          </div>
        ))}
        <div className="absolute w-full flex justify-between items-start top-1/2 translate-y-1/2 -mt-[2.5rem]">
          <Image
            src="/assets/icons/arrow-right.svg"
            alt="arrow-left"
            height={40}
            width={40}
            className="rotate-180"
            onClick={prev}
          />
          <Image
            src="/assets/icons/arrow-right.svg"
            alt="arrow-right"
            height={40}
            width={40}
            onClick={next}
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        {slideImages.map((slide, index) => (
          <div
            key={slide.caption}
            className={`${
              index === current
                ? 'w-3 h-3 bg-primary-green'
                : 'w-2 h-2 bg-white'
            } rounded-full`}
          />
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;
