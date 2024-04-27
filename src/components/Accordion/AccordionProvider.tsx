import { createContext, useContext, useState } from "react";
import { AccordionContextType, ChildProp } from "./types";

const AccordionContext = createContext<AccordionContextType | null>(null);
export const AccordionItemContext = createContext<{ id: string } | null>(null);

export const AccordionProvider = ({ children }: ChildProp) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const changeActive = (id: string) => {
    if (activeItem === id) {
      setActiveItem(null);
      return;
    }

    setActiveItem(id);
  };

  return (
    <AccordionContext.Provider value={{ activeItem, changeActive }}>
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordion = () => useContext(AccordionContext);
export const useAccordionItem = () => useContext(AccordionItemContext);
