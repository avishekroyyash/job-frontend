import Banner from "@/Component/Banner";
import FindJob from "@/Component/FindJob";
import JobFeature from "@/Component/JobFeature";
import JobPricing from "@/Component/JobPricing";
import JobRule from "@/Component/JobRule";
import LookingJob from "@/Component/LookingJob";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <FindJob></FindJob>
     <Banner></Banner>
     <JobRule></JobRule>
     <JobFeature></JobFeature>
     <JobPricing></JobPricing>
     <LookingJob></LookingJob>
    </div>
  );
}
