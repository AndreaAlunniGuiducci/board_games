import styles from "./Input.module.scss";
import Form from "react-bootstrap/Form";
import { FormProps, FormControlProps } from "react-bootstrap";
import { ReactNode } from "react";

interface IputProps extends Omit<FormProps & FormControlProps, ""> {
  label?: ReactNode;
}

const Input = ({ label, ...props }: IputProps) => {
  return (
    <div className={styles.input}>
      <Form.Label className={styles.label} {...props}>
        {label}
      </Form.Label>
      <Form.Control {...props} />
      <Form.Text></Form.Text>
    </div>
  );
};

export default Input;
