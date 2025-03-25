import React, { FC } from "react";
import { Select } from "./Select";
import { Input } from "./Input";
import { Button } from "./Button";

interface FileUpload {
  id: string;
  type: "reset" | "upload";
  placeholder?: string;
  error: boolean;
  errorMsg?: string;
  handleSelectFile?: () => void;
}
const FileUpload: FC<FileUpload> = ({
  id,
  placeholder,
  type,
  error,
  errorMsg,
  handleSelectFile,
  ...props
}) => {
  const options = [
    {
      value: "India",
      label: "+91",
    },
  ];
  const [fileName, setFileName] = React.useState("");
  const handleFileChange = (e: any) => {
    if (e.target.files[0]) {
      if (handleSelectFile) {
        const selectFile = handleSelectFile();
        console.log(selectFile);
        console.log(e.target.files[0]);
        // @ts-ignore
        selectFile(e.target.files[0]);
      }
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <>
      {type == "reset" ? (
        <div className="flex items-center gap-2.5">
          <input
            onChange={handleFileChange}
            type="file"
            id="file"
            accept=".pdf,.jpg,.jpeg,.png,.webp.doc,.docx"
            name="file"
            className={[
              "border min-w-[126px] leading-none outline-none px-2.5 py-2 text-neutralDark focus:border-primary placeholder:text-placeholder text-body_2 placeholder:text-body_2",
              error
                ? "border-danger-600 !text-danger-600"
                : "text-neutralDark border-border",
            ].join(" ")}
          />
          <div className=" ">
            <label
              className={[
                "border w-[131px] flex items-center h-[40px] leading-[14px] outline-none px-2.5 py-2 text-neutralDark focus:border-primary placeholder:text-placeholder text-body_3 placeholder:text-body_3",
                error
                  ? "border-danger-600 !text-danger-600"
                  : "text-neutralDark border-border",
              ].join(" ")}
              htmlFor="file"
            >
              Chose a File
            </label>
          </div>
          <div className="">
            <label
              className={[
                "border w-[223px] flex items-center h-[40px] leading-[14px] outline-none px-2.5 py-2 text-neutralDark focus:border-primary placeholder:text-placeholder text-body_3 placeholder:text-body_3",
                error
                  ? "border-danger-600 !text-danger-600"
                  : "text-neutralDark border-border",
              ].join(" ")}
            >
              {fileName && fileName.length > 20
                ? fileName.slice(0, 20) + "..."
                : fileName}
              {!fileName && "No file chosen"}
            </label>
          </div>
          <Button
            className="bg-border text-neutralDark hover:border-border hover:bg-border hover:text-neutralDark border-border"
            size="small"
            label="Reset"
          />
        </div>
      ) : (
        <div className="">
          <div className="flex items-center ">
            <input
              onChange={handleFileChange}
              type="file"
              id="file"
              // Only .pdf, .jpg, .jpeg, .png and .webp formats are supported.
              accept=".pdf,.jpg,.jpeg,.png,.webp.doc,.docx"
              className={[
                "border min-w-[126px] leading-none outline-none px-2.5 py-2 text-neutralDark focus:border-primary placeholder:text-placeholder text-body_2 placeholder:text-body_2",
                error
                  ? "border-danger-600 !text-danger-600"
                  : "text-neutralDark border-border",
              ].join(" ")}
            />
            <div className="flex-1">
              <label
                className={[
                  "border w-full flex items-center h-[40px] leading-[14px] outline-none px-2.5 py-2 text-neutralDark focus:border-primary placeholder:text-placeholder text-body_3 placeholder:text-body_3",
                  error
                    ? "border-danger-600 !text-danger-600"
                    : "text-neutralDark border-border",
                ].join(" ")}
                htmlFor="file"
              >
                {fileName && fileName.length > 20
                  ? fileName.slice(0, 20) + "..."
                  : fileName}
                {!fileName && "No file chosen"}
              </label>
            </div>
            <label
              htmlFor="file"
              className="border rounded-sm flex items-center gap-2.5 leading-none px-[30px] transition duration-300 font-normal py-[12px] bg-border hover:border-border text-neutralDark hover:bg-border hover:text-neutralDark border-border"
            >
              Upload
            </label>
          </div>
          {error && errorMsg && (
            <span className="text-sm font-roboto font-light text-danger-600 w-full mt-2.5 leading-[21px]">
              {errorMsg}
            </span>
          )}
        </div>
      )}
    </>
  );
};

export { FileUpload };
