"use client";
import React from "react";
import Modal from "./ModalWrapper";
import { Text, textVariants } from "../ui/Text";
import { cn } from "@/utils/classNames";
import { Input } from "../ui/Input";
import Link from "next/link";
import { Button } from "../ui/Button";
import { CheckboxInput } from "../ui/Checkbox";
import { TextArea } from "../ui/TextArea";

const BuyingModal = ({
  isOpen,
  closeModel,
}: {
  isOpen: boolean;
  closeModel: () => void;
}) => {
  const [step, setStep] = React.useState(1);
  const changeStep = () => {
    if (step === 4) {
      setStep(1);
    } else {
      setStep(step + 1);
    }
  };
  return (
    <Modal isOpen={isOpen} closeModel={closeModel}>
      <div className="w-[691px] min-h-[504px] flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <Text variant={"section_title_normal"}>
            Tell Us About Your Dream Home
          </Text>
          <Text variant={"small"} className="text-neutral">
            Answer a few quick questions so we can find the perfect property for
            you.
          </Text>
        </div>
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepThree />}
        {step === 4 && <StepDone />}
        <div className="flex items-end flex-auto h-auto justify-end">
          <Button
            onClick={() => changeStep()}
            label={step === 4 ? "done" : "Next"}
            size="small"
            outline
          />
        </div>
      </div>
    </Modal>
  );
};

const StepOne = () => {
  return (
    <>
      <Text variant={"body"}>
        1. Lorem ipsum dolor sit amet consectetur. In hac est vitae ornare
        cursus.
      </Text>
      <div className="flex flex-col gap-5">
        <CheckboxInput
          label="Lorem ipsum dolor sit amet consectetur. "
          name="input"
          id="test"
        />
        <CheckboxInput
          label="Lorem ipsum dolor sit amet consectetur. "
          name="input"
          id="test2"
        />
        <CheckboxInput
          label="Lorem ipsum dolor sit amet consectetur. "
          name="input"
          id="test3"
        />
      </div>
    </>
  );
};

const StepTwo = () => {
  return (
    <>
      <Text variant={"body"}>
        2. Are you and your team open to receiving feedback, even when it's
        challenging to hear?
      </Text>
      <div className="flex flex-col gap-5">
        <CheckboxInput label="Yes" name="input" id="test" />
        <CheckboxInput label="No" name="input" id="test2" />
        <CheckboxInput
          label="It's something we can work on"
          name="input"
          id="test3"
        />
      </div>
    </>
  );
};
const StepThree = () => {
  return (
    <>
      <Text variant={"body"}>
        3. Are you and your team open to receiving feedback, even when it's
        challenging to hear?
      </Text>
      <TextArea
        placeholder="Describe"
        rows={5}
        cols={10}
        name="Describe"
        id="describe"
        type="textarea"
      />
    </>
  );
};
const StepDone = () => {
  return (
    <>
      <div className="bg-success-50 border-l-4 border-success-500 p-5 flex flex-col gap-5">
        <Text variant={"small_heading"}>Your Inquiry Has Been Submitted!</Text>
        <Text variant={"small"}>
          Thank you for sharing your details! Our team is reviewing your
          information and will reach out with the next steps shortly.
        </Text>
      </div>
    </>
  );
};
export default BuyingModal;
