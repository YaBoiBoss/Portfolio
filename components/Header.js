import Image from "next/image";
import HeaderItem from "./HeaderItem";

import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";

function Header() {
    return (
        <header className= "flex flex-col sm:flex-row justify-between items-center mb-5 shadow-2xl" >
            <div className="flex flex-grow justify-evenly max-w-2xl mx-5  h-auto">
                <HeaderItem title='Home' Icon={HomeIcon} />
                <HeaderItem title='Trending' Icon={LightningBoltIcon} />
                <HeaderItem title='Best' Icon={BadgeCheckIcon} />
                <HeaderItem title='Collections' Icon={CollectionIcon} />
                <HeaderItem title='Search' Icon={SearchIcon} />                
                <HeaderItem title='Saved' Icon={UserIcon} />                
            </div>
            <div className="mb-2 sm:mb-0">
                <Image 
                className = "object-contain "
                src ="https://i.ibb.co/dPRj9v8/BOS5.png" width={150} height={30} />
            </div>
            
        </header>
    )
}

export default Header
