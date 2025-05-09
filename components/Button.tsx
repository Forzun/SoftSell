import Image from "next/image";

export default function Button({children}: {children: React.ReactNode}){ 
  
    return <button className="group md:h-11 md:w-28 h-10 w-24 md:text-md text-sm bg-gradient-to-r from-indigo-500 hover:gap-2 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition duration-700 rounded-full flex items-center justify-center">
        <span className="flex items-center gap-2">
          <span className="block">{children}</span> 
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:font-black" ><Image width={16} height={16} src="/ArrowRight.svg" alt="arrow" /></span>
        </span>
    </button>
  }
