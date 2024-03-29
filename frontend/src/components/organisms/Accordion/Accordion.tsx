import { ReactNode } from "react";
import styles from "./Accordion.module.scss";
import { Accordion as BootstrapAccordion } from "react-bootstrap";
import { AccordionProps as BootstrapAccordionProps } from "react-bootstrap";

interface Item {
  eventKey: string;
  header: ReactNode;
  body: ReactNode;
}

interface AccordionProps extends BootstrapAccordionProps {
  items: Item[];
}

const Accordion = ({ items, ...props }: AccordionProps) => {
  return (
    <BootstrapAccordion className={styles.accordion} {...props}>
      {items.map((i, index) => {
        return (
          <BootstrapAccordion.Item eventKey={i.eventKey} key={index}>
            <BootstrapAccordion.Header>{i.header}</BootstrapAccordion.Header>
            <BootstrapAccordion.Body>{i.body}</BootstrapAccordion.Body>
          </BootstrapAccordion.Item>
        );
      })}
    </BootstrapAccordion>
  );
};

export default Accordion;
