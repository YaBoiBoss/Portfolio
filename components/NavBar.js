import requests from "../utils/requests"
import {useRouter} from "next/router"
 
function NavBar() {
    const router = useRouter();

    return (
        <nav className="relative">
            <div className='flex justify-center overflow-x-scroll overflow-y-visible scrollbar-hide px-10 sm:px-20 
            text-2xl whitespace-nowrap space-x-10 
            sm:space-x-20 '>
                {Object.entries(requests).map(([key,{title,url}])=>(
                    <h2 key={key} 
                    onClick={()=>router.push(`/?genre=${key}`) }
                    className="cursor-pointer transition 
                    duration-1 transform 
                    hover:scale-125
                    hover:text-white
                    active:text-red-500"
                    >{title}</h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#07151d] h-10 w-1/12" />
            <div className="absolute top-0 left-0 bg-gradient-to-r from-[#07151d] h-10 w-1/12" />
        </nav>
    )
}

export default NavBar
