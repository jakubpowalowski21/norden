"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/studio";

export function Faq() {
  return (
    <Accordion.Root type="single" collapsible className="faq">
      {faqs.map(({ question, answer }, index) => (
        <Accordion.Item key={question} value={String(index)} className="faq-item">
          <Accordion.Header asChild>
            <h3><Accordion.Trigger className="faq-trigger">{question}<Plus size={22} strokeWidth={1.5} aria-hidden="true" /></Accordion.Trigger></h3>
          </Accordion.Header>
          <Accordion.Content className="faq-answer"><p>{answer}</p></Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
