import { AlignRight } from "react-feather";
import ButtonLink from "../components/ButtonLink";
import Link from "../components/Link";

const Header = () => {
  return (
    <header className="flex flex-row w-full h-24 py-4 items-center px-4 md:px-8 lg:px-12 z-[999] bg-black justify-between">
      <a href="/">
        <img src="/logo.png" alt="OptiNet" />
      </a>
      <AlignRight
        onClick={() => {
          const menu = document.querySelector(".menu");
          menu.classList.toggle("hidden");
          menu.classList.toggle("flex");
          document.body.classList.toggle("overflow-hidden");
        }}
        className="flex lg:hidden"
      />
      <div className="menu hidden flex-col gap-y-8 items-center fixed top-16 left-0 w-full h-full p-8 lg:flex lg:flex-row lg:relative lg:top-0 lg:right-0 lg:justify-between bg-black">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <Link href="#" text="Solutions" />
          <Link href="#" text="Zero-loss Failover" />
          <Link href="#" text="Multi-tenant" />
          <Link href="#" text="Enterprise NNI" />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <Link href="#" text="Learn" />
          <Link href="#" text="Support" />
          <ButtonLink href="#" text="Make an enquiry" />
        </div>
      </div>
    </header>
  );
};

export default Header;
