import styles from "./EmptyState.module.scss";
import emptyStateImage from "../../../assets/image/empty_state_image.jpg";

export const EmptyState = () => {
  return (
    <div className={styles.emptyState}>
      <img
        className={styles.notFoundImage}
        src={emptyStateImage}
        alt="game not found"
      />
      <span>
        Sembra che questa lista sia al momento vuota. Non preoccuparti, ci sono
        molti giochi da scoprire!
      </span>
    </div>
  );
};
