"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Icon } from "./Icon";
import { LinkText } from "./LinkText";
import Link from "next/link";
import { SideBar } from "./Sidebar";
import MegaMenu from "../../components/common/MegaMenu";
import useProductMenuStore from "../../store/UseProductMenu";
import { cn } from "../../lib/utils";
import { Divider } from "./Divider";
import SubMenu from "../common/SubMenu";
import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { ExtraSmallText, SmallHeading } from "./Text";
import UseAxiosAuth from "@/hooks/useAxiosAuth";
import {
  applicantNotifications,
  getApplicantProfile,
} from "@/lib/privateGetApi";
import { disabledNotification } from "@/lib/privatePutApi";
import { Toaster } from "react-hot-toast";
import UseProfile from "@/hooks/use-profile";
import { FILE_SERVER_BASE_URL } from "@/utils/apiConfig";

const HomeMegaMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    // @ts-ignore
    const handleOutsideClick = (event: React.event) => {
      if (
        isOpen &&
        !event.target.closest(".menu-content") &&
        !event.target.closest(".btn-content")
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`absolute top-9 w-[313px]
      left-[-20px] min-w-max bg-white border-b 
       shadow-[0_2px_4px_0px_rgba(0,0,0,0.2)] transition duration-200 ${
         isOpen ? "visible h-full" : "hidden h-0"
       }}`}
      style={{ zIndex: 100 }}
    >
      <MegaMenu onClose={onClose} />
    </div>
  );
};

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const axiosAuth = UseAxiosAuth();
  const openModal = () => {
    console.log("Open");
    setIsOpen(true);
  };
  const toggleModel = () => {
    console.log("toggleModel");
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [show, setSHow] = useState(false);
  const handleSIdebar = useCallback(() => {
    setSHow(!show);
  }, [show]);

  useEffect(() => {
    // @ts-ignore
    const handleNavOutsideClick = (event: React.event) => {
      if (
        show &&
        !event.target.closest(".sidebar") &&
        !event.target.closest(".sidebar-menu")
      ) {
        handleSIdebar();
      }
    };

    document.addEventListener("mousedown", handleNavOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleNavOutsideClick);
    };
  }, [show, handleSIdebar]);

  const nav = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Our Team",
      href: "/teams",
    },
    {
      label: "Contact",
      href: "/contact-us",
    },
    {
      label: "Careers",
      href: "/job-search",
    },
  ];
  const selectedMenuKey: any = useProductMenuStore(
    (state: any) => state.selectedMenu
  );
  const selectedMenuLabel = selectedMenuKey.label;

  const logOut = async () => {
    signOut({ callbackUrl: `/login` });
  };
  const setSelectedMenu = useProductMenuStore(
    // @ts-ignore
    (state) => state.setSelectedMenu
  );
  const router = useRouter();
  const pathName = usePathname();
  useEffect(() => {
    // alert("router");
    // console.log("pathName", pathName);
    if (pathName === "/strategy") {
      setSelectedMenu("strategy");
    } else if (pathName === "/hex-code-technology") {
      setSelectedMenu("hexCode");
    } else if (pathName === "/coaching-forward") {
      setSelectedMenu("coaching");
    } else if (pathName === "/product-licensing") {
      setSelectedMenu("product");
    } else if (pathName === "/about-me") {
      setSelectedMenu("dashboard");
    } else if (pathName === "/my-preferences") {
      setSelectedMenu("dashboard");
    } else if (pathName === "/account-setting") {
      setSelectedMenu("dashboard");
    } else if (pathName === "/saved-application") {
      setSelectedMenu("dashboard");
    } else if (pathName === "/completed-application") {
      setSelectedMenu("dashboard");
    } else if (pathName === "/incomplete-application") {
      setSelectedMenu("dashboard");
    } else {
      setSelectedMenu("home");
    }
  }, [router]);
  const { data: session } = useSession();
  const [showMenu, setShowMenu] = useState(false);
  const handleProfileClick = () => {
    if (session) {
      setShowMenu(!showMenu);
      setShowNotification(false);
    } else {
      router.push("/login");
    }
  };
  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState<any[]>([]);
  const handleNotificationClick = async () => {
    setShowNotification(!showNotification);
    setShowMenu(false);
  };

  const fetchProfile = useCallback(async () => {
    const result = await getApplicantProfile(axiosAuth);
    setProfile(result);
  }, [axiosAuth]);

  const fetchNotification = async () => {
    const notification = await applicantNotifications();
    console.log("notification", notification);
    setNotification(notification);
  };

  const dltNotification = async (id: string, url: string) => {
    const result = await disabledNotification({ id });
    if (result) {
      fetchNotification();
      router.push(`/${url}`);
    }
  };

  useEffect(() => {
    if (session?.user._id) {
      fetchNotification();
    }
  }, [session?.user._id]);

  const timeDistance = (time: Date) => {
    const today: Date = new Date();
    console.log("t", time);
    const notifyDate: Date = new Date(time);
    const diffMs: number = today.getTime() - notifyDate.getTime(); // milliseconds between now & notifyDate
    const diffDays: number = Math.floor(diffMs / 86400000); // days
    const diffHrs: number = Math.floor((diffMs % 86400000) / 3600000); // hours
    const diffMins: number = Math.round(
      ((diffMs % 86400000) % 3600000) / 60000
    ); // minutes
    console.log(time, diffMs);
    console.log(
      `${diffDays} days, ${diffHrs} hours, ${diffMins} minutes until notifyDate =)`
    );
    return `${Math.abs(diffDays)} days, ${Math.abs(diffHrs)} hours, ${Math.abs(
      diffMins
    )} minutes`;
  };

  const setProfile = UseProfile((state) => state.setProfile);

  const profile = UseProfile((state) => state.profile);

  // const fetchProfile = useCallback(async () => {
  //   const result = await getApplicantProfile(axiosAuth);
  //   setProfile(result);
  // }, [axiosAuth, setProfile]);

  useEffect(() => {
    if (session?.user._id) {
      fetchProfile();
    }
  }, [session?.user._id, fetchProfile]);

  useEffect(() => {
    // @ts-ignore
    const handleOutsideClick = (event: React.event) => {
      if (showMenu && !event.target.closest(".dashboard-menu")) {
        setShowMenu(!showMenu);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showMenu]);
  useEffect(() => {
    // @ts-ignore
    const handleOutsideClick = (event: React.event) => {
      if (showNotification && !event.target.closest(".notification")) {
        setShowNotification(!showNotification);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showNotification]);
  return (
    <div className="border-border border-b">
      {/* <Toaster /> */}
      <div className="container">
        <div className="flex justify-between items-center h-[54px]">
          <div className="flex items-center gap-10">
            <Link onClick={() => setSelectedMenu("home")} href="/">
              <Image src="/logo.svg" alt="logo" width="96" height="38" />
            </Link>
            <div className=" relative hidden sm:block">
              {/* devops: 7448 Hover Interaction off */}
              <Button
                // onMouseEnter={openModal}
                // onMouseLeave={closeModal}
                onClick={toggleModel}
                className="btn-content !text-body_2 gap-1.5 cursor-pointer"
                label={selectedMenuLabel}
                icon="arrow_drop_down"
                iconPosition="right"
                type="text"
              />
              <HomeMegaMenu isOpen={isOpen} onClose={closeModal} />
            </div>
          </div>
          <div className="justify-end item flex h-full">
            <div className="sm:flex hidden border-x px-[32px] items-center border-border">
              <div className=" w-[200px] justify-between flex">
                <Input
                  id="search"
                  className="flex-auto w-full px-0 border-none text-neutral placeholder:text-placeholder placeholder:text-sm placeholder:leading-4 text-sm leading-4"
                  type="text"
                  placeholder="Search Jobs"
                />
                <Icon
                  name="search"
                  className="text-2xl text-neutralDark cursor-pointer flex items-center"
                />
              </div>
            </div>
            <div className="flex cursor-pointer relative items-center gap-5 pl-8">
              <Icon
                name="search"
                className="text-xl block sm:hidden text-neutral cursor-pointer items-center"
              />
              {session && (
                <div onClick={() => handleNotificationClick()}>
                  {session && showNotification && (
                    <div className="absolute w-[270px] notification border-border border overflow-y-auto max-h-[370px] rounded-sm py-2.5 transform -translate-x-[80%] translate-y-[100%] z-10 left-o bottom-0 bg-white">
                      <div className="flex flex-col w-full">
                        {notification &&
                          notification.length > 0 &&
                          notification.map(
                            (
                              data: {
                                _id: string;
                                notification_title: string;
                                notification_description: string;
                                createdAt: string;
                                notification_reaction_link: string;
                              },
                              index
                            ) => (
                              <div
                                onClick={() =>
                                  dltNotification(
                                    data._id,
                                    data?.notification_reaction_link
                                  )
                                }
                                key={index}
                                className="flex hover:bg-slate-100 flex-col py-2.5 px-5 gap-2.5"
                              >
                                <SmallHeading nospace>
                                  {data?.notification_title &&
                                  data?.notification_title.length > 30
                                    ? data?.notification_title.slice(0, 30) +
                                      "..."
                                    : data?.notification_title}
                                </SmallHeading>
                                <ExtraSmallText nospace color="neutralDark">
                                  {data?.notification_description &&
                                  data?.notification_description.length > 30
                                    ? data?.notification_description.slice(
                                        0,
                                        30
                                      ) + "..."
                                    : data?.notification_description}
                                </ExtraSmallText>
                                <ExtraSmallText nospace color="neutralDark">
                                  {data?.createdAt
                                    ? timeDistance(new Date(data.createdAt))
                                    : ""}
                                  ago
                                  {/* 19 min ago */}
                                </ExtraSmallText>
                              </div>
                            )
                          )}
                        {(!notification || notification.length == 0) && (
                          <div className="flex hover:bg-slate-100 flex-col py-2.5 px-5 gap-2.5">
                            <SmallHeading nospace>No Notification</SmallHeading>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="relative">
                    {notification?.length > 0 && (
                      <div className="absolute -top-1 -right-1 h-4 w-4 bg-danger-600 rounded-full leading-4 flex items-center justify-center  ">
                        <ExtraSmallText nospace color="white">
                          {notification?.length}
                        </ExtraSmallText>
                      </div>
                    )}
                    <Image
                      src="/notifications.svg"
                      alt="user"
                      width="24"
                      height="24"
                    />
                  </div>
                </div>
              )}

              <div onClick={() => handleProfileClick()}>
                {session && showMenu && (
                  <div className="absolute w-[200px] dashboard-menu border-border border  rounded-sm transform -translate-x-[70%] translate-y-[100%] z-10 left-o bottom-0 bg-white">
                    <div className="flex flex-col w-full">
                      <Link
                        href={
                          profile?.applicant?.applicant_status ==
                          "Incomplete_profile"
                            ? "/pre-application-details"
                            : "/about-me"
                        }
                        className="flex hover:bg-slate-100 items-center p-5 gap-2.5"
                      >
                        <Icon name="account_circle" />
                        {profile?.applicant?.applicant_status ==
                        "Incomplete_profile" ? (
                          <LinkText
                            href="/pre-application-details"
                            label="Pre Application Details"
                            className="text-body_2 leading-relaxed hover:text-primary"
                            type="text"
                          />
                        ) : (
                          <LinkText
                            href="/about-me"
                            label="My Dashboard"
                            className="text-body_2 hover:text-primary"
                            type="text"
                          />
                        )}
                      </Link>
                      <div
                        onClick={() => logOut()}
                        className="flex hover:bg-slate-100 items-center p-5 gap-2.5"
                      >
                        <Icon name="logout" />
                        <LinkText
                          label="Logout"
                          className="text-body_2 hover:text-primary"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {profile?.applicant?.profile_image_url ? (
                  <Image
                    className="border p-[2px] h-[28px] w-[28px] rounded-full border-primary"
                    src={
                      FILE_SERVER_BASE_URL +
                      "/" +
                      profile?.applicant?.profile_image_url
                    }
                    alt="user"
                    width={28}
                    height={28}
                  />
                ) : (
                  <Image src="/account.svg" alt="user" width="24" height="24" />
                )}
                {/* <Image src="/account.svg" alt="user" width="24" height="24" /> */}
              </div>

              <div
                className="sidebar-menu cursor-pointer flex items-center justify-center"
                onClick={handleSIdebar}
              >
                <Icon className="text-h4" name="menu" />
              </div>
              {show && (
                <div
                  className={cn(
                    "fixed top-0 z-[9999] left-0 transition-all duration-300 w-screen h-screen bg-black opacity-20"
                  )}
                ></div>
              )}

              <SideBar show={show} navItems={nav} onClick={handleSIdebar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
interface Menu {
  name: string;
  link: string;
  subMenu?: Menu[];
}

const MenuItems = ({ dashboard }: { dashboard?: boolean }) => {
  const selectedMenu: Menu[] = useProductMenuStore(
    (state: any) => state.selectedMenu.menu
  );
  const setSelectedMenu = useProductMenuStore(
    // @ts-ignore
    (state) => state.setSelectedMenu
  );
  if (dashboard) {
    setSelectedMenu("dashboard");
  }
  const [isOpen, setIsOpen] = useState(false);

  const [subMenu, setSubMenu] = useState<Menu[]>();
  const onClose = () => {
    setIsOpen(false);
  };

  const openModal = (menu: Menu[] | []) => {
    if (menu && menu.length > 0) {
      setSubMenu(menu);
      setIsOpen(true);
    }
  };
  const toggleModel = (menu: Menu[] | []) => {
    if (menu && menu.length > 0) {
      setSubMenu(menu);
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    // @ts-ignore
    const handleOutsideClick = (event: React.event) => {
      if (
        isOpen &&
        !event.target.closest(".submenu-content") &&
        !event.target.closest(".btn-content")
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const pathname = usePathname();
  return (
    <div className="container mx-auto sm:block hidden">
      <div className="h-[54px] flex items-center">
        <ul className="flex items-center gap-[30px]">
          {selectedMenu &&
            selectedMenu.map((item, index) => (
              <li className="relative flex items-center gap-[6px]" key={index}>
                <Link
                  // onMouseEnter={() => openModal(item?.subMenu || [])}
                  onClick={() => toggleModel(item?.subMenu || [])}
                  className={cn(
                    "transition text-body_2 flex items-center gap-[6px] duration-300 text-neutralDark hover:text-productLicensing-700",
                    pathname === item.link && "text-productLicensing-700"
                  )}
                  href={item.link}
                >
                  <span className="flex">{item.name}</span>
                  {item.subMenu && (
                    <Icon name="arrow_drop_down" className="text-xl" />
                  )}
                </Link>
                {item.subMenu && (
                  <>
                    {isOpen && (
                      <SubMenu onClose={onClose} subMenu={subMenu || []} />
                    )}
                  </>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
type AllColors =
  | "strategy-400"
  | "hexCode-500"
  | "coaching-400"
  | "productLicensing-600";

const Navbar = ({
  dividerColor,
  dashboard,
}: {
  dividerColor?: AllColors;
  dashboard?: boolean;
}) => {
  const selectedMenu: any = useProductMenuStore(
    (state: any) => state.selectedMenu
  );
  let selectedColor;
  if (selectedMenu.label === "Hex Code Technology") {
    selectedColor = "hexCode-500";
  } else if (selectedMenu.label === "Strategy +") {
    selectedColor = "strategy-400";
  } else if (selectedMenu.label === "Coaching Forward") {
    selectedColor = "coaching-400";
  } else if (selectedMenu.label === "Product Licensing") {
    selectedColor = "productLicensing-600";
  }

  return (
    <nav
      className={cn(
        "border-transparent",
        selectedColor ? `border-${selectedColor}` : "border-transparent",
        selectedMenu.label != "dashboard" && "border-b-[6px] "
      )}
    >
      <TopBar />
      <MenuItems dashboard={dashboard} />
      {dashboard && (
        <Divider type="horizontal" className="gradient-border h-[6px]" />
      )}
    </nav>
  );
};

export { Navbar };
