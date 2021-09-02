function HeaderItem({ Icon, title }) {
    return (
        <div className="flex flex-col items-center 
        cursor-pointer w-12 sm:w-20 
        hover:text-white
        transition
        duration-100
        active:text-red-500 group" >
            <Icon className="h-8 mt-2 sm:mt-6 sm:mb-1  group-hover:animate-bounce "/>
            <p className=" opacity-0 group-hover:opacity-100 
            tracking-widest ">{title}</p>
        </div>
    )
}

export default HeaderItem
