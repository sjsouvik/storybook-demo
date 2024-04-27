import { PropsWithChildren, ReactNode } from "react";

export type AccordionContextType = {
  activeItem: string | null;
  changeActive: (id: string) => void;
};

export type ChildProp = { children: ReactNode };

export interface AccordionItemType extends PropsWithChildren {
  id: string;
}
