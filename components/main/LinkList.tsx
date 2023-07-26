import LinkCard from '@components/main/LinkCard';
import ButtonGreenInverse from '@components/ButtonGreenInverse';

interface IData {
  id: number;
  title: string;
  link: string;
}

interface ILinkListParams {
  data: IData[];
  priority?: boolean;
  link: string;
}

const LinkList = ({ data, priority, link }: ILinkListParams) => {
  return (
    <div className="flex flex-col gap-4">
      {data.map((item) => (
        <LinkCard
          key={item.title}
          title={item.title}
          link={item.link}
          priority={priority}
        />
      ))}
      <div className="flex justify-center items-center">
        <ButtonGreenInverse link={link} text="Lainnya" />
      </div>
    </div>
  );
};
export default LinkList;
