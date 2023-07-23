import Section from '@components/Section';
import BoxPoint from '@components/BoxPoint';

const VisiMisi = () => {
  const visiMisi = [
    'Meningkatkan akses dan kualitas pelayanan kesehatan yang merata dan berkelanjutka asdasdas asd asd asd asd asn',
    'Meningkatkan akses dan kualitas pelayanan kesehatan yang merata dan berkelanjutkan',
    'Meningkatkan akses dan kualitas pelayanan kesehatan yang merata dan berkelanjutkan',
    'Meningkatkan akses dan kualitas pelayanan kesehatan yang merata dan berkelanjutkan',
    'Meningkatkan akses dan kualitas pelayanan kesehatan yang merata dan berkelanjutkan',
    'Meningkatkan akses dan kualitas pelayanan kesehatan yang merata dan berkelanjutkan',
  ];

  return (
    <Section title="Visi / Misi">
      <div>
        <h4 className="font-bold text-primary-green text-lg text-center">
          &quote;Visi kami adalah Mewujudkan Indonesia Sehat 2025, Bangsa yang
          Produktif dan Berdaya Saing.&quote;
        </h4>
        <h4 className="font-bold text-primary-green text-lg text-center mt-4 mb-2">
          Misi-misi adalah sebagai berikut:
        </h4>
      </div>
      <div>
        <ul className="flex flex-col md:flex-row flex-wrap gap-4">
          {visiMisi.map((item, index) => (
            <li
              key={item + index.toString()}
              className="shrink-0 md:basis-[48%]"
            >
              <BoxPoint point={index + 1} desc={item} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
export default VisiMisi;
