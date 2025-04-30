"use client";
import { cn } from "@/utils/classNames";
import { Text } from "../ui/Text";
import { Icon } from "../ui/Icon";

const Pagination = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  const getPageNumbers = () => {
    const pages: (number | "more_horiz")[] = [];

    if (totalPages <= 10) {
      // Show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first 5 pages, ..., last page
      pages.push(1, 2, 3, "more_horiz", totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex gap-2">
      {pages.map((item, index) => (
        <div
          key={index}
          className={cn(
            "flex cursor-pointer items-center justify-center h-10 w-10 border border-neutralDark",
            currentPage === item
              ? "bg-neutralDark !text-white"
              : "bg-transparent"
          )}
        >
          {item === "more_horiz" ? (
            <Icon className="text-[16px] text-[#ACABAC]" name="more_horiz" />
          ) : (
            <Text
              variant="small"
              className={cn(
                currentPage === item ? "text-white" : "text-neutralDark"
              )}
            >
              {item}
            </Text>
          )}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
