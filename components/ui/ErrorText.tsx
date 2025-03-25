import React, { Children } from "react";
import { SmallText } from "./Text";
import { ChildProcess } from "child_process";

function ErrorText({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <SmallText color="danger-500" className={className}>
      {children}
    </SmallText>
  );
}

export default ErrorText;
