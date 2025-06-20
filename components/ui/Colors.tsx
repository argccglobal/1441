import { type } from "os";
import { cn } from "@/utils/classNames";

type BgColor = "background" | "black" | "white";
type BorderColor = "border";
type TextColor = "neutralDark" | "neutral" | "neutralLight";
type AllColors =
  | "primary"
  | "strategy-50"
  | "strategy-100"
  | "strategy-200"
  | "strategy-300"
  | "strategy-400"
  | "strategy-400"
  | "strategy-600"
  | "strategy-700"
  | "strategy-800"
  | "strategy-900"
  | "strategy-950"
  | "coaching-50"
  | "coaching-100"
  | "coaching-200"
  | "coaching-300"
  | "coaching-400"
  | "coaching-500"
  | "coaching-600"
  | "coaching-700"
  | "coaching-800"
  | "coaching-900"
  | "coaching-950"
  | "productLicensing-50"
  | "productLicensing-100"
  | "productLicensing-200"
  | "productLicensing-300"
  | "productLicensing-400"
  | "productLicensing-500"
  | "productLicensing-600"
  | "productLicensing-700"
  | "productLicensing-800"
  | "productLicensing-900"
  | "productLicensing-950"
  | "hexCode-50"
  | "hexCode-100"
  | "hexCode-200"
  | "hexCode-300"
  | "hexCode-400"
  | "hexCode-500"
  | "hexCode-600"
  | "hexCode-700"
  | "hexCode-800"
  | "hexCode-900"
  | "hexCode-950"
  | "success-50"
  | "success-100"
  | "success-200"
  | "success-300"
  | "success-400"
  | "success-500"
  | "success-600"
  | "success-700"
  | "success-800"
  | "success-900"
  | "success-950"
  | "danger-50"
  | "danger-100"
  | "danger-200"
  | "danger-300"
  | "danger-400"
  | "danger-500"
  | "danger-600"
  | "danger-700"
  | "danger-800"
  | "danger-900"
  | "danger-950"
  | "warning-50"
  | "warning-100"
  | "warning-200"
  | "warning-300"
  | "warning-400"
  | "warning-500"
  | "warning-600"
  | "warning-700"
  | "warning-800"
  | "warning-900"
  | "warning-950";

import React from "react";
interface ColorProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  bgColor: BgColor | AllColors;
  borderColor: BorderColor | AllColors;
  textColor: TextColor | AllColors;
}

export const Colors = ({
  bgColor,
  borderColor,
  textColor,
  ...props
}: ColorProps) => {
  let className = [
    "text-neutralDark",
    "text-neutral",
    "text-neutralLight",
    "Border-border",
    "bg-background",
    "text-strategy-50",
    "bg-strategy-50",
    "border-strategy-50",
    "text-strategy-100",
    "bg-strategy-100",
    "border-strategy-100",
    "text-strategy-200",
    "bg-strategy-200",
    "border-strategy-200",
    "text-strategy-300",
    "bg-strategy-300",
    "border-strategy-300",
    "text-strategy-400",
    "bg-strategy-400",
    "border-strategy-400",
    "text-strategy-400",
    "bg-strategy-400",
    "border-strategy-400",
    "text-strategy-600",
    "bg-strategy-600",
    "border-strategy-600",
    "text-strategy-700",
    "bg-strategy-700",
    "border-strategy-700",
    "text-strategy-800",
    "bg-strategy-800",
    "border-strategy-800",
    "text-strategy-900",
    "bg-strategy-900",
    "border-strategy-900",
    "text-strategy-950",
    "bg-strategy-950",
    "border-strategy-950",
    "text-coaching-50",
    "bg-coaching-50",
    "border-coaching-50",
    "text-coaching-100",
    "bg-coaching-100",
    "border-coaching-100",
    "text-coaching-200",
    "bg-coaching-200",
    "border-coaching-200",
    "text-coaching-300",
    "bg-coaching-300",
    "border-coaching-300",
    "text-coaching-400",
    "bg-coaching-400",
    "border-coaching-400",
    "text-coaching-500",
    "bg-coaching-500",
    "border-coaching-500",
    "text-coaching-600",
    "bg-coaching-600",
    "border-coaching-600",
    "text-coaching-700",
    "bg-coaching-700",
    "border-coaching-700",
    "text-coaching-800",
    "bg-coaching-800",
    "border-coaching-800",
    "text-coaching-900",
    "bg-coaching-900",
    "border-coaching-900",
    "text-coaching-950",
    "bg-coaching-950",
    "border-coaching-950",
    "text-productLicensing-50",
    "bg-productLicensing-50",
    "border-productLicensing-50",
    "text-productLicensing-100",
    "bg-productLicensing-100",
    "border-productLicensing-100",
    "text-productLicensing-200",
    "bg-productLicensing-200",
    "border-productLicensing-200",
    "text-productLicensing-300",
    "bg-productLicensing-300",
    "border-productLicensing-300",
    "text-productLicensing-400",
    "bg-productLicensing-400",
    "border-productLicensing-400",
    "text-productLicensing-500",
    "bg-productLicensing-500",
    "border-productLicensing-500",
    "text-productLicensing-600",
    "bg-productLicensing-600",
    "border-productLicensing-600",
    "text-productLicensing-700",
    "bg-productLicensing-700",
    "border-productLicensing-700",
    "text-productLicensing-800",
    "bg-productLicensing-800",
    "border-productLicensing-800",
    "text-productLicensing-900",
    "bg-productLicensing-900",
    "border-productLicensing-900",
    "text-productLicensing-950",
    "bg-productLicensing-950",
    "border-productLicensing-950",
    "text-hexCode-50",
    "bg-hexCode-50",
    "border-hexCode-50",
    "text-hexCode-100",
    "bg-hexCode-100",
    "border-hexCode-100",
    "text-hexCode-200",
    "bg-hexCode-200",
    "border-hexCode-200",
    "text-hexCode-300",
    "bg-hexCode-300",
    "border-hexCode-300",
    "text-hexCode-400",
    "bg-hexCode-400",
    "border-hexCode-400",
    "text-hexCode-500",
    "bg-hexCode-500",
    "border-hexCode-500",
    "text-hexCode-600",
    "bg-hexCode-600",
    "border-hexCode-600",
    "text-hexCode-700",
    "bg-hexCode-700",
    "border-hexCode-700",
    "text-hexCode-800",
    "bg-hexCode-800",
    "border-hexCode-800",
    "text-hexCode-900",
    "bg-hexCode-900",
    "border-hexCode-900",
    "text-hexCode-950",
    "bg-hexCode-950",
    "border-hexCode-950",
    "text-success-50",
    "bg-success-50",
    "border-success-50",
    "text-success-100",
    "bg-success-100",
    "border-success-100",
    "text-success-200",
    "bg-success-200",
    "border-success-200",
    "text-success-300",
    "bg-success-300",
    "border-success-300",
    "text-success-400",
    "bg-success-400",
    "border-success-400",
    "text-success-500",
    "bg-success-500",
    "border-success-500",
    "text-success-600",
    "bg-success-600",
    "border-success-600",
    "text-success-700",
    "bg-success-700",
    "border-success-700",
    "text-success-800",
    "bg-success-800",
    "border-success-800",
    "text-success-900",
    "bg-success-900",
    "border-success-900",
    "text-success-950",
    "bg-success-950",
    "border-success-950",
    "text-danger-50",
    "bg-danger-50",
    "border-danger-50",
    "text-danger-100",
    "bg-danger-100",
    "border-danger-100",
    "text-danger-200",
    "bg-danger-200",
    "border-danger-200",
    "text-danger-300",
    "bg-danger-300",
    "border-danger-300",
    "text-danger-400",
    "bg-danger-400",
    "border-danger-400",
    "text-danger-500",
    "bg-danger-500",
    "border-danger-500",
    "text-danger-600",
    "bg-danger-600",
    "border-danger-600",
    "text-danger-700",
    "bg-danger-700",
    "border-danger-700",
    "text-danger-800",
    "bg-danger-800",
    "border-danger-800",
    "text-danger-900",
    "bg-danger-900",
    "border-danger-900",
    "text-danger-950",
    "bg-danger-950",
    "border-danger-950",
    "text-warning-50",
    "bg-warning-50",
    "border-warning-50",
    "text-warning-100",
    "bg-warning-100",
    "border-warning-100",
    "text-warning-200",
    "bg-warning-200",
    "border-warning-200",
    "text-warning-300",
    "bg-warning-300",
    "border-warning-300",
    "text-warning-400",
    "bg-warning-400",
    "border-warning-400",
    "text-warning-500",
    "bg-warning-500",
    "border-warning-500",
    "text-warning-600",
    "bg-warning-600",
    "border-warning-600",
    "text-warning-700",
    "bg-warning-700",
    "border-warning-700",
    "text-warning-800",
    "bg-warning-800",
    "border-warning-800",
    "text-warning-900",
    "bg-warning-900",
    "border-warning-900",
    "text-warning-950",
    "bg-warning-950",
    "border-warning-950",
    "text-primary",
    "bg-primary",
    "border-primary",
    "text-background",
    "bg-background",
    "border-background",
    "text-border",
    "bg-border",
    "border-border",
    "text-neutralDark",
    "bg-neutralDark",
    "border-neutralDark",
    "text-neutral",
    "bg-neutral",
    "border-neutral",
    "text-neutralLight",
    "bg-neutralLight",
    "border-neutralLight",
  ];
  return (
    <span
      className={cn(
        "h-20 w-24 flex items-center justify-center border-4",
        "border-" + borderColor,
        "text-" + textColor,
        "bg-" + bgColor
      )}
    >
      This Is Text
    </span>
  );
};
