import FeaturedCard from "@/components/cards/featured/featured-card";
import Heading from "@/components/Heading/heading";
import { featuredData } from "@/data";

const MainFeatured = featuredData[0];

const Featured = () => {
  return (
    <div className="pt-24 px-3 lg:px-8">
      {/* Heading */}
      <Heading number="01" title_1="Featured" title_2="Work" />

      {/* Main  Featured Card */}
      <FeaturedCard
        active
        title={MainFeatured.title}
        tag={MainFeatured.tag}
        video={MainFeatured.video}
      />
    </div>
  );
};

export default Featured;
