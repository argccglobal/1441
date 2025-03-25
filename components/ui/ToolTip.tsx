import { FC } from "react";
import { cn } from "../../lib/utils";
import { SmallText } from "./Text";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Icon } from "./Icon";

interface ToolTipProps {
  text?: string;
  position?: "bottom" | "top";
}
export const ToolTip: FC<ToolTipProps> = ({ text, position }) => {
  return (
    <>
      <Icon
        id="my-anchor-element"
        name="info"
        className="text-base cursor-pointer"
      />
      <ReactTooltip
        className="max-w-[300px] bg-neutralDark text-[14px] leading-[21px] font-light "
        place={position}
        anchorSelect="#my-anchor-element"
      >
        {text}
      </ReactTooltip>
    </>
  );
};
