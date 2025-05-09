import StyleButton from "./StyleButton";

export default function WhyChooseUs() {
  return (
    <section id="ChooseUs" className="relative py-16 text-center flex flex-col gap-10 justify-center px-2 ">
      <div className="absolute top-40 left-1/2 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl"></div>
         <div className="flex gap-1 items-center group justify-center ">
            <div className="flex flex-col max-w-2xl text-sm mx-auto ">
              <div className="flex items-center flex-col justify-center">
                <StyleButton title="Trusted by Sellers" svgTextColor="sky" svgFullColor="fill-sky-400" bgColor={"bg-sky-700/20"} bgBorderColor={"border-sky-500/20"} />
                <h1 className="font-light text-2xl md:text-5xl">Why Choose SoftSell</h1>
                <div className="flex items-center justify-center">
            </div>
              </div>
              <p className="pt-7 text-base font-light text-slate-500 ">At SoftSell, we combine trust, transparency, and speed to give you the best experience when selling your unused software licenses.</p>
            </div>
          </div>
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 ">
             <div className="group p-7 border text-left flex flex-col gap-3  dark:border-white/15 dark:hover:border-white/25 hover:border-black/15 dark:bg-white/3 bg-black/7 backdrop-blur-sm transition duration-300 rounded-xl">
                <div className="pb-1 bg-slate-700 h-11 w-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition duration-300  ">
                <svg  className="lucide lucide-credit-card-icon lucide-credit-card text-indigo-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg></div>
                <h3 className="text-3xl font-medium mt-2 ">Fast & Secure Payments</h3>
                <p className="text-base text-black/60 dark:text-slate-300/50">Receive your money within 1–2 business days securely.</p>
              </div>
          
              <div className="group p-7 border text-left flex flex-col gap-3 dark:border-white/15 dark:hover:border-white/25 hover:border-black/15 dark:bg-white/3 bg-black/7 backdrop-blur-sm transition duration-300 rounded-xl">
                <div className="pb-1 bg-slate-700 h-11 w-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition duration-300  ">
                <svg className="lucide lucide-book-open-check-icon lucide-book-open-check text-pink-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21V7"/><path d="m16 12 2 2 4-4"/><path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"/></svg></div>
                <h3 className="text-3xl font-medium mt-2 ">Trusted by Professionals</h3>
                <p className="text-base text-black/60 dark:text-slate-300/50">Used by freelancers and companies alike.</p>
              </div>

              <div className="group p-7 border text-left flex flex-col gap-3  dark:border-white/15 dark:hover:border-white/25 hover:border-black/15 dark:bg-white/3 bg-black/7 backdrop-blur-sm transition duration-300 rounded-xl">
                <div className="pb-1 bg-slate-700 h-11 w-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition duration-300  ">
                <svg className="lucide lucide-shield-check-icon lucide-shield-check text-pink-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg></div>
                <h3 className="text-3xl font-medium mt-2 ">No Hidden Fees</h3>
                <p className="text-base text-black/60 dark:text-slate-300/50">What you see is what you get — no surprises.</p>
              </div>

              <div className="group p-7 border text-left flex flex-col gap-3  dark:border-white/15 dark:hover:border-white/25 hover:border-black/15 dark:bg-white/3 bg-black/7 backdrop-blur-sm transition duration-300 rounded-xl">
                <div className="pb-1 bg-slate-700 h-11 w-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition duration-300  ">
                <svg className="lucide lucide-book-check-icon lucide-book-check text-indigo-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="m9 9.5 2 2 4-4"/></svg></div>
                <h3 className="text-3xl font-medium mt-2 ">Verified Evaluations</h3>
                <p className="text-base text-black/60 dark:text-slate-300/50">Our experts give you fair and accurate pricing.</p>
              </div>
         </div>
    </section>
  );
}
