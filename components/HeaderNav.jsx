import Image from "next/image";
import React from "react";

const HeaderNav = () => {
  return (
    <div className="header-logo-row flex justify-between justify-items-center">
      <div className="w-36 flex items-center">
        <Image src={"/images/logo.png"} height={279} width={1024} alt="logo" />
      </div>
      <div className="">
        <Image src={"/images/nasa-logo.png"} height={56} width={56} alt="nasa-logo" />
      </div>
    </div>
  );
};

export default HeaderNav;
