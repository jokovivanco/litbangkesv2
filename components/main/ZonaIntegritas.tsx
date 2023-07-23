import ButtonGreenInverse from '@components/ButtonGreenInverse';
import Section from '@components/Section';
import LinkList from '@components/main/LinkList';
import Image from 'next/image';

const ZonaIntegritas = () => {
  // dummy
  const data = [
    {
      id: 1,
      title: 'Amanat WBK 25 Maret 2019',
      link: '/download/amanat-wbk-25-maret-2019',
    },
    {
      id: 2,
      title: 'Amanat WBK 25 Maret 2019',
      link: '/download/amanat-wbk-25-maret-2019',
    },
    {
      id: 3,
      title: 'Amanat WBK 25 Maret 2019',
      link: '/download/amanat-wbk-25-maret-2019',
    },
  ];

  return (
    <Section title="Zona Integritas">
      <div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="lg:flex-1">
            <Image
              src="/assets/images/zona-integritas.png"
              alt="zona integritas"
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto h-auto mx-auto"
            />
          </div>
          <div className="lg:flex-1">
            <div className="flex flex-col gap-4 lg:items-center">
              <LinkList data={data} />
            </div>
            <div className="mt-8">
              <ButtonGreenInverse
                link="/pages/zona-integritas"
                text="Selengkapnya"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default ZonaIntegritas;
