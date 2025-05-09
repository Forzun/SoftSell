import StyleButton from "./StyleButton";


export default function HowItWorks() {
  return (
    <section className="relative py-16 mt-16 md:mt-0 text-center h-screen flex flex-col justify-center px-2 ">
      <div>
      <div className="absolute right-6 bottom-9 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl transition "></div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex items-center group justify-center ">
            <div className="flex flex-col max-w-2xl text-sm mx-auto ">
              <div className="flex items-center justify-center flex-col">
              <StyleButton title="Simple Steps to Sell" svg={"fill-pink-400"} svgTextColor="violet" svgFullColor="fill-violet-400" bgColor={"bg-violet-700/20"} bgBorderColor={"border-violet-500/20"} />
                <h1 className="font-light text-2xl md:text-5xl">How It Works</h1>
                <div className="flex items-center justify-center">
            </div>
              </div>
              <p className="pt-3 text-base font-light text-slate-500 ">We make it effortless to turn your unused software licenses into money — just follow these three simple steps.</p>
            </div>
          </div>
          <div className="w-full h-fit max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

             <div className="group p-7 border text-left flex flex-col gap-3 dark:border-white/15 dark:hover:border-white/25 hover:border-black/15 dark:bg-white/3 bg-black/7 backdrop-blur-sm transition duration-300 rounded-xl">
                <div className="pb-1 bg-slate-700 h-11 w-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition duration-300  ">
                  <svg  className="lucide text-pink-400 lucide-hard-drive-upload-icon lucide-hard-drive-upload" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m16 6-4-4-4 4"/><path d="M12 2v8"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 18h.01"/><path d="M10 18h.01"/></svg></div>
                <h3 className="text-3xl font-medium mt-2 ">Upload License</h3>
                <p className="text-base text-black/60 dark:text-slate-300/50">Submit your unused software license to start the process.</p>
              </div>

              <div className="group p-7 border text-left flex flex-col gap-3 dark:border-white/15 dark:hover:border-white/25 hover:border-black/15 dark:bg-white/3 bg-black/7 backdrop-blur-sm transition duration-300 rounded-xl">
                <div className="pb-1 bg-slate-700 h-11 w-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition duration-300  ">
                <svg  className="lucide lucide-dollar-sign-icon lucide-dollar-sign text-indigo-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <h3 className="text-3xl font-medium mt-2 ">Get Valuation</h3>
                <p className="text-base text-black/60 dark:text-slate-300/50">We assess your license and provide a fair offer.</p>
              </div>

              <div className="group p-7 border text-left flex flex-col gap-3 dark:border-white/15 dark:hover:border-white/25 hover:border-black/15 dark:bg-white/3 bg-black/7 backdrop-blur-sm transition duration-300 rounded-xl">
                <div className="pb-1 bg-slate-700 h-11 w-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition duration-300  ">
                <svg  className="lucide lucide-dollar-sign-icon lucide-dollar-sign text-indigo-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <h3 className="text-3xl font-medium mt-2 ">Get Paid</h3>
                <p className="text-base text-black/60 dark:text-slate-300/50">Accept the offer and receive fast, secure payment.</p>
              </div>
          </div>
      </div>
    </section>
  );
}
