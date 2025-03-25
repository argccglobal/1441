import { FC } from "react";
import { Badge } from "./Badge";
import BulletText from "./BulletText";
import { Tag } from "./Tag";

interface InformationCardProps {
  title: string;
  pointList: string[];
}
const pointListDemo = [
  "at least 8 to 20 character long no space",
  "It should have one letter, one number, and a special characters",
  "It should not contain your name phone number or e-mail address",
];
export const InformationCard: FC<InformationCardProps> = ({
  title,
  pointList = pointListDemo,
}) => {
  return (
    <div className="p-5 gap-5 flex flex-col">
      <Tag className="flex max-w-max" tag="2">
        {title}
      </Tag>
      <BulletText styleType="bullet" pointList={pointList} />
    </div>
  );
};
