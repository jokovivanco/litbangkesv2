import Section from '@components/Section';
import Image from 'next/image';

const StrukturOrganisasi = () => {
  return (
    <Section title="Struktur Organisasi">
      <div>
        <Image
          src="/assets/images/struktur-organisasi.png"
          alt="struktur organisasi"
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-auto mx-auto"
        />
      </div>
    </Section>
  );
};
export default StrukturOrganisasi;
