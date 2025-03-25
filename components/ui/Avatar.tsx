import Image from "next/image";
import { Icon } from "./Icon";

export const Avatar = ({ image }: { image: string }) => {
  return (
    <div className="relative h-[152px] w-[152px]">
      <div className="h-[152px] relative overflow-hidden flex items-center justify-between  w-[152px] rounded-full">
        <Image
          alt="avatar"
          className="absolute -z-0 top-0  left-0 w-full h-full"
          objectFit="cover"
          objectPosition="center"
          layout="fill"
          src={image}
        />
      </div>

      <Icon
        className="absolute cursor-pointer text-base flex items-center justify-center right-[17px] bottom-[17px] h-[24px] w-[25px] z-40 rounded-full text-white bg-primary"
        name="add"
      />
    </div>
  );
};
