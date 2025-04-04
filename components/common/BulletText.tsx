"use client";
import React, { useEffect, useState } from "react";
import { textVariants } from "../ui/Text";
import { cn } from "@/utils/classNames";

const BulletText = ({
  texts,
  style,
}: {
  texts: string[];
  style?: "disc" | "decimal";
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once the component mounts (client-side)
  }, []);
  const classes = ["list-decimal"];

  if (!isClient) {
    // Render a fallback during SSR
    return (
      <ul className="ml-5">
        {texts.map((item, index) => (
          <li
            key={index}
            className={cn(
              textVariants({ variant: "body" }),
              "!text-neutralDark",
              style === "decimal" ? "list-decimal" : "list-decimal"
            )}
          >
            {item} {/* Render plain text during SSR */}
          </li>
        ))}
      </ul>
    );
  }

  // Dynamically import DOMPurify on the client side
  const DOMPurify = require("dompurify");

  return (
    <ul className="ml-5">
      {texts.map((item, index) => (
        <li
          key={index}
          className={cn(
            textVariants({ variant: "body" }),
            "text-neutralDark",
            style === "decimal" ? "list-decimal" : "list-disc"
          )}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }} // Sanitize and render HTML
        />
      ))}
    </ul>
  );
};

export default BulletText;
