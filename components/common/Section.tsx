import React, { ReactNode } from "react";
import { cn } from "@/utils/classNames";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className, id }) => {
  return (
    <section id={id} className={cn("py-10 md:py-16 lg:py-20", className)}>
      {children}
    </section>
  );
};

export default Section;