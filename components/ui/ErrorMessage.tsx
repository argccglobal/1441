import React from "react";
import { Text } from "./Text";
import { cn } from "@/utils/classNames";

const ErrorMessage = ({
  message,
  className,
}: {
  message: string;
  className?: string;
}) => {
  return (
    <Text
      variant="small"
      className={cn("text-danger-500 mt-2 flex justify-end w-full", className)}
    >
      {message}
    </Text>
  );
};

export default ErrorMessage;
