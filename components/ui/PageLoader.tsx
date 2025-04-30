"use client";

import React from "react";
import Loader from "./Loader";
import { cn } from "@/utils/classNames";

type PageLoaderProps = {
  className?: string;
  message?: string;
};

const PageLoader = ({ className, message }: PageLoaderProps) => {
  return (
    <div
      className={cn(
        " inset-0 z-[9999] flex flex-col items-center top-0 left-0 w-screen h-screen  justify-center bg-white",
        className
      )}
    >
      <Loader size="large" />
      {message && <p className="mt-4 text-neutral text-center">{message}</p>}
    </div>
  );
};

export default PageLoader;
