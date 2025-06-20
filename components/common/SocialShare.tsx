import React from "react";
import { Icon } from "../ui/Icon";
import Link from "next/link";

interface SocialShareItem {
  icon: string;
  href: string;
}

interface SocialShareProps {
  footerSocialShareItems: SocialShareItem[];
}

const SocialShare: React.FC<SocialShareProps> = ({ footerSocialShareItems }) => {
  return (
    <div className="flex items-center gap-4">
      {footerSocialShareItems.map((item, index) => (
        <Link key={index} href={item.href} target="_blank" rel="noopener noreferrer">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-primary transition-colors duration-300">
            <Icon name={item.icon} className="text-black text-lg" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialShare;