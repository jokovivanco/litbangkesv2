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
  link: string;
}

const LinkListWithSection = ({
  title,
  data,
  priority,
  link,
}: ILinkListWithSectionParams) => {
  return (
    <div className={priority ? 'mb-8' : ''}>
      <Section title={title}>
        <LinkList data={data} priority={priority} link={link} />
      </Section>
    </div>
  );
};
export default LinkListWithSection;
