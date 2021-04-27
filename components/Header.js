import Image from "next/image";
import HeaderItem from "../components/HeaderItem";
import {useRouter} from "next/router";
import {HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon} from "@heroicons/react/outline";


function Header() {
  const router = useRouter();
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl mt-3">
          <HeaderItem title="HOME" Icon={HomeIcon} route={'/'}  />
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} route={'/movie'} />
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} route={'/planner'}/>
          <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}/>
          <HeaderItem title="SEARCH" Icon={SearchIcon}/>
          <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
      </div>
      <Image
        className="object-contain cursor-pointer hover:animate-spin sm:w-8"
        src="/imdb_white.png"
        width={150}
        height={90}
        onClick={() => router.push('/')}
      />
    </header>
  );
}

export default Header;
