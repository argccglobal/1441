import React from "react";
import { SmallText } from "./Text";
import { cn } from "@/lib/utils";

const ErrorMessage = ({
  message,
  className,
}: {
  message: string;
  className?: string;
}) => {
  return (
    <SmallText
      className={cn("text-danger-500 mt-2 flex justify-end w-full", className)}
    >
      {message}
    </SmallText>
  );
};

export default ErrorMessage;
