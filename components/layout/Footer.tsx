"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
// import { Body, ExtraSmallText, FooterMenuText, SmallText, Text } from "./Text";

// import { LinkText } from "./LinkText";
import MODERN_BROWSERSLIST_TARGET from "next/dist/shared/lib/modern-browserslist-target";
// import { MobileMenu } from "./MobileMenu";
// import { CookieSideBar } from "./CookieSidebar";
import Cookies from "../../components/Cookies";
import { Subscribe } from "../ui/Subscribe";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { Text } from "../ui/Text";
// import SocialShare from "../common/SocialShare";
// import { Icon } from "./Icon";
// import { footerSocialShareItems } from "../../data/social";
import Logo from "@/public/logo_white.svg";
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

  const footerMenu = [
    {
      title: "Company",
      links: [
        {
          title: "About us",
          href: "/about-us",
        },
        {
          title: "Our Team",
          href: "/our-team",
        },
        {
          title: "Careers",
          href: "/careers",
        },
      ],
    },
    {
      title: "Services",
      links: [
        //         Properties
        // Landlord & Tenant
        // Investments
        {
          title: "Properties",
          href: "/properties",
        },
        {
          title: "Landlord & Tenant",
          href: "/landlord-tenant",
        },
        {
          title: "Investments",
          href: "/investments",
        },
      ],
    },
    {
      title: "Bespoke",
      links: [
        //         Advisory
        // Book an Appointment
        // Customer Care
        {
          title: "Advisory",
          href: "/advisory",
        },
        {
          title: "Book an Appointment",
          href: "/book-an-appointment",
        },
        {
          title: "Customer Care",
          href: "/customer-care",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          title: "Compliance",
          href: "/compliance",
        },
        {
          title: "Terms of Business",
          href: "/terms-of-business",
        },
        {
          title: "Privacy Policy",
          href: "/privacy-policy",
        },
      ],
    },
  ];
  return (
    <div className=" relative">
      {isVisible === true && (
        <div
          onClick={scrollToTop}
          className="fixed z-50 bg-[#D2FBFB] right-[28px] flex items-center justify-center cursor-pointer bottom-[18px] h-[40px] w-[40px]  rounded-sm"
        >
          <Icon name="north" className=" text-[20px] text-neutralDark " />
        </div>
      )}
      <div className="h-[10px] flex">
        <div className="w-1/4 h-full bg-properties"></div>
        <div className="w-1/4 h-full bg-team"></div>
        <div className="w-1/4 h-full bg-contact"></div>
        <div className="w-1/4 h-full bg-services"></div>
        <div className="w-1/4 h-full bg-properties"></div>
        <div className="w-1/4 h-full bg-team"></div>
        <div className="w-1/4 h-full bg-contact"></div>
        <div className="w-1/4 h-full bg-services"></div>
      </div>
      <div className="bg-[#222222] py-20 relative">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <Link href="/">
                <Image
                  alt="logo"
                  className="mb-8"
                  src={Logo}
                  width={114}
                  height={50}
                />
              </Link>
              <div className="grid grid-cols-1 gap-y-8 md:grid-cols-[370px_auto] justify-between items-start">
                <Text variant={"small"} className="text-white">
                  Properties & Investments
                </Text>
                <div className="flex gap-20 flex-wrap justify-between items-start">
                  {footerMenu.map((item, index) => (
                    <div key={index} className="flex flex-col gap-8">
                      <Text
                        variant={"footer_menu_title"}
                        className="text-white"
                      >
                        {item.title}
                      </Text>
                      <div className="flex flex-col gap-5">
                        {item.links.map((link, index) => (
                          <Link key={index} href={link.href}>
                            <Text variant={"button"} className="text-white">
                              {link.title}
                            </Text>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-end justify-between w-full flex-wrap gap-8">
                <div className="flex w-full sm:w-auto flex-col items-start gap-5">
                  {/* <Text color="white" size="body_1" weight="semibold">
                Newsletter
              </Text> */}
                  <Text variant={"small"} className="max-w-[370px] text-white">
                    Get our emails on inspiration & tips to grow your business
                  </Text>
                  {/* <SmallText color="white">
                Get our emails on inspiration & tips to grow your business
              </SmallText> */}

                  <Subscribe
                    className="lg:min-w-[260px] placeholder:text-white min-w-[200px]"
                    id="email"
                    placeholder="Email Address"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center flex-wrap justify-between w-full lg:w-auto gap-16">
              {/* Facebook
Instagram
LinkedIn
YouTube */}
              <div className="flex items-center gap-5">
                {["Facebook", "Instagram", "LinkedIn", "YouTube"].map(
                  (item, index) => (
                    <Text
                      key={index}
                      variant={"button"}
                      className="text-white cursor-pointer"
                    >
                      {item}
                    </Text>
                  )
                )}
              </div>
              <div className="flex items-center gap-8">
                {["Contact Us", "Data & Cookies Policy"].map((item, index) => (
                  <Text
                    key={index}
                    variant={"button"}
                    className="text-white cursor-pointer"
                  >
                    {item}
                  </Text>
                ))}
              </div>
            </div>
            <Text variant={"extra_small"} className="text-white">
              1441 a G.C.C. Limited Company ©All rights reserved 2025
            </Text>
          </div>
        </div>
      </div>
      {/* <CookieSideBar
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
      /> */}
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
