import Image from 'next/image';

interface IBlogCardParams {
  imgUrl: string;
  title: string;
  text?: string;
  dateString?: string;
}

const BlogCard = ({ imgUrl, title, text, dateString }: IBlogCardParams) => {
  return (
    <div className="flex flex-col gap-2">
      <Image
        src={imgUrl}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
      <h6 className="uppercase font-bold">{title}</h6>
      {text && <p className="text-gray-500">{text}</p>}
      {dateString && (
        <p className="text-primary-green font-semibold">{dateString}</p>
      )}
    </div>
  );
};
export default BlogCard;
