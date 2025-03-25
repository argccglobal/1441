// "use client";
// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { Body, CardTitle, Text } from "./Text";
// import { Icon } from "./Icon";
// import { cn } from "@/lib/utils";

// interface AccordionProps {
//   title: string;
//   content: string;
//   className?: string;
//   key: string;
// }

// export const Accordion: React.FC<AccordionProps> = ({
//   title,
//   content,
//   className,
//   key,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };
//   const contentRef = useRef(null);
//   const [contentHeight, setContentHeight] = useState("0px");
//   useEffect(() => {
//     console.log(contentRef);
//     // Calculate the actual content height and update the state
//     // setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
//   }, [isOpen]);

//   return (
//     <div className={cn("py-[15px] overflow-hidden", className)}>
//       <div
//         className="cursor-pointer flex items-center justify-between"
//         onClick={toggleAccordion}
//       >
//         <CardTitle nospace CardType="large">
//           {title}
//         </CardTitle>
//         {isOpen ? (
//           <Icon className=" text-neutralDark" name="remove" />
//         ) : (
//           <Icon className=" text-neutralDark" name="add" />
//         )}
//       </div>
//       <div
//         // style={{ maxHeight: contentHeight, minHeight: "0px" }}
//         className={`overflow-hidden duration-500 ease-in-out transition-height flex flex-col gap-6 items-center${
//           isOpen ? ` h-auto pt-[20px]` : " h-0 p-0"
//         }`}
//       >
//         <div
//           className="flex w-full items-start flex-col gap-6"
//           ref={contentRef}
//         >
//           {content.split("<br/>").map((item, index) => (
//             <Body nospace key={index} color="neutralDark">
//               {item}
//             </Body>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// interface AccordionWithMediaProps {
//   title: string;
//   key: string;
//   children?: React.ReactNode;
//   className?: string;
// }

// export const AccordionWithMedia: React.FC<AccordionWithMediaProps> = ({
//   title,
//   key,
//   children,
//   className,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };
//   const contentRef = useRef(null);
//   const [contentHeight, setContentHeight] = useState("0px");
//   useEffect(() => {
//     console.log(contentRef);
//   }, [isOpen]);

//   return (
//     <div
//       className={cn("py-5 border-b border-border overflow-hidden", className)}
//     >
//       <div
//         className="cursor-pointer flex items-center justify-between"
//         onClick={toggleAccordion}
//       >
//         <CardTitle className="!m-0" CardType="large">
//           {title}
//         </CardTitle>
//         {isOpen ? (
//           <Icon className=" text-neutralDark" name="remove" />
//         ) : (
//           <Icon className=" text-neutralDark" name="add" />
//         )}
//       </div>
//       <div
//         // style={{ maxHeight: contentHeight, minHeight: "0px" }}
//         className={`overflow-hidden duration-500 ease-in-out transition-height flex flex-col items-center${
//           isOpen ? ` h-auto pt-[20px]` : " h-0 p-0"
//         }`}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };
