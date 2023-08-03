import Image from "next/image";

interface ITupoksiCardParams {
  imgUrl: string;
  heading: string;
  text: string;
}

const TupoksiCard = ({ imgUrl, heading, text }: ITupoksiCardParams) => {
  return (
    <div className="bg-primary-green/20 flex flex-col justify-center rounded-lg gap-4 p-8 flex-1">
      <Image
        src={imgUrl}
        alt={heading}
        width={0}
        height={0}
        sizes="100vw"
        className="w-auto h-auto mx-auto object-contain"
      />
      <h3 className="font-semibold text-xl text-center text-primary-green">
        {heading.toUpperCase()}
      </h3>
      <p className="text-justify">{text}</p>
    </div>
  );
};
export default TupoksiCard;
