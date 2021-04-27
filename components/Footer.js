import HeaderItem from "../components/HeaderItem";
import Link from "next/link";

import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Footer() {
  return (
    <footer className="bg-[#194350]  footer-1  w-full bottom-0 mt-10 items-center justify-center grid lg:grid-col-3 ">
      {/** Logo */}
      <div className="flex flex-grow justify-between max-w-2xl mt-3 mb-2">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <div className="grid items-center justify-between grid-col-3">
          <div className="flex flex-row space-x-10 justify-between"> 
          <Link href="/">Help</Link>
          <Link href="/">Site Index</Link>
          <Link href="/">IMDBPro</Link>
          </div>
          <div className="flex flex-row space-x-10 justify-between">
          <Link href="/">Box Office Mojo</Link>
          <Link href="/">IMDB Developer</Link>
          <Link href="/">Press Room</Link>
          </div>
          <div className="flex flex-row space-x-10 justify-between mb-2">
          <Link href="/">Advertising</Link>
          <Link href="/">Jobs</Link>
          <Link href="/">Conditions of Use</Link>
          <Link href="/">Privacy Policy</Link>
          </div>
         
      </div>
    </footer>
  );
}

export default Footer;
