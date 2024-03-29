import { Button as BootsrtapButton } from "react-bootstrap";
import { ButtonProps as BootsrtapButtonProps } from "react-bootstrap";

interface ButtonProps extends BootsrtapButtonProps {}

const Button = ({ children, ...props }: ButtonProps) => {
  return <BootsrtapButton {...props}>{children}</BootsrtapButton>;
};

export default Button;
