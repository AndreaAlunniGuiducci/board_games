import styles from "./Modal.module.scss";

const Modal = ({ children, className = "" }: any) => {
  return <div className={`${styles.modal} ${className}`}>{children}</div>;
};
export default Modal;
