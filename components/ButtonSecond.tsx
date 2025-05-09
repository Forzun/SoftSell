import Image from "next/image";

export default function  ButtonSecond({children} : { children: React.ReactNode}){ 
  
    return <div className="pb-6 flex group justify-center pt-12">
          <button className="py-3 px-16 rounded-lg md:font-medium font-bold bg-gradient-to-r from-indigo-500 flex items-center gap-2 hover:gap-2 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition duration-700 ">{children}
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:font-black" ><Image width={16} height={16} src="/ArrowRight.svg" alt="arrow" /></span>
          </button>
    </div>
}

