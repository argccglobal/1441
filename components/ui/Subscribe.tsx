import { z } from "zod";
import { Button } from "./Button";
import { Input } from "./Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { commonError } from "@/utils/Error";
// import { newsLatter } from "@/lib/publicPostApi";
// import toast from "react-hot-toast";

interface SubscribeProps {
  id: string;
  ref?: any;
  props?: any;
  className?: string;
  placeholder: string;
}

const schema = z.object({
  email: z.string().email({ message: "Invalid email" }),
});

export const Subscribe: React.FC<SubscribeProps> = ({
  id,
  ref,
  placeholder,
  props,
  className,
}) => {
  type Schema = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });
  const [btnLoader, setBtnLoader] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handleNewsLatter = async (data: any) => {
    setError("");
    setBtnLoader(true);
    setSuccessMessage("");

    const body = {
      email_address: data.email,
      subscription_for: "newsletter",
    };

    // const result = await newsLatter(body);
    const result: any = {};
    if (result.success) {
      if (result?.data?.message == "Already Subscribed") {
        setError("Already Subscribed");
        return;
      }
      setSuccessMessage("Subscribed successfully for newsletter");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      // console.log(result);
    } else {
      setError(result?.error?.message || commonError);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
    setValue("email", "", {
      shouldValidate: false,
      shouldDirty: false,
    });
    setBtnLoader(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(handleNewsLatter)}
        className="flex w-full sm:w-auto rounded-sm overflow-hidden ite ms-center "
      >
        <input
          id={id}
          // ref={ref}
          {...props}
          {...register("email", {
            required: "Email is required",
          })}
          onChange={(e) => {
            setSuccessMessage("");
            setError("");
            setValue("email", e.target.value);
          }}
          type={"text"}
          placeholder={placeholder}
          className={[
            "border-[1.5px] h-[40px] flex-1 sm:flex-initial text-white placeholder:text-placeholder outline-none px-2.5 py-2  bg-transparent focus:border-[#13BFC7] border-[#13BFC7] text-body_2 placeholder:text-body_2",
            className,
          ].join(" ")}
        />

        <Button
          // isLoading={btnLoader}
          btnType="submit"
          className="rounded-none border-none text-body_1 hover:bg-[#13BFC7]  bg-[#13BFC7]"
          type="button"
          size="small"
          label="Subscribe"
        />
      </form>
      {successMessage && (
        <span className="text-green-500 text-sm">{successMessage}</span>
      )}
      {errors.email && (
        <span className="text-red-500 text-sm">
          Please enter your valid email
        </span>
      )}
      {error && !errors.email && (
        <span className="text-red-500 text-sm">{error}</span>
      )}
    </>
  );
};
