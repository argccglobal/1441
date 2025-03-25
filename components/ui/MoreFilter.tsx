import { FC, useEffect, useState } from "react";
import { Badge } from "./Badge";
import { Input } from "./Input";
import { CardTitle } from "./Text";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { getPublicIndustries } from "@/lib/publicGetApi";
import { SearchSelect } from "./SearchSelect";
import UseResource from "@/hooks/use-resource";

interface MoreFilterProps {
  title?: string;
  resetFilter?: () => void;
}

export const MoreFilter: FC<MoreFilterProps> = ({
  resetFilter,
  title = "Project Type",
}) => {
  const toggleMoreFilter = () => {
    setFilterOption(!filterOption);
  };
  let InitialKeyword = [
    "Graphic Design",
    "Architecture & Industrial Design",
    "Accounting Investment Economics & Finance",
    "Manufacturing & Industrial",
    "Advertising Technologies (AI, IoT, Fintech, Big Data)",
    "Visual Communication, Graphic Art & Design",
  ];
  const [key, setKey] = useState(InitialKeyword);
  const [searchInput, setSearchInput] = useState("");
  const [filterOption, setFilterOption] = useState(false);
  const addFilterItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput.length > 1) {
      const newKeyWord = [...key, searchInput];
      setKey(newKeyWord);
      setSearchInput("");
    }
  };
  const addFilterItemM = (item: string) => {
    if (item.length > 1) {
      const newKeyWord = [...key, searchInput];
      setKey(newKeyWord);
      setSearchInput("");
    }
  };
  // const removeFIlterItem = (item: string) => {
  //   const newKeyWord = key.filter(
  //     (i) => i.toLocaleLowerCase() !== item.toLocaleLowerCase()
  //   );
  //   setKey(newKeyWord);
  // };
  const [industry, setIndustry] = useState<any>([]);
  const getIndustry = async () => {
    const result = await getPublicIndustries();
    setIndustry(result);
  };
  const [selectedIndustry, setSelectedIndustry] = useState<any[]>([]);
  const selectIndustry = (value: any) => {
    if (selectedIndustry?.length > 0) {
      setSelectedIndustry([...selectedIndustry, value]);
    } else {
      setSelectedIndustry([value]);
    }
    const newIndustry = industry.filter((item: any) => item._id !== value._id);
    setIndustry(newIndustry);
  };
  const removeFIlterItem = (item: any) => {
    console.log("item", item);
    const newIndustry = selectedIndustry.filter((i: any) => i._id !== item._id);
    console.log("new", newIndustry);
    setSelectedIndustry(newIndustry);
    console.log("industry", selectedIndustry);
    setIndustry([...industry, item]);
  };
  const getArrayToStr = (arr: any, key: any) => {
    let str = "";
    arr?.map((item: any, index: number) => {
      if (index === 0) {
        str = `&${str}${key}=${item._id}`;
      } else {
        str = `${str}&${key}=${item._id}`;
      }
    });
    return str;
  };
  const setMoreFilterQry = UseResource((state) => state.setMoreFilterQry);
  const query = UseResource((state) => state.query);
  const getResources = UseResource((state) => state.getResources);
  const applyFilter = () => {
    let queryStr = "";

    if (selectedIndustry?.length > 0) {
      const qryStr = getArrayToStr(selectedIndustry, "ref_industry");
      queryStr = `${queryStr}${qryStr}`;
    }
    setMoreFilterQry(queryStr);
    if (query && query.length > 0) {
      getResources(query + "&" + queryStr);
    } else {
      getResources(queryStr);
    }
  };

  const resetFilterItem = () => {
    setSelectedIndustry([]);
    resetFilter && resetFilter();
    // setRangeValue(1000);
    // setEnabled(false);
  };
  useEffect(() => {
    getIndustry();
  }, []);
  return (
    <div className="relative">
      <div
        onClick={() => toggleMoreFilter()}
        className={cn(
          filterOption ? "z-[2000] top-0 left-0 w-screen h-screen" : "",
          "fixed bg-black opacity-50"
        )}
      ></div>
      <div className="option-menu relative flex-1 font-medium">
        <div className="text-neutralDark border-border border text-body_2 font-normal bg-white w-full px-2.5 py-2 flex items-center justify-between false">
          <p
            className={cn(
              filterOption && "!text-primary",
              "text-sm font-roboto font-normal text-neutralDark"
            )}
          >
            More Filter Industry
          </p>
          <span
            onClick={toggleMoreFilter}
            className={cn(
              "cursor-pointer text-[17px] text-neutralDark material-icons material-symbols-outlined leading-none transition duration-200",
              filterOption && "text-primary"
            )}
          >
            tune
          </span>
        </div>
      </div>
      {filterOption && (
        <div className="absolute transform  md:translate-x-0 z-[99999] bottom-0 border-border border right-0 bg-white  translate-y-full min-w-[340px] max-w-[368px] px-5 py-2.5">
          <CardTitle nospace className="mb-2.5" CardType="small">
            {title}
          </CardTitle>
          <Badge
            label="Add Industry"
            onClick={() => addFilterItemM(searchInput)}
            primary
            iconPosition="left"
            className="bg-transparent mb-2.5 hover:shadow-none shadow-none p-0 hover:bg-transparent hover:border-transparent"
            icon="add"
            type="text"
          />
          <div className="mb-4">
            <div className="relative w-full">
              <SearchSelect
                placeholder="Type here"
                valueKey="_id"
                labelKey="industry_name"
                className=" bg-white"
                handleSelect={() => selectIndustry} // Pass the handler function
                options={industry}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-2.5">
            {selectedIndustry &&
              selectedIndustry.length > 0 &&
              selectedIndustry.map((item, index) => (
                <Badge
                  key={index}
                  label={item.industry_name}
                  onClick={() => {}}
                  primary
                  iconPosition="right"
                  className="text-body_3"
                  icon="close"
                  type="text"
                  iconAction={() => removeFIlterItem(item)}
                />
              ))}
          </div>
          <div className="pr-5 pt-5 pb-5  flex items-center justify-between">
            <Button
              onClick={() => resetFilterItem()}
              className="cursor-pointer"
              type="text"
              label="Reset"
            />
            <div
              onClick={() => applyFilter()}
              className="flex min-w-max items-center gap-2.5 leading-none font-normal text-primary !text-body_2 hover:text-productLicensing-500"
            >
              Apply FIlter
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
