import { FC } from "react";
import { Text } from "./Text";
import Link from "next/link";
import { type } from "os";
import { Button } from "./Button";

interface NavLinkProps {
  title: string;
  href: string;
  children: React.ReactNode;
  type: "link" | "btn";
}

export const NavLink: FC<NavLinkProps> = ({ title, href, children, type }) => {
  return (
    <>
      {type === "link" ? (
        <Link
          href={href}
          className="pb-[6px] flex max-w-min border-b-2 border-transparent hover:border-primary"
        >
          <Text size="body_2" weight="regular" color="neutralDark">
            {title}
          </Text>
        </Link>
      ) : (
        <Button
          className="bg-productLicensing-50 text-neutralDark hover:bg-productLicensing-50 border-none"
          size="small"
          color="primary"
          label={title}
        />
      )}
    </>
  );
};
