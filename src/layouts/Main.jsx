import { ArrowRight } from "react-feather";
import CButtonLink from "../components/ClassicButtonLink";
import Title from "../components/Title";
import Bold from "../components/Bold";
import BigText from "../components/BigText";
import Desc from "../components/Desc";
import ButtonLink from "../components/ButtonLink";
import Link from "../components/Link";

const Main = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[1200px] bg-[url('/bg.png')]">
        <div className="flex flex-col w-[50%] items-start p-8 lg:p-16 gap-y-16">
          <Title text="ZERO-LOSS BUSINESS CONTINUTY" />
          <CButtonLink
            text={
              <p className="flex flex-row items-center gap-x-4">
                Learn More
                <ArrowRight />
              </p>
            }
            href="a"
          />
        </div>
        <div className="flex flex-col w-full bg-black/90 backdrop-blur-md h-[600px] items-center p-8 lg:p-16 gap-y-4 mt-[300px] text-center">
          <Bold text="What we do?" />
          <BigText text="Turning complex network technology" />
          <BigText text="into business solutions that save you time money and stress" />
        </div>
        <div className="flex flex-col w-full text-black bg-white h-[1200px] items-center p-8 lg:p-16 gap-y-4 mt-[300px] text-center">
          <Bold text="Solutions" />
          <BigText text="Productivity solutions that capitalise on your network investment" />
          <div className="flex flex-col lg:flex-row justify-between w-full gap-12">
            <img src="/img1.png" />
            <div className="flex flex-col gap-y-8 text-left">
              <Bold text="Connectivity" />
              <Desc text="Last mile or first mile, fibre or copper, Ethernet or wireless, 20Mbs or 100Gbs - we'll always find the best-performing connectivity to fit your needs and location." />
              <ButtonLink text="Learn more" href="#" />
              <div className="text-[28px] flex flex-col gap-y-8 mt-[50px]">
                <Link text="Network Technologies" href="#" />
                <Link text="Managed Services" href="#" />
                <Link text="CLOUD CONNECTIVITY" href="#" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-[600px] items-center p-8 lg:p-16 gap-y-8 justify-center text-center">
          <Bold text="Our Network" />
          <BigText text="Designed with the latest technology for performance, fexibility and high capacity." />
          <div className="flex flex-col lg:flex-row gap-8">
            <CButtonLink href="#" text="Find Out More" />
            <ButtonLink href="#" text="Our Looking Class" />
          </div>
        </div>
        <div className="flex flex-col w-full text-black bg-white h-[1200px] items-center p-8 lg:p-16 gap-y-4 mt-[300px] text-center">
          <div className="flex flex-col lg:flex-row justify-between w-full gap-12">
            <img src="/img2.png" />
            <div className="flex flex-col gap-y-8 text-left">
              <Bold text="About Us" />
              <BigText text="Navigating the technology and communication provider marketplace shouldn’t be a complex and daunting process." />
              <ButtonLink text="About OPTINET" href="#" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-[600px] items-center p-8 lg:p-16 gap-y-8 justify-center text-center">
          <Bold text="Why Optinet" />
          <BigText text="Put your network in safe hands" />
          <Desc text="Our loyal customers trust us to manage some of their most business-critical systems." />
          <div className="flex flex-col lg:flex-row gap-8">
            <CButtonLink href="#" text="Learn More" />
            <CButtonLink
              href="https://github.com/kad1rr/optinet-website"
              text="View on Github"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
