interface IButtonParams {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, onClick }: IButtonParams) => {
  return (
    <button
      className="bg-primary-green px-6 py-1 rounded-md text-white font-bold"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
