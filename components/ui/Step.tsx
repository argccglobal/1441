"use client";
import { FC, useEffect, useState } from "react";
import { SmallHeading, SmallText } from "./Text";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import UseActiveTest from "@/hooks/use-active-test";

interface StepProps {
  stepIndex: number;
  activeStep?: {
    _id: string;
    name_of_the_test: string;
  };
  stepName: string;
}

export const Step: FC<StepProps> = ({ stepIndex, activeStep, stepName }) => {
  // Get route name
  const router = useRouter();
  const pathname = usePathname();
  console.log("routeName", router, pathname);
  const [activePath, setActivePath] = useState<string>("");
  const [completedStep, setCompletedStep] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || "1";
  const stepPosition = parseInt(step);
  const status = searchParams.get("status") || "incomplete";
  const setActiveTask = UseActiveTest((state) => state.setActiveTest);
  const [completedPath, setCompletedPath] = useState<any>([]);
  useEffect(() => {
    console.log("pathname", pathname, activeStep);
    if (pathname == "/fit-test") {
      setActivePath("Fit Test");
    }
    if (pathname == "/cognitive") {
      setActivePath("Cognitive Test");
      // setCompletedStep(1);
      setCompletedPath(["Fit Test"]);
    }
    if (pathname == "/skills") {
      setActivePath("Skills Test");
      // setCompletedStep(2);
      setCompletedPath(["Fit Test", "Cognitive Test"]);
    }
    if (pathname == "/industry-expertise") {
      setActivePath("Industry Expertise");
      // setCompletedStep(3);
      setCompletedPath(["Fit Test", "Cognitive Test", "Skills Test"]);
    }
    if (pathname == "/industry-expertise" && status === "completed") {
      setCompletedPath([
        "Fit Test",
        "Cognitive Test",
        "Skills Test",
        "Industry Expertise",
      ]);
    }
  }, [stepPosition, status, pathname, activeStep]);
  useEffect(() => {
    if (activeStep?.name_of_the_test === activePath) {
      setActiveTask(activeStep);
      console.log("activeStep", activeStep);
    }
  }, [activePath, activeStep, setActiveTask]);

  return (
    <div className="flex flex-col justify-center items-center">
      <SmallHeading
        className={cn(
          "text-primary mb-[14px] h-[38px] w-[38px] rounded-full text-center flex items-center justify-center border-primary border bg-productLicensing-50",

          completedPath.includes(activeStep?.name_of_the_test)
            ? "bg-primary text-white"
            : ""
        )}
      >
        {stepIndex}
      </SmallHeading>
      <SmallText className="mb-2.5">{stepName}</SmallText>
      <div className="flex items-center gap-2.5">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            // onClick={() => setStep(index + 1)}
            className={`cursor-pointer h-2.5 w-[48px] rounded-md  ${
              (activeStep?.name_of_the_test === activePath &&
                stepPosition > index) ||
              completedPath.includes(activeStep?.name_of_the_test)
                ? "bg-primary"
                : "bg-productLicensing-50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
