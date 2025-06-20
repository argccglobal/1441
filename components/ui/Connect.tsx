import React, { useEffect, useState } from "react";
import { Text } from "./Text";
import { Icon } from "./Icon";
import Image from "next/image";
import Section from "@/components/layout/Section";
import Link from "next/link";
import { Input } from "./Input";
import { Button } from "./Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { contactUs, letsTalk } from "@/lib/publicPostApi";
import toast from "react-hot-toast";
import SearchSelect from "./SearchSelect";
// import { getDiscussTopics, getPublicIndustries } from "@/lib/publicGetApi";
// import UseCountry from "@/hooks/use-country"; // Hook doesn't exist
import { commonError } from "@/utils/Error";
import ErrorMessage from "./ErrorMessage";
const connectContent = {
  initial: {
    title: "Let's grow together",
    body: "Have questions about your next growth move?",
    link: "Let's solve it.",
  },
  form: {
    title: "Let's grow together",
    body: "Have questions about your next growth move?",
    link: "Let's solve it.",
  },
  success: {
    title: "Thanks! Your message has been sent to our team.",
    body: "We'll contact with you shortly. Hope we’ll grow together.",
    link: "Let's solve it.",
  },
};
const schema = z.object({
  full_name: z.string().nonempty({ message: "Name is required" }),
  business_email: z.string().email({ message: "Invalid email" }),
  phone_number: z.string().optional(),
  additional_notes: z.string(),
  country: z.object({
    _id: z.string(),
  }),
  industry: z.object({
    _id: z.string(),
  }),

  discussion_topic: z.object({
    _id: z.string(),
  }),
});
// { connectContent }: any
function Connect({
  data,
}: {
  data?: {
    title: string;
    description: string;
    image_url: string;
    href_text: string;
    href: string;
    contact_us_button_text: string;
  };
}) {
  type Schema = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  // Mock country data since UseCountry hook doesn't exist
  const countryList = [
    { value: "1", label: "United States" },
    { value: "2", label: "United Kingdom" },
    { value: "3", label: "Canada" },
  ];
  const getCountry = () => {}; // Mock function
  const [discussTopic, setDiscussTopic] = React.useState<any[]>([]);
  const getDiscussionTopic = async () => {
    // Commented out due to missing publicGetApi module
    // const topics = await getDiscussTopics();
    // setDiscussTopic(topics);

    // Mock data for now
    setDiscussTopic([
      { value: "1", label: "Topic 1" },
      { value: "2", label: "Topic 2" },
    ]);
  };
  useEffect(() => {
    getCountry();
    getDiscussionTopic();
    fetchIndustry();
  }, []);
  const [industry, setIndustry] = useState<any[]>([]);
  const fetchIndustry = async () => {
    // Commented out due to missing publicGetApi module
    // const result = await getPublicIndustries();
    // setIndustry(result);

    // Mock data for now
    setIndustry([
      { value: "1", label: "Industry 1" },
      { value: "2", label: "Industry 2" },
    ]);
  };

  const selectCountry = (value: any) => {
    console.log(value);
    if (value) {
      setValue(
        "country",
        { _id: value.value },
        {
          shouldValidate: true,
          shouldDirty: true,
        }
      );
    }
  };
  const selectDiscussionTopic = (value: any) => {
    console.log(value);
    if (value) {
      setValue(
        "discussion_topic",
        { _id: value.value },
        {
          shouldValidate: true,
          shouldDirty: true,
        }
      );
    }
    // errors.discussion_topic?.message = "";
  };
  const selectIndustry = (value: any) => {
    console.log(value);
    if (value) {
      setValue(
        "industry",
        { _id: value.value },
        {
          shouldValidate: true,
          shouldDirty: true,
        }
      );
    }
    // errors.discussion_topic?.message = "";
  };

  const [status, setStatus] = React.useState("contact");
  const [btnLoader, setBtnLoader] = React.useState(false);
  const [error, setError] = React.useState("");
  const handleLetsTalk = async (data: any) => {
    setBtnLoader(true);
    // Commented out due to missing publicPostApi module
    // const body = {
    //   // is_replied: "1",
    //   full_name: data.full_name,
    //   work_email: data.business_email,
    //   ref_country: data.country?._id,
    //   ref_industry: data.industry?._id,
    //   ref_discussion_topic: data.discussion_topic?._id,
    //   additional_notes: data.additional_notes,
    // };
    // const res = await contactUs(body);
    // if (res.success) {
    //   toast.success("Your enquiry has been submitted successfully");
    //   setStatus("success");
    //   reset({});
    // } else {
    //   setError(res?.error?.message || commonError);
    // }

    // Mock success for now
    toast.success("Your enquiry has been submitted successfully");
    setStatus("success");
    reset({});

    setBtnLoader(false);
  };

  // Removed standalone errors reference that was causing TypeScript error

  return (
    <>
      <div className="flex justify-between items-center">
        {status === "contact" && (
          <div className="md:w-1/2">
            <Text variant="section_title_normal" className="mb-4">
              {connectContent["initial"].title}
            </Text>
            <Text variant="body" className="mb-8">
              {connectContent["initial"].body}{" "}
              <Link className="underline" href="javascript:void(0)">
                {connectContent["initial"].link}
              </Link>
            </Text>
            <div
              onClick={() => setStatus("form")}
              className="flex cursor-pointer gap-2.5 items-center"
            >
              <Text variant="small" className="text-neutralDark">
                Contact Us
              </Text>
              <Icon name="arrow_forward" className=" text-body_2" />
            </div>
          </div>
        )}
        {status === "form" && (
          <form
            onSubmit={handleSubmit((data) => handleLetsTalk(data))}
            className="md:w-1/2"
          >
            <Text variant="section_title_normal" className="mb-4">
              {connectContent["form"].title}
            </Text>
            <Text variant="body" className="mb-8">
              {connectContent["form"].body}{" "}
              <Link className="underline" href="javascript:void(0)">
                {connectContent["form"].link}
              </Link>
            </Text>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Input
                {...register("full_name")}
                error={errors.full_name?.message ? true : false}
                errorMsg="Please enter your name"
                type="text"
                placeholder="Your Name"
                id="name"
              />
              <Input
                {...register("business_email")}
                error={errors.business_email?.message ? true : false}
                errorMsg="Please enter a valid email"
                type="text"
                placeholder="Your Email"
                id="email"
              />
              <div className="">
                <SearchSelect
                  name="country"
                  error={errors.country?.message ? true : false}
                  errorMessage={"Please select country"}
                  className="w-full flex-1"
                  options={countryList}
                  onChange={selectCountry}
                  placeholder="Country of Residence"
                />
              </div>
              <div className="">
                <SearchSelect
                  name="industry"
                  error={errors.industry ? true : false}
                  errorMessage={"Please select industry"}
                  onChange={selectIndustry}
                  placeholder="Your industry"
                  options={industry}
                />
              </div>
              <div className="sm:col-span-2">
                <SearchSelect
                  name="discussion_topic"
                  error={errors.discussion_topic?.message ? true : false}
                  errorMessage={"Please select discussion topic"}
                  className="w-full flex-1"
                  options={discussTopic}
                  onChange={selectDiscussionTopic}
                  placeholder="What would you like to discuss?"
                />
              </div>
              <textarea
                {...register("additional_notes")}
                onChange={(e) => setValue("additional_notes", e.target.value)}
                className="border sm:col-span-2 mb-2.5 w-full border-border outline-none px-2.5 py-2 text-neutralDark focus:border-primary placeholder:text-placeholder text-body_2 placeholder:text-body_2"
                id="txtid"
                name="txtname"
                rows={5}
                cols={50}
                placeholder="Additional notes that might be useful"
              ></textarea>
            </div>
            {error && (
              <div className="pb-3">
                <ErrorMessage message={error} />
              </div>
            )}
            <Button
              label="Submit"
              primary
              className="mt-5 px-[50px] w-full flex items-center justify-center text-center sm:w-fit  py-[12px]"
              btnType="submit"
            />
          </form>
        )}
        {status === "success" && (
          <div className="md:w-1/2">
            <Text variant="section_title_normal" className="mb-4">
              {connectContent["success"].title}
            </Text>
            <Text variant="body" className="mb-8">
              {connectContent["success"].body}{" "}
              <Link className="underline" href="javascript:void(0)">
                {connectContent["success"].link}
              </Link>
            </Text>
            <div
              onClick={() => setStatus("form")}
              className="flex gap-2.5 items-center"
            >
              <Text className="cursor-pointer text-neutralDark" variant="small">
                Contact Us
              </Text>
              <Icon name="arrow_forward" className=" text-body_2" />
            </div>
          </div>
        )}

        {/* <Image
          className="transform rotate-[270deg] md:block hidden -translate-x-[125px]"
          src="/gif.gif"
          alt="gifgif"
          height={440}
          width={204}
        /> */}
      </div>
    </>
  );
}

export default Connect;
