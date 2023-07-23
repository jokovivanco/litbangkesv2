import LinkCard from '@components/main/LinkCard';

interface IData {
  id: number;
  title: string;
  link: string;
}

interface ILinkListParams {
  data: IData[];
  priority?: boolean;
}

const LinkList = ({ data, priority }: ILinkListParams) => {
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
    </div>
  );
};
export default LinkList;
