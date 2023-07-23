import Image from 'next/image';
import Link from 'next/link';

interface ICTAButtonTransparentParams {
  link: string;
  text: string;
}

const CTAButtonTransparent = ({ link, text }: ICTAButtonTransparentParams) => {
  return (
    <Link
      href={link}
      className="px-4 py-2 bg-transparent rounded-lg flex gap-3 mx-auto border-2 border-primary-green items-center w-fit"
    >
      <span className="font-bold text-primary-green text-lg">{text}</span>
      <Image
        src="/assets/icons/green-right.svg"
        alt="green right"
        height={40}
        width={40}
      />
    </Link>
  );
};
export default CTAButtonTransparent;
