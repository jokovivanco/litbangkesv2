interface ISection {
  children: React.ReactNode;
  title: string;
}

const Section = ({ children, title }: ISection) => {
  return (
    <section className="container mx-auto pb-16 mt-16 bg-white">
      <div className="py-8 lg:mb-8">
        <h3 className="text-2xl text-center text-primary-green font-bold uppercase mb-4">
          {title}
        </h3>
        <div className="w-full h-0.5 bg-gray-400/10 rounded-full" />
      </div>
      {children}
    </section>
  );
};
export default Section;
