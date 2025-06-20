import React, { Children } from "react";
import { Text } from "./Text";

function ErrorText({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <Text variant="small" className={`text-danger-500 ${className}`}>
      {children}
    </Text>
  );
}

export default ErrorText;
