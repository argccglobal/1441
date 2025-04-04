"use client";
import Map from "@/components/Map";
// import Banner from "@/components/common/Banner";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { Icon } from "@/components/ui/Icon";
import { Input } from "@/components/ui/Input";
import { LinkText } from "@/components/ui/LinkText";
import { Select } from "@/components/ui/Select";
// import { SearchSelect } from "@/components/ui/SearchSelect";
// import {
//   Body,
//   CardTitle,
//   PageTitle,
//   SectionTitle,
//   SmallHeading,
// } from "@/components/ui/Text";
import { TextArea } from "@/components/ui/TextArea";
// import UseCountry from "@/hooks/use-country";
// import {
//   getContactUsPage,
//   getDiscussTopics,
//   getPublicIndustries,
// } from "@/lib/publicGetApi";
// import { contactUs, letsTalk } from "@/lib/publicPostApi";
// import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
import { z } from "zod";
// import { errorMsg } from "@/utils/errorMsg";
import ErrorMessage from "@/components/ui/ErrorMessage";
import Section from "@/components/layout/Section";
// import { ADMIN_EMAIL } from "@/utils/apiConfig";
import VectorBottomLeftImg from "@/public/vector_bottom_left.svg";
import VectorBottomRightImg from "@/public/vector_bottom_right.svg";
import VectorTopRightImg from "@/public/vector_top_right.svg";
import { Text } from "@/components/ui/Text";
import { cn } from "@/utils/classNames";
import ContentSection from "@/components/common/ContentSection";
import SearchSelect from "@/components/ui/SearchSelect";
import TabLinks from "@/components/TabLinks";
import EarthImg from "@/public/earth.svg";

const schema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  country: z.object({ _id: z.string() }),
  industry: z.object({ _id: z.string() }),
  discuss: z.object({ _id: z.string() }),
  additional_notes: z.string().min(1).nonempty(),
});

const Page = () => {
  type Schema = z.infer<typeof schema>;

  const {
    formState,
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  // const getCountryList = UseCountry((state) => state.getCountryList);
  // const countryList = UseCountry((state) => state.countryList);
  // const [discussTopic, setDiscussTopic] = useState<any[]>([]);
  // const [industry, setIndustry] = useState<any[]>([]);

  // const fetchIndustry = async () => {
  //   const result = await getPublicIndustries();
  //   setIndustry(result);
  // };

  // const getDiscussionTopic = async () => {
  //   const topics = await getDiscussTopics();
  //   setDiscussTopic(topics);
  // };

  // useEffect(() => {
  //   getCountryList();
  //   fetchIndustry();
  //   getDiscussionTopic();
  // }, []);
  // const selectCountry = (value: any) => {
  //   setValue("country", value, {
  //     shouldValidate: true,
  //     shouldDirty: true,
  //   });
  // };
  // const selectIndustry = (value: any) => {
  //   setValue("industry", value, {
  //     shouldValidate: true,
  //     shouldDirty: true,
  //   });
  // };
  // const selectDiscuss = (value: any) => {
  //   setValue("discuss", value, {
  //     shouldValidate: true,
  //     shouldDirty: true,
  //   });
  // };
  // const [submitStatus, setSubmitStatus] = useState(false);
  // const [btnLoader, setBtnLoader] = useState(false);
  // const [error, setError] = useState("");
  // const handleLetsTalk = async (data: Schema) => {
  //   setError("");
  //   setBtnLoader(true);
  //   const body = {
  //     full_name: data.name,
  //     work_email: data.email,
  //     ref_country: data.country?._id,
  //     ref_industry: data.industry?._id,
  //     ref_discussion_topic: data.discuss?._id,
  //     additional_notes: data.additional_notes,
  //   };

  //   const res = await contactUs(body);

  //   if (res.success) {
  //     setSubmitStatus(true);
  //     // toast.success("Successfully submitted");
  //   } else {
  //     setError(errorMsg(res));
  //   }
  //   setBtnLoader(false);
  // };
  const [pageData, setPageData] = useState<{
    hero: {
      title: string;
      description: string;
    };
    cta_section: {
      description: string;
      href: string;
      href_text: string;
      title: string;
    }[];
    we_are_here_section: {
      title: string;
      description: string;
      anchors: {
        href_text: string;
        href: string;
        _id: string;
      }[];
    };
    office_location_section: {
      published_job_count: number;
      vacancy_section_description: string;
      vacancy_section_title: string;
      office_location_name: string;
      address_line_one: string;
      address_line_two: string;
      ref_region: {
        _id: string;
        ref_country_id: string;
        region_name: string;
        status: number;
        createdAt: string;
        updatedAt: string;
        __v: number;
      };
      ref_country: {
        _id: string;
        ref_continent: string;
        country_name: string;
        country_code: string;
        currency: string;
        createdAt: string;
        updatedAt: string;
        country_short_name: string;

        __v: number;
      };
      href: string;
      href_text: string;
      po_box_text: string;
      telephone: string;
      working_hours_text: string;
      _id: string;
    }[];
    job_vacancy_section: {
      title: string;
      description: string;
      href: string;
      href_text: string;
      _id: string;
    };
  }>({
    hero: {
      title: "We’re here for you",
      description:
        "Have questions? We're here to help. Talk to a real person and get the answers that matter most.",
    },
    cta_section: [
      {
        description: "Already a customer? Find your product login.",
        href: "#product-logins",
        href_text: "Find your product login",
        title: "Product Logins",
      },
      {
        description: "Explore career opportunities with us.",
        href: "#careers",
        href_text: "View Careers",
        title: "Careers",
      },
      {
        description: "Learn more about G.C.C Limited.",
        href: "#about-us",
        href_text: "About Us",
        title: "About G.C.C Limited",
      },
    ],
    we_are_here_section: {
      title: "Follow Us",
      description:
        "We can talk goals, capabilities, favourite travel destinations - it's your call.",
      anchors: [
        {
          href_text: "Partnership",
          href: "#partnership",
          _id: "partnership",
        },
        {
          href_text: "Product Logins",
          href: "#product-logins",
          _id: "product-logins",
        },
      ],
    },
    office_location_section: [
      {
        published_job_count: 12,
        vacancy_section_description:
          "There are currently 12 jobs available in the UAE",
        vacancy_section_title: "Current Vacancies in the UAE",
        office_location_name: "Abu Dhabi, UAE",
        address_line_one: "Office 81, Al Sila Tower",
        address_line_two:
          "Abu Dhabi Global Market Street, Abu Dhabi, United Arab Emirates",
        ref_region: {
          _id: "region-12345",
          ref_country_id: "country-98765",
          region_name: "Abu Dhabi",
          status: 1,
          createdAt: "2024-04-01T08:00:00Z",
          updatedAt: "2024-04-01T08:00:00Z",
          __v: 0,
        },
        ref_country: {
          _id: "country-98765",
          ref_continent: "Asia",
          country_name: "United Arab Emirates",
          country_code: "AE",
          currency: "AED",
          createdAt: "2024-04-01T08:00:00Z",
          updatedAt: "2024-04-01T08:00:00Z",
          country_short_name: "UAE",
          __v: 0,
        },
        href: "https://maps.google.com?q=Abu+Dhabi+Global+Market+Street",
        href_text: "Show on Map: Get Directions",
        po_box_text: "P.O Box 7799",
        telephone: "+91712 444 3434",
        working_hours_text: "8am to 5.30pm Sunday to Thursday",
        _id: "office-uae-001",
      },
    ],
    job_vacancy_section: {
      title: "Current Vacancies in the UAE",
      description: "There are currently 12 jobs available in the UAE",
      href: "#view-jobs",
      href_text: "View",
      _id: "uae-jobs",
    },
  });

  return (
    <>
      <div className="relative bg-[#181818] min-h-[680px]">
        <Section bgColor="transparent">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="flex flex-col gap-16 justify-center">
              <Text variant={"page_title"} className="text-white">
                Let’s Talk
              </Text>
              <ContentSection
                color="text-white"
                texts={[
                  "We can talk goals, capabilities, favourite",
                  "travel destinations ",
                ]}
              />
            </div>
            {1 === 2 ? (
              <>
                <Text
                  variant={"small_heading"}
                  className="text-xl !font-light !leading-7"
                  color="white"
                >
                  Thank you for contacting us. We will get back to you soon.
                </Text>
              </>
            ) : (
              <form onSubmit={handleSubmit(() => {})} className="z-10">
                <div className="mb-8 grid grid-cols-1  xs:grid-cols-2 xs:gap-x-8 gap-y-5">
                  <Input
                    error={errors.name?.message ? true : false}
                    errorMsg={"Name is required"}
                    {...register("name")}
                    className={cn(
                      "bg-neutralDark border-neutralDark text-white placeholder:!text-white"
                    )}
                    type="text"
                    id="name"
                    placeholder="Full Name *"
                  />
                  <Input
                    error={errors.email?.message ? true : false}
                    errorMsg={"Email is required"}
                    {...register("email")}
                    className={cn(
                      "bg-neutralDark border-neutralDark text-white placeholder:!text-white"
                    )}
                    type="text"
                    id="name"
                    placeholder="Work Email *"
                  />
                  <SearchSelect
                    dark
                    options={[
                      {
                        label: "United Arab Emirates",
                        value: "United Arab Emirates",
                      },
                    ]}
                    name="country"
                    // label="Country"
                  />
                  <SearchSelect
                    dark
                    options={[
                      {
                        label: "United Arab Emirates",
                        value: "United Arab Emirates",
                      },
                    ]}
                    name="Your Industry"
                    // label="Country"
                  />

                  {/* <SearchSelect
                    error={errors.country?.message ? true : false}
                    errorMsg={"Country is required"}
                    labelKey="country_name"
                    valueKey="_id"
                    handleSelect={() => selectCountry}
                    dark
                    placeholder="Country"
                    options={countryList}
                  /> */}
                  {/* <SearchSelect
                    error={errors.industry?.message ? true : false}
                    errorMsg={"Industry is required"}
                    handleSelect={() => selectIndustry}
                    labelKey="industry_name"
                    valueKey="_id"
                    dark={true}
                    placeholder="You Industry"
                    options={industry}
                  /> */}
                  <div className="xs:col-span-2  neutralDark">
                    <SearchSelect
                      dark
                      options={[
                        {
                          label: "What would you like to dicusss?",
                          value: "What would you like to dicusss?",
                        },
                      ]}
                      name="Your Industry"
                      // label="Country"
                    />

                    {/* <SearchSelect
                      error={errors.discuss?.message ? true : false}
                      errorMsg={"Topic is required"}
                      placeholderClass="text-white"
                      labelKey="discussion_topic"
                      valueKey="_id"
                      className="w-full flex-1"
                      options={discussTopic}
                      handleSelect={() => selectDiscuss}
                      dark
                      placeholder="What would you like to dicusss?"
                    /> */}
                  </div>
                  <div className="xs:col-span-2  neutralDark">
                    <TextArea
                      errorMsg={
                        errors.additional_notes?.message
                          ? errors.additional_notes?.message
                          : ""
                      }
                      onChange={(e) =>
                        setValue("additional_notes", e.target.value, {
                          shouldValidate: true,
                          shouldDirty: true,
                        })
                      }
                      className={cn(
                        "bg-neutralDark border-neutralDark text-white placeholder:!text-white"
                      )}
                      id="message"
                      rows={5}
                      cols={5}
                      name="message"
                      placeholder="Additional notes that might be useful"
                    />
                  </div>
                </div>
                {/* {error && <ErrorMessage message={error} />} */}
                <div className="flex justify-end">
                  <button className="py-3 px-[50px] bg-white rounded-sm hover:bg-neutral hover:text-white">
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </Section>
        <div className="absolute left-0 bottom-0">
          <Image src={VectorBottomLeftImg} alt="vector" />
        </div>
        <div className="absolute right-0 bottom-0">
          <Image src={VectorBottomRightImg} alt="vector" />
        </div>
        <div className="absolute right-0 top-0">
          <Image src={VectorTopRightImg} alt="vector" />
        </div>
      </div>
      <TabLinks />
      <OurOffices
        data={pageData.we_are_here_section}
        cta={pageData.cta_section}
      />
      <OfficeInEarth data={pageData.office_location_section} />
      <ContactInfo
        data={pageData.office_location_section}
        // vacancy={pageData.job_vacancy_section}
      />
    </>
  );
};

const OurOffices = ({
  data,
  cta,
}: {
  data: {
    title: string;
    description: string;
    anchors: {
      href_text: string;
      href: string;
      _id: string;
    }[];
  };
  cta: {
    description: string;
    href: string;
    href_text: string;
    title: string;
  }[];
}) => {
  return (
    <Section bgColor="white" className="!py-20">
      <div className="flex flex-col gap-16">
        <Text variant={"section_title_normal"}>
          {/* {data.title} */}
          We{"’"}re here for you
        </Text>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex  gap-7 flex-col justify-between">
            <Text variant={"body"} className="line-clamp-3">
              {data.description}
            </Text>
            <Divider type="horizontal" className="h-px" />
            {data.anchors.map(
              (anchor: { href_text: string; href: string; _id: string }) => (
                <>
                  <LinkText
                    type="text"
                    icon="east"
                    href={anchor.href}
                    iconPosition="right"
                    textColor="primary"
                    className="cursor-pointer uppercase"
                    label={anchor.href_text}
                  />
                  <Divider type="horizontal" className="h-px" />
                </>
              )
            )}
          </div>
          {cta.map((item, index: number) => (
            <div
              key={index}
              className="p-8 flex gap-8 flex-col justify-between border-border border"
            >
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"}>Follow Us</Text>
                <Text variant={"body"} className="line-clamp-4">
                  Proin turpis volutpat integer quam. Viverra nec id id ipsum.
                  Et eu interdum vitae in pellentesque id. Felis nullam placerat
                  vitae at lacinia urna egestas sed facilisis. Dignissim aliquet
                  id ipsum malesuada. Dolor id egestas diam dui in nibh.
                  Fringilla praesent fermentum leo praesent morbi viverra.
                  Imperdiet posuere neque mattis purus neque at eu. Magna
                  malesuada tincidunt id facilisis vel aliquam rhoncus magna.
                  Tellus cursus mauris risus tortor. Pretium consequat volutpat
                  tortor tincidunt. Tincidunt risus sed semper sollicitudin
                  sociis fusce lectus nisl.
                </Text>
              </div>
              <LinkText
                type="text"
                icon="east"
                // href={`mailto:${ADMIN_EMAIL}`}
                iconPosition="right"
                textColor="primary"
                className="cursor-pointer mt-auto "
                label={"Button Title"}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const OfficeInEarth = ({
  data,
}: {
  data: {
    office_location_name: string;
    address_line_one: string;
    address_line_two: string;
    ref_region: {
      _id: string;
      ref_country_id: string;
      region_name: string;
      status: number;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
    ref_country: {
      _id: string;
      ref_continent: string;
      country_name: string;
      country_code: string;
      currency: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
    href: string;
    href_text: string;
    po_box_text: string;
    telephone: string;
    working_hours_text: string;
    _id: string;
  }[];
}) => {
  return (
    <Section className="!pt-0 !pb-20" bgColor="white">
      <Text variant={"section_title_normal"} className="mb-16">
        OUR OFFICES
      </Text>
      <div className="flex justify-center items-center gap-8">
        <Icon className="p-5 cursor-pointer bg-background" name="west" />
        <Image
          className="max-w-[200px] md:max-w-[500px]"
          alt="Earth"
          src={EarthImg}
          width={500}
          height={500}
        />
        <Icon className="p-5 cursor-pointer bg-background" name="east" />
      </div>
    </Section>
  );
};

const ContactInfo = ({
  data,
}: {
  data: {
    office_location_name: string;
    address_line_one: string;
    address_line_two: string;
    ref_region: {
      _id: string;
      ref_country_id: string;
      region_name: string;
      status: number;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
    ref_country: {
      _id: string;
      ref_continent: string;
      country_name: string;
      country_code: string;
      currency: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
      country_short_name: string;
    };
    vacancy_section_description: string;
    href: string;
    href_text: string;
    po_box_text: string;
    telephone: string;
    working_hours_text: string;
    _id: string;
    published_job_count: number;
    vacancy_section_title: string;
  }[];
}) => {
  const [showDirection, setShowDirection] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const toggleShowMap = () => {
    setShowMap(!showMap);
  };
  return (
    <Section className="-mb-px !py-20" bgColor="black">
      {data.map((item, index) => (
        <>
          <div
            key={index}
            className={cn(
              "pb-8 flex-wrap pr-0 md:pr-20 border-b border-border flex gap-5 md:gap-12",
              index != 0 ? "pt-8" : ""
            )}
          >
            <Icon
              name="location_on"
              className="text-white md:my-12 text-[50px]"
            />
            <div className="flex flex-wrap flex-auto flex-col gap-5">
              <Text variant={"card_title_large"} className="text-white">
                {item.ref_region.region_name}. {item.ref_country?.country_name}
              </Text>
              <div className="grid grid-cols-1 w-full sm:grid-cols-2 gap-5">
                <div className="">
                  <Text variant={"body"} className="text-neutralLight">
                    {item.ref_region.region_name}.{" "}
                    {item.ref_country?.country_name}
                  </Text>
                  <Text variant={"body"} className="text-neutralLight">
                    {item.address_line_one}
                  </Text>
                  <Text variant={"body"} className="text-neutralLight">
                    {item.address_line_two}
                  </Text>
                  <Text variant={"body"} className="text-neutralLight">
                    {item.ref_country?.country_name}
                  </Text>
                  <Text variant={"body"} className="text-neutralLight">
                    Show on Map:{" "}
                    <span
                      onClick={() => toggleShowMap()}
                      className=" text-propertiesMain cursor-pointer underline"
                    >
                      Get Directions
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-5">
                    <Text variant={"body"} className="text-neutralLight">
                      {item.po_box_text}
                    </Text>
                    <Text variant={"body"} className="text-neutralLight">
                      Tel: {item.telephone}
                    </Text>
                  </div>
                  <Text variant={"body"} className="text-neutralLight">
                    {item.working_hours_text}
                  </Text>
                </div>
              </div>
              {showMap && (
                <div className=" mt-8 relative w-full">
                  <Icon
                    onClick={() => toggleShowMap()}
                    name="west"
                    className="top-6 absolute cursor-pointer z-10 left-5"
                  />
                  <Map address="Nachole Daily and weekly Bazar" />
                </div>
              )}
            </div>
          </div>
          <CurrentVacancy data={item} />
        </>
      ))}
    </Section>
  );
};
const CurrentVacancy = ({
  data,
}: {
  data: {
    published_job_count: number;
    vacancy_section_description: string;
    vacancy_section_title: string;
    ref_country: {
      _id: string;
      ref_continent: string;
      country_name: string;
      country_code: string;
      currency: string;
      createdAt: string;
      updatedAt: string;
      country_short_name: string;

      __v: number;
    };
  };
}) => {
  return (
    <div
      className={cn(
        "py-5 pr-0 md:pr-20 border-b border-border flex-wrap flex w-full gap-12 items-center"
      )}
    >
      <Icon name="business_center" className="text-white text-[50px]" />
      <div className="flex flex-wrap gap-12 flex-auto items-center justify-between">
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_large"} className="text-neutralLight">
            {data.vacancy_section_title}
          </Text>
          <Text variant={"body"} className="text-neutralLight">
            {data.vacancy_section_description.replace(
              "[job_count]",
              data.published_job_count.toString()
            )}
          </Text>
        </div>
        <LinkText
          className="text-[#333333] !capitalize"
          type="link"
          href={
            data.ref_country._id &&
            `/job-search/?ref_country=${data.ref_country._id}`
          }
          label={"View"}
        />
      </div>
    </div>
  );
};
export default Page;
