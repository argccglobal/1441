// DatePicker.tsx
"use client";

import * as React from "react";
import { Icon } from "./Icon";
import { Text } from "./Text";
import { cn } from "@/utils/classNames";
import Datepicker from "tailwind-datepicker-react";

export const DateSelector = ({
  className,
  placeholder,
  selectDate,
  date,
  error,
  errorMsg,
  maxDate,
  minDate,
  disabled = false,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  placeholder?: string;
  date?: any;
  error?: boolean;
  errorMsg?: string;
  disabled?: boolean;
  maxDate?: Date;
  minDate?: Date;
  selectDate: (date: Date) => void;
}) => {
  console.log("data", date);
  const [show, setShow] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState();

  const handleChange = (selectedDate: Date) => {
    // @ts-ignore
    const dateSelector = selectDate();
    // @ts-ignore
    dateSelector(selectedDate);
    // handleClose(false);
    // setSelectedDate(selectedDate);
  };
  const handleClose = (state: boolean) => {
    setShow(state);
  };

  const dateFormate = (date: Date | any) => {
    const d = new Date(date);
    const month = d.toLocaleString("default", { month: "short" });
    const day = d.getDate();
    const year = d.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  React.useEffect(() => {
    // @ts-ignore
    const handleOutsideClick = (event: React.event) => {
      if (show && !event.target.closest(".date-picker .inline-block")) {
        setShow(!show);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [show, handleClose]);

  return (
    <div>
      <div
        onClick={() => {
          if (!disabled && show == false) setShow(true);
        }}
        className="border  flex items-center !bg-white relative w-full h-[40px] rounded-sm outline-none px-2.5 py-2 text-neutralDark focus:border-primary placeholder:text-placeholder text-body_2 placeholder:text-body_3 border-border"
      >
        <Datepicker
          options={{
            minDate: minDate,
            maxDate: maxDate,
            clearBtn: false,
            defaultDate: null,
            theme: {
              disabledText: "!text-gray-300",
              background: "bg-white",
              todayBtn: "",
              clearBtn: "",
              icons: "",
              text: "",
              input: "",
              inputIcon: "",
              selected: "",
            },
          }}
          onChange={handleChange}
          show={show}
          classNames="w-full flex justify-between items-center date-picker"
          setShow={handleClose}
        >
          <div className="flex items-center gap-2.5">
            <input
              {...props}
              type="text"
              className="w-full text-[12px] !text-neutralDark placeholder:!text-placeholder h-full outline-none "
              placeholder={placeholder}
              data-date={date}
              value={date ? dateFormate(date) : ""}
              onFocus={() => {
                if (!disabled) setShow(true);
              }}
              readOnly
            />
          </div>
          <div className="flex items-center ">
            <Icon className="text-h6 text-neutralLight" name="calendar_month" />
          </div>
        </Datepicker>
      </div>
      {error && errorMsg && (
        <Text variant="small" className="text-danger-600 block d-block font-roboto font-light w-full leading-[21px]">
          {errorMsg}
        </Text>
      )}
    </div>
  );
};
