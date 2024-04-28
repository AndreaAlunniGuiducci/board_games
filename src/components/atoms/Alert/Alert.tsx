import {
  Alert as BootstrapAlert,
  AlertProps as BootstrapAlertProps,
} from "react-bootstrap";
import styles from "./Alert.module.scss";

interface AlertProps extends BootstrapAlertProps {
  children?: any;
  className?: string;
}

export const Alert = ({ children, className, ...props }: AlertProps) => {
  return (
    <BootstrapAlert className={`${styles.alert} ${className}`} {...props}>
      {children}
    </BootstrapAlert>
  );
};
