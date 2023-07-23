import Image from 'next/image';
import Link from 'next/link';

interface ICTAButtonGreenParams {
  link: string;
  text: string;
}

const CTAButtonGreen = ({ link, text }: ICTAButtonGreenParams) => {
  return (
    <Link
      href={link}
      className="px-4 py-2 bg-primary-green rounded-lg flex gap-3 mx-auto lg:mx-0 items-center"
    >
      <span className="font-bold text-white text-lg lg:text-xl">{text}</span>
      <Image
        src="/assets/icons/arrow-right.svg"
        alt="arrow right"
        height={40}
        width={40}
      />
    </Link>
  );
};
export default CTAButtonGreen;
