"use client"
import { useTheme } from "next-themes";
import Button from "./Button";
import { useState } from "react";
import Link from "next/link";

export default function Navbar(){ 

    return <nav id="/" className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto md:px-2 px-1 h-18 bg-green-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 bg-white=30 dark:bg-neutral-900/30">
        <div className="w-ful h-full flex justify-between ">
          <div className="flex items-center ">
          <div className="relative flex items-center justify-center">
              <svg className="w-10" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
              <linearGradient id="bxmRUi38a0JvDjIevEMXea_tEqVvcZMXpDl_gr1" x1="33.224" x2="33.224" y1="60.69" y2="3.566" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#e6abff"></stop><stop offset="1" stopColor="#6dc7ff"></stop></linearGradient><path fill="url(#bxmRUi38a0JvDjIevEMXea_tEqVvcZMXpDl_gr1)" d="M29.336,3.706c-1.241-0.6-2.34,0.857-1.433,1.897c3.103,3.559,6.683,8.685,7.369,9.713	c1.148,1.722,4.757,7.654-4.019,14.626s-13.085,8.631-12.825,14.284c0.283,6.152,14.436,13.78,14.436,13.78l4.814,2.349	c1.501,0.959,2.892-0.309,1.725-1.72c-3.072-3.713-7.157-8.237-7.927-9.825c-1.312-2.707-4.036-8.257,3.238-13.844	c7.704-5.917,14.703-10.37,13.083-16.686c-0.132-0.516-0.314-1.021-0.541-1.513c-0.139-0.302-0.294-0.6-0.465-0.893	c-0.208-0.357-0.439-0.708-0.69-1.052C42.425,9.782,34.381,6.144,29.336,3.706z"></path><linearGradient id="bxmRUi38a0JvDjIevEMXeb_tEqVvcZMXpDl_gr2" x1="33.239" x2="33.239" y1="62.523" y2="1.536" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#c822ff"></stop><stop offset="1" stopColor="#1a6dff"></stop></linearGradient><path fill="url(#bxmRUi38a0JvDjIevEMXeb_tEqVvcZMXpDl_gr2)" d="M28.899,3.536c0.119,0,0.252,0.017,0.402,0.056c6.107,1.592,20.072,6.894,21.896,13.554	c1.887,6.89-9.722,11.823-16.94,17.483c-0.081,0.063-0.158,0.12-0.238,0.181c-6.817,5.586-4.498,11.59-3.206,14.255	c0.77,1.588,4.388,6.009,7.753,9.375c1.06,1.06,0.513,2.019-0.312,2.045c-0.066,0.024-0.138,0.039-0.216,0.039	c-0.107,0-0.226-0.027-0.36-0.092c0,0-22.449-6.854-22.613-15.057c-0.097-4.835,5.786-7.349,12.974-12.326	c1.161-0.845,2.407-1.775,3.759-2.848c8.777-6.972,5.085-13.616,3.937-15.338c-0.685-1.028-4.267-5.815-7.37-9.374	c-0.696-0.798-0.477-1.767,0.222-1.905C28.678,3.553,28.782,3.536,28.899,3.536 M28.899,1.536c-0.278,0-0.55,0.036-0.81,0.108	c-0.933,0.222-1.671,0.897-1.987,1.823c-0.38,1.11-0.097,2.357,0.755,3.335c3.018,3.461,6.582,8.222,7.213,9.169	c1.606,2.41,3.286,7.259-3.517,12.663c-1.484,1.179-2.818,2.161-3.692,2.797c-1.427,0.987-2.823,1.889-4.174,2.76	c-5.432,3.506-9.722,6.276-9.623,11.222c0.085,4.273,4.172,8.317,12.493,12.363c5.326,2.59,10.551,4.26,11.418,4.53	c0.346,0.143,0.703,0.216,1.062,0.216c0.193,0,0.384-0.021,0.571-0.063c1.053-0.135,1.953-0.816,2.34-1.793	c0.475-1.199,0.113-2.56-0.969-3.642c-3.6-3.601-6.819-7.701-7.368-8.833c-1.434-2.958-2.718-7.398,2.646-11.813l0.06-0.045	l0.172-0.131c1.741-1.365,3.819-2.734,5.828-4.057c6.689-4.406,13.605-8.961,11.808-15.528C50.537,7.163,30.012,1.711,29.805,1.657	C29.498,1.577,29.193,1.536,28.899,1.536L28.899,1.536z"></path>
              </svg>
              <div className="absolute h-10 w-10 bg-indigo-500 opacity-20 rounded-xl blur-sm"></div>
            </div>
            <Link href="/">
              <h1 className="text-3xl font-bold">SoftSell</h1>
            </Link>
          </div>
          <div className="grid grid-cols-2 text-sm invisible md:visible gap-6 items-center">
              <a href="#ChooseUs"><h1 className="col-span-1 hover:text-neutral-400 transition duration-200">Choose Us</h1></a>
              <a href="#Testimonials"><p className="col-span-1 hover:text-neutral-400 transition duration-200">Testimonials</p></a>
          </div>
          <div className="flex items-center gap-2">
              <DarKMode />
              <Button >Login in</Button>
          </div>
        </div>
    </div>
    </nav>
  }


function DarKMode(){ 
  const { setTheme } = useTheme()
  const [toggle , setToggle] = useState(false);

  return <div className="text-white/90">
        <svg onClick={() => { 
          setTheme("dark") 
          setToggle(true)
        }} className={`lucide cursor-pointer lucide-moon-icon lucide-moon curso text-neutral-600 dark:text-white ${toggle == true ? 'hidden': "block"} `} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        <svg onClick={() => {
          setTheme("light")
          setToggle(false)
        }} className={`lucide cursor-pointer lucide-sun-icon lucide-sun ${toggle == false ? "hidden": "block"}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
  </div>
}