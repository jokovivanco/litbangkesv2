import Link from 'next/link';

interface ILinkCardParams {
  title: string;
  link: string;
  priority?: boolean;
}

const LinkCard = ({ title, link, priority }: ILinkCardParams) => {
  return (
    <div>
      <div
        className={`flex flex-col items-center gap-4 mx-auto ${
          priority && 'lg:w-1/2'
        }`}
      >
        <div className="flex flex-col w-full bg-primary-green/10 p-4 rounded-lg lg:flex-row lg:justify-between lg:items-center gap-4">
          <p>{title}</p>
          <div className="flex justify-end">
            <Link
              href={link}
              className="py-2 px-3 rounded-lg bg-[#43A271] w-fit text-white"
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LinkCard;
