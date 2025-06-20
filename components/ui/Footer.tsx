"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { Subscribe } from "./Subscribe";
import { LinkText } from "./LinkText";
import MODERN_BROWSERSLIST_TARGET from "next/dist/shared/lib/modern-browserslist-target";
import { MobileMenu } from "./MobileMenu";
import { CookieSideBar } from "./CookieSidebar";
import Cookies from "../../components/Cookies";
import SocialShare from "../common/SocialShare";
import { Icon } from "./Icon";
import { footerSocialShareItems } from "../../data/social";
interface FooterProps {
  topDescription?: string;
  bottomDescription?: string;
  copyright?: string;
}
const footerLinks = [
  {
    label: "Company",
    links: [
      {
        label: "About Us",
        href: "/about",
      },
      {
        label: "Services",
        href: "/services",
      },
      {
        label: "On our Agenda",
        href: "/main-resources",
      },
      {
        label: "Work",
        href: "/coming-page/work",
      },
      {
        label: "Careers",
        href: "/job-search",
      },
    ],
  },
  {
    label: "Products",
    links: [
      {
        label: "Pensions",
        href: "/product-licensing",
      },
      {
        label: "Work Productivity",
        href: "/product-licensing",
      },
      {
        label: "GovTech",
        href: "/product-licensing",
      },
      {
        label: "EdTech",
        href: "/product-licensing",
      },
      {
        label: "Human Resources",
        href: "/product-licensing",
      },
    ],
  },
  {
    label: "Innovation",
    links: [
      {
        label: "Generative AI",
        href: "/home-inner/generative-ai",
      },
      {
        label: "Blockchain",
        href: "/home-inner/blockchain",
      },
      {
        label: "Smart Cities",
        href: "/home-inner/smart-cities",
      },
      {
        label: "Fintech",
        href: "/home-inner/fintech",
      },
      {
        label: "Data Strategy",
        href: "/home-inner/data-strategy",
      },
    ],
  },
  {
    //     Legal
    // Terms of Business
    // Data & Privacy
    // ESG/ Shari'a Compliance
    // Investor Relations
    // Ethics
    label: "Legal",
    links: [
      {
        label: "Terms of Business",
        href: "/corporate-governance",
      },
      {
        label: "Data & Privacy",
        href: "/corporate-governance",
      },
      {
        label: "ESG/ Shari'a Compliance",
        href: "/ethics-and-governance",
      },
      {
        label: "Investor Relations",
        href: "/corporate-governance",
      },
      {
        label: "Ethics",
        href: "/ethics-and-governance",
      },
    ],
  },
];

export const Footer: React.FC<FooterProps> = ({
  topDescription,
  bottomDescription,
  copyright,
  ...props
}) => {
  const [show, setSHow] = useState(false);
  const [cookie, setCookie] = useState(true);
  const handleSIdebar = useCallback(() => {
    setCookie(false);
    setSHow(!show);
  }, [show]);

  const closeCookie = () => {
    setCookie(false);
  };

  useEffect(() => {
    // @ts-ignore
    const handleNavOutsideClick = (event: React.event) => {
      if (show && !event.target.closest(".cookiebar")) {
        handleSIdebar();
      }
    };

    document.addEventListener("mousedown", handleNavOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleNavOutsideClick);
    };
  }, [show, handleSIdebar]);

  // Scroll To Top
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative border-t bg-black border-black">
      {isVisible === true && (
        <div
          onClick={scrollToTop}
          className="fixed z-50 bg-[#1C1C1CE5] right-[28px] flex items-center justify-center cursor-pointer bottom-[18px] h-[34px] w-[34px]  rounded-sm"
        >
          <Icon name="north" className="!text-white text-h4 " />
        </div>
      )}
      <div className="bg-black py-[60px] relative">
        <div className="container">
          <Link href="/">
            <Image
              alt="logo"
              className="mb-8"
              src="/logo_black.svg"
              width={114}
              height={50}
            />
          </Link>
          <div className="flex items-start justify-between mb-12 flex-wrap gap-4">
            <Text variant="small" className="text-white max-w-[370px]">
              {topDescription}
            </Text>
            <div className="hidden text-whiten w-full xl:w-auto lg:flex items-start justify-between flex-wrap gap-16">
              {footerLinks.map((footerLink, index) => (
                <div key={index} className="flex flex-col gap-5">
                  <Text variant="footer_menu_title" className="text-white mb-3">
                    {footerLink.label}
                  </Text>
                  {footerLink.links.map((link, index) => (
                    <div key={index}>
                      <Button
                        label={link.label}
                        type="link"
                        className="hover:underline text-white !text-[12px] hover:text-white"
                        href={link.href}
                      />
                    </div>
                  ))}
                </div>
              ))}

              {/* <ul className="flex flex-col gap-5">
              <Text className="mb-3 font-semibold" variant="body">
                Company
              </Text>
              <li>
                <Button
                  label="Services"
                  type="link"
                  className="text-white text-body_2 font-normal hover:underline hover:text-white"
                  href="link"
                />
              </li>
            </ul> */}
            </div>
            <div className="flex flex-col text-whiten lg:hidden w-full xl:w-auto items-start justify-between flex-wrap">
              {footerLinks.map((footerLink, index) => (
                <div key={index} className="flex w-full flex-col gap-5">
                  <MobileMenu title={footerLink.label}>
                    {footerLink.links.map((link, i) => (
                      <div key={i}>
                        <Button
                          label={link.label}
                          type="link"
                          className="hover:underline !text-[12px] text-white hover:text-white"
                          href={link.href}
                        />
                      </div>
                    ))}
                  </MobileMenu>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-end justify-between w-full flex-wrap gap-8 mb-12">
            <div className="flex w-full sm:w-auto flex-col items-start gap-5">
              <Text variant="body" className="text-white font-semibold">
                Newsletter
              </Text>
              <Text variant="small" className="text-white">
                Get our emails on inspiration & tips to grow your business
              </Text>
              <Subscribe
                className="lg:min-w-[260px] placeholder:text-white min-w-[200px]"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center justify-between w-full lg:w-auto gap-16">
              <LinkText
                label="Contact"
                href="javascript:void(0)"
                className="text-white text-body_3 font-regular hover:text-white"
              />
              <SocialShare footerSocialShareItems={footerSocialShareItems} />
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <Image
              className="cursor-pointer"
              onClick={handleSIdebar}
              src="/cookie.png"
              width={40}
              height={20}
              alt="visa"
            />
            <div className="flex flex-col gap-4">
              <Text variant="extra_small" className="text-right max-w-sm text-neutralLight">
                {bottomDescription}
              </Text>
              <Text variant="extra_small" className="text-right text-neutralLight">
                {copyright}
              </Text>
            </div>
          </div>
        </div>
      </div>
      <CookieSideBar
        title="Privacy Preference Center"
        description="Most websites store or retrieve information on your browser, mostly in
          the form of cookies. This information is used to make the site work as
          you expect it to - while this information doesn't usually
          directly identify you it helps us understand your preferences and the
          devices you use so we can provide a more personalized website
          experience. We respect your right to privacy, and you can choose not
          to allow some types of cookies. Click on the category headings below
          to find out more and change the default settings. Please consider that
          blocking some types of cookies may impact your experience of the site
          and the services we are able to offer."
        show={show}
        navItems={[]}
        onClick={handleSIdebar}
      />
      <div className="absolute -bottom-0 transform translate-y-full">
        <Cookies
          cookie={cookie}
          closeCookie={closeCookie}
          handleSIdebar={handleSIdebar}
          show={show}
          descriptionLinkText="use our cookies."
          description="Some cookies are essential to how our website works, so they're always saved. Other cookies help personalise your experience and remember your preferences. You can choose which cookies to accept and change them at any time. Learn more about how we"
        />
      </div>
    </div>
  );
};
