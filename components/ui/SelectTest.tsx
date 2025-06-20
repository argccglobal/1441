// "use client";
// import React, { useEffect, useState } from "react";
// import { Icon } from "./Icon";
// import { Text } from "./Text";
// import { CheckboxInput } from "./Checkbox";
// import { on } from "events";
// import { string } from "zod";
// import { ToolTip } from "./ToolTip";
// export interface Options {
//   [key: string]: any;
// }

// interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
//   refName?: any;
//   options: Options[];
//   error?: boolean;
//   errorMsg?: string;
//   disabled?: boolean;
//   selectedItem?: Options;
//   checkboxSelected?: Options[];
//   search?: boolean;
//   placeholder: string;
//   placeholderClass?: string;
//   className?: string;
//   multicol?: boolean;
//   col?: number;
//   optionType?: string | "checkbox";
//   dark?: boolean;
//   labelKey: string;
//   valueKey: string;
//   label?: string;
//   selectValue?: string;
//   gap?: string;
//   reset?: boolean;
//   toolTipText?: string;
//   handleSelect?: () => void;
//   ref_key?: any;
//   selectedField?: boolean;
// }

// const SelectTest = ({
//   refName,
//   selectedField,
//   toolTipText,
//   ref_key,
//   options,
//   error,
//   errorMsg,
//   selectedItem,
//   checkboxSelected,
//   className,
//   search,
//   placeholder,
//   placeholderClass,
//   label,
//   multicol,
//   optionType = "string",
//   col,
//   dark,
//   handleSelect,
//   labelKey,
//   valueKey,
//   disabled = false,
//   reset,

//   ...props
// }: SelectProps) => {
//   // const [countries, setCountries] = useState(null);
//   const [inputValue, setInputValue] = useState("");
//   const [selected, setSelected] = useState<any>({
//     labelKey,
//     valueKey,
//   });
//   const [open, setOpen] = useState(false);
//   useEffect(() => {
//     const handleOutsideClick = (event: any) => {
//       if (open && !event.target.closest(".option-menu")) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, [open, setOpen]);

//   const classes = ["w-[203%]", "w-[300%]"];
//   const [selectedOption, setSelectedOption] = useState<Options[]>(
//     checkboxSelected ? checkboxSelected : []
//   );
//   useEffect(() => {
//     if (checkboxSelected) {
//       console.log("checkboxSelected", checkboxSelected);
//       setSelectedOption(checkboxSelected);
//     }
//   }, [checkboxSelected]);
//   const handleSelectOption = (option: Options, type?: any) => {
//     if (handleSelect) {
//       // @ts-ignore
//       const selectOption = handleSelect();
//       if (optionType != "checkbox") {
//         console.log("selectOption", option);
//         // @ts-ignore
//         selectOption(option);
//       } else {
//         const item = selectedOption.filter(
//           (item) => item[valueKey] == option[valueKey]
//         );
//         console.log("selectedOption", option);
//         console.log("item", item);
//         if (item.length > 0) {
//           // @ts-ignore
//           selectOption(option, "remove", ref_key);
//         } else {
//           if (disabled == false) {
//             // @ts-ignore
//             selectOption(option, "add", ref_key);
//           }
//         }
//       }
//       // @ts-ignore
//     }
//     setSelected({
//       ...option,
//       label: option[labelKey],
//       value: option[valueKey],
//     });

//     // Reset the selection if required
//     if (reset) {
//       setSelected({});
//     }

//     // Close the dropdown and clear input for non-checkbox options
//     if (optionType !== "checkbox") {
//       setOpen(false);
//       setInputValue("");
//     }
//   };

//   useEffect(() => {
//     if (selectedItem) {
//       setSelected({
//         ...selectedItem,
//         label: selectedItem[labelKey],
//         // @ts-ignore
//         value: selectedItem[valueKey],
//       });
//     }
//   }, [selectedItem, labelKey, valueKey]);

//   return (
//     <>
//       {label && (
//         <SmallHeading
//           onClick={() => setOpen(!open)}
//           className="!mb-2.5 flex items-center gap-2.5 "
//           color={dark ? "white" : "neutralDark"}
//         >
//           <span>{label}</span>
//           {toolTipText && <EnglishSpeakingToolTip />}
//         </SmallHeading>
//       )}
//       <div className={cn("relative flex-auto font-medium", open && "z-[999]")}>
//         <div
//           data-ref={refName}
//           onClick={() => setOpen(!open)}
//           className={cn(
//             open && "!border-primary",
//             dark
//               ? "text-white !bg-neutralDark border-neutralDark"
//               : "bg-productLicensing-50 border-border  text-neutralDark",
//             "select-wrapper  h-[40px] rounded-sm  border text-body_3 font-normal bg-white w-full px-2.5 py-2 flex items-center justify-between",
//             className,

//             selected &&
//               selected[valueKey] &&
//               selected[valueKey].length > 0 &&
//               dark &&
//               "bg-neutralDark text-white border-primary",
//             selected &&
//               selectedField &&
//               selected[valueKey] &&
//               selected[valueKey].length > 0 &&
//               !dark &&
//               " border-primary bg-productLicensing-50"
//           )}
//         >
//           {selected && selected[valueKey] && selected[valueKey].length > 0 ? (
//             selected[labelKey].length > 25 ? (
//               selected[labelKey].substring(0, 25) + "..."
//             ) : (
//               <span className="text-body_3">
//                 {optionType != "checkbox" ? selected[labelKey] : placeholder}
//               </span>
//             )
//           ) : (
//             <Text
//               className={cn(
//                 dark ? "!text-white" : "!text-neutralDark",
//                 placeholderClass,
//                 "text-body_3"
//               )}
//             >
//               {placeholder}
//             </Text>
//           )}
//           <Icon
//             className={`!text-body_3 ${
//               dark ? "text-white" : "text-neutralDark"
//             } ${open ? "transform rotate-180" : ""} transition duration-200`}
//             name="keyboard_arrow_down"
//           />
//         </div>
//         {error && (
//           <span className="text-sm  top-10 font-roboto font-light text-danger-600 w-full mt-2.5 leading-[21px]">
//             {errorMsg}
//           </span>
//         )}
//         <ul
//           style={{
//             width: `${col}00%`,
//           }}
//           className={`option-menu z-[999] w-[300%]  ${
//             col && col > 1 && "w-[" + col + "03%]"
//           } grid grid-cols-${col} absolute left-0   top-[40px] z-10 w-full bg-white overflow-y-auto shadow-[0_2px_4px_0px_rgba(0,0,0,0.2)]  ${
//             open ? "max-h-60" : "max-h-0"
//           }`}
//         >
//           {search && (
//             <div className="flex h-[40px] items-center px-2 sticky top-0 bg-white">
//               <Icon className="text-body_3" name="search" />
//               <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value.toLowerCase())}
//                 placeholder="Search"
//                 className="text-neutralDark !text-body_3 font-normal placeholder:text-placeholder p-2 outline-none"
//               />
//             </div>
//           )}
//           {options?.map((option: Options) => (
//             <li
//               key={option[valueKey]}
//               className={`${
//                 dark
//                   ? "text-white hover:bg-neutral bg-neutralDark"
//                   : "bg-white hover:bg-[#F7F7F7] text-neutralDark"
//               }  text-body_3 font-normal  w-full px-2.5 py-2 p-2
//             ${
//               selected &&
//               selected[valueKey] &&
//               option[valueKey].toLowerCase() ===
//                 selected[valueKey].toLowerCase() &&
//               " bg-[#F7F7F7]"
//             }
//             ${
//               (option[labelKey] &&
//                 option[labelKey].toLowerCase().startsWith(inputValue)) ||
//               option[labelKey]?.toLowerCase().startsWith(inputValue)
//                 ? "block"
//                 : "hidden"
//             }`}
//               onClick={() => {
//                 console.log(option[valueKey], selected[valueKey]);
//                 if (
//                   option[valueKey].toLowerCase() !==
//                     (selected[valueKey] && selected[valueKey].toLowerCase()) &&
//                   optionType != "checkbox"
//                 ) {
//                   handleSelectOption(option);
//                 } else {
//                   // handleSelectOption(option, "checkbox");
//                 }
//               }}
//             >
//               <div className="flex items-center gap-5">
//                 {optionType == "checkbox" ? (
//                   <CheckboxInput
//                     checked={
//                       selectedOption &&
//                       selectedOption.length > 0 &&
//                       selectedOption.find(
//                         (item: Options) => item[valueKey] == option[valueKey]
//                       )
//                         ? true
//                         : false
//                     }
//                     onChange={() => handleSelectOption(option, "checkbox")}
//                     checkIcon="field"
//                     type="checkbox"
//                     label={option[labelKey]}
//                     id={option[valueKey]}
//                   />
//                 ) : (
//                   <span>{option[labelKey]}</span>
//                 )}

//                 {option?.tag && (
//                   <Text
//                     className="py-1 px-4 bg-[#EBECFE] rounded-full"
//                     size="body_5"
//                     tag="span"
//                     weight="regular"
//                     color="primary"
//                   >
//                     {option?.tag}
//                   </Text>
//                 )}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export { SelectTest };

import React from "react";

const SelectTest = () => {
  return <div>SelectTest</div>;
};

export default SelectTest;
