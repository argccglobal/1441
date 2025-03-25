import React from "react";
import { Select } from "./Select";
import { Input } from "./Input";

const PhoneNumber = () => {
  const options = [
    {
      value: "India",
      label: "+91",
    },
  ];
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-[126px]">
        <Select placeholder="STD Code *" options={options} />
      </div>
      <Input
        id="phone"
        type="text"
        placeholder="550 123 4567"
        error={false}
        errorMsg=""
      />
    </div>
  );
};

export { PhoneNumber };
