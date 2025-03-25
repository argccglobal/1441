import { FC } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

interface inputLabelBtnProps {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  error?: boolean;
  errorMsg?: string;
}
export const InputLabelBtn: FC<inputLabelBtnProps> = ({
  id,
  type,
  placeholder,
  label,
  error,
  errorMsg,
}) => {
  return (
    <div className="flex gap-2.5 items-start">
      <Input
        error={error}
        errorMsg={errorMsg}
        id="search"
        type="text"
        className="px-5"
        placeholder="Text"
      />
      <Button size="small" primary outline label="Apply" />
    </div>
  );
};
