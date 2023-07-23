import LinkList from '@components/main/LinkList';
import Section from '@components/Section';

interface IData {
  id: number;
  title: string;
  link: string;
}

interface ILinkListWithSectionParams {
  title: string;
  data: IData[];
  priority?: boolean;
}

const LinkListWithSection = ({
  title,
  data,
  priority,
}: ILinkListWithSectionParams) => {
  return (
    <div className={priority ? 'mb-8' : ''}>
      <Section title={title}>
        <LinkList data={data} priority={priority} />
      </Section>
    </div>
  );
};
export default LinkListWithSection;
