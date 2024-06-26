import {
  AccordionProvider,
  useAccordion,
  AccordionItemContext,
  useAccordionItem,
} from "./AccordionProvider";
import { ChildProp, AccordionItemType } from "./types";

export const Accordion = ({ children }: ChildProp) => {
  return <AccordionProvider>{children}</AccordionProvider>;
};

export const AccordionHeader = ({ children, ...props }: ChildProp) => {
  const { changeActive } = useAccordion();
  const { id } = useAccordionItem();

  return (
    <button
      style={{
        backgroundColor: "#ebebeb",
        border: "1px solid #ebebeb",
        width: "100%",
        cursor: "pointer",
        textAlign: "left",
        padding: "0.75rem",
      }}
      {...props}
      onClick={() => changeActive(id)}
    >
      {children}
    </button>
  );
};

export const AccordionBody = ({ children }: ChildProp) => {
  const { activeItem } = useAccordion();
  const { id } = useAccordionItem();

  if (activeItem !== id) {
    return null;
  }

  return (
    <div style={{ padding: "0.75rem", border: "1px solid #ebebeb" }}>
      {children}
    </div>
  );
};

export const AccordionItem = ({ children, id }: AccordionItemType) => {
  return (
    <AccordionItemContext.Provider value={{ id }}>
      {children}
    </AccordionItemContext.Provider>
  );
};
