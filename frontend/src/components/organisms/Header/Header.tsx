import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <div>Logo</div>
      <div className={styles.btnWrapper}>
        <Button  onClick={()=> navigate('/')}>Home</Button>
        <Button onClick={()=> navigate('/lista_giochi')}>Lista giochi</Button>
      </div>
    </div>
  );
};

export default Header;
