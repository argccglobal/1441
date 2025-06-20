import React from "react";
import { Text } from "./Text";
import { cn } from "@/utils/classNames";

interface BulletTextProps {
  text: string;
  className?: string;
}

const BulletText: React.FC<BulletTextProps> = ({ text, className }) => {
  return (
    <div className={cn("flex items-start gap-2", className)}>
      <div className="min-w-2 min-h-2 w-2 h-2 rounded-full bg-primary mt-2"></div>
      <Text variant="small">{text}</Text>
    </div>
  );
};

export default BulletText;
