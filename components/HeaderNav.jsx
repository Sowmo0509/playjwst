import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeaderNav = () => {
  return (
    <div className="header-logo-row flex justify-between justify-items-center">
      <div className="w-28 md:w-36 flex items-center hover:animate-pulse cursor-pointer">
        <Link href={"/"}>
          <Image src={"/images/logo.png"} height={279} width={1024} alt="logo" />
        </Link>
      </div>
      <a target={"_blank"} rel="noopener noreferrer" href="https://blogs.nasa.gov/webb/">
        <div className="md:hidden hover:animate-pulse cursor-pointer">
          <Image src={"/images/nasa-logo.png"} height={36} width={36} alt="nasa-logo" />
        </div>
      </a>
      <a target={"_blank"} rel="noopener noreferrer" href="https://blogs.nasa.gov/webb/">
        <div className="hidden md:block hover:animate-pulse cursor-pointer">
          <Image src={"/images/nasa-logo.png"} height={56} width={56} alt="nasa-logo" />
        </div>
      </a>
    </div>
  );
};

export default HeaderNav;
