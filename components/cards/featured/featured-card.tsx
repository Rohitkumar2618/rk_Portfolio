import { FC, ReactNode } from "react";
import Header from "./header";

interface featuredCardProps {
  logo?: ReactNode;
  title: string;
  tag: string;
  video: string;
  active: boolean;
}

const FeaturedCard: FC<featuredCardProps> = ({
  logo,
  title,
  tag,
  video,
  active,
}) => {
  return (
    <div className="link w-full h-full bg-secondary-background  border-border shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2 ">
      {/* Header */}
      <Header title={title} tag={tag} />
    </div>
  );
};

export default FeaturedCard;
