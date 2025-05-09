import ButtonSecond from "./ButtonSecond"

export default function HeroSection() {
  return <div className="pt-40">
    <section className="relative max-w-5xl mx-auto max-h-screen md:pb-0 pb-9 ">
      <div className="">
      <div className="absolute -top-9 left-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>
      <div className="absolute right-0 -bottom-9 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>
     <div className="w-full pb-6 flex justify-center">
        <div className="flex py-1 px-3 bg-indigo-700/20 text-indigo-100 border border-indigo-500/50 items-center gap-1 rounded-full text-sm ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-4 h-4 text-indigo-400 fill-indigo-400"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
          <span className="dark:text-white text-black/80">Cash for Unused Software</span>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex w-full flex-col text-center justify-center text-6xl font-extrabold">
              <h1 className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                  Sell. Get Paid. Repeat.
              </h1>
              <p className="bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
                  with zero hassle.
              </p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto flex text-sm md:text-md font-light justify-cente text-black/90 dark:text-white/90 md:dark:text-wite/20 text-center pt-7">
         <p>Whether  you&rsquo;re business with extra seats or an individual with unused tools, SoftSell lets you securely resell your software licenses in minutes — no hidden fees, just fast, verified payouts.</p>
        </div>
        <div className="w-full pb-6 flex md:flex-row flex-col justify-center pt-10 items-center gap-2">
            <div className="flex py-1 px-3 w-fit border dark:border-white/10 border-black/40 dark:bg-white/3 bg-black/2 items-center gap-2 rounded-full text-sm ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide text-indigo-500 lucide-gift-icon lucide-gift w-5"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
          <span>Simple Software Resale Solutions</span>
        </div>
        <div className="flex py-1 px-3 border dark:border-white/10 border-black/40 dark:bg-white/3 bg-black/2 relative items-center gap-2 rounded-full text-sm ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-4 h-4 text-fuchsia-600 "><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
          <span>Your Software, Your Money</span>
        </div>
        <div className="flex py-1 px-3 w-fit border dark:border-white/10 border-black/40 dark:bg-white/3 bg-black/2 items-center gap-2 rounded-full text-sm col-span-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide text-indigo-500 lucide-wallet-icon w-5 lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>
          <span>Turn Licenses Into Income</span>
        </div>
        </div>
        <div className="flex flex-col justify-center md:h-64 h-24">
          <ButtonSecond >Get Up</ButtonSecond>
        </div>
  </section> 
  </div>
  }
  

