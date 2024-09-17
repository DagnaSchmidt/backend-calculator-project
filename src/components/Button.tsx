type ButtonProps = {
  onClick: () => void;
};

const Button = ({ onClick }: ButtonProps) => {
  return <div className="button" onClick={onClick}>ADD</div>;
};

export default Button;
