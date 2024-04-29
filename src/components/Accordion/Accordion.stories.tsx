import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "./Accordion";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (args) => {
    return (
      <Accordion {...args}>
        <AccordionItem id="1">
          <AccordionHeader>Accordion header</AccordionHeader>
          <AccordionBody>Accordion body</AccordionBody>
        </AccordionItem>
        <AccordionItem id="2">
          <AccordionHeader>Accordion header 2</AccordionHeader>
          <AccordionBody>Accordion body 2</AccordionBody>
        </AccordionItem>
      </Accordion>
    );
  },
};
