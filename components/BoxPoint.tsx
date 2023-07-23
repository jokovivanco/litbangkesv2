interface IBoxPointParams {
  point: number;
  desc: string;
}

const BoxPoint = ({ point, desc }: IBoxPointParams) => {
  return (
    <div className="px-4 py-6 flex items-center bg-primary-green/20 rounded-lg gap-4">
      <div className="px-4 py-2 bg-primary-green rounded-full flex justify-center items-center">
        <span className="text-white text-xl">{point}</span>
      </div>
      <p className="text-primary-green font-semibold">{desc}</p>
    </div>
  );
};
export default BoxPoint;
