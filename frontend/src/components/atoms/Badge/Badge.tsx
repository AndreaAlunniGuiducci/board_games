import styles from "./Badge.module.scss";
import { Badge as BootstrapBadge } from "react-bootstrap";
import { BadgeProps as BootstrapBadgeProps } from "react-bootstrap";

interface BadgeProps extends BootstrapBadgeProps {}

const Badge = ({ children, ...props }: BadgeProps) => {
  return <BootstrapBadge {...props}>{children}</BootstrapBadge>;
};

export default Badge;
