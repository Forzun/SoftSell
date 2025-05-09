import StyleButton from "./StyleButton";

export default function Testimonials() {
    return (
      <section id="Testimonials" className="md:py-16 py-0 ">
        <div className=" mx-auto flex flex-col gap-4 md:gap-10 items-center justify-center">
                <div>
                                  <StyleButton 
                    title="What People Are Saying" 
                    svgTextColor="pink" 
                    svgFullColor="fillPink" 
                    bgColor="bg-pink-700/20" 
                    bgBorderColor="border-pink-500/20" 
                  />
                    <MainHeading />
                </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 ">
                <Blocks comment="SoftSell made it incredibly easy to turn our unused licenses into revenue. Fast, transparent, and hassle-free!" name="Aarav Mehta" branch="IT Manager, TechNova" />
                <Blocks comment="I never imagined I could actually make money from old software licenses. SoftSell handled everything smoothly." name="Neha Kapoor" branch="Founder, DesignStack" />
            </div>
        </div>
      </section>
    );
  }
  


function MainHeading(){ 
    return<div className="flex flex-col max-w-2xl gap-2 text-sm mx-auto">
    <div className="flex items-center justify-center">
      <h1 className="font-light text-2xl md:text-5xl">What Our Customers Say</h1>
      <div className="flex items-center justify-center">
  </div>
    </div>
    <div className="text-center ">
        <p className="text-base font-light text-slate-500 ">At SoftSell, we combine trust, transparency, and speed to give you the best experience when selling your unused software licenses.</p>
    </div>
  </div>
}

function Blocks({comment , name , branch} : { 
    comment:string;
    name:string; 
    branch:string;
}){ 
    
    return<div className="group w-full p-7 border text-left flex flex-col gap-3 dark:border-white/13 border-black/15 hover:border-black/30 dark:hover:border-white/25 dark:bg-white/3 bg-black/8 backdrop-blur-sm transition duration-300 rounded-xl">
        <div>
          
          <p className="text-black/90 dark:text-white/90 italic mb-4 ">
            "{comment}"
          </p>
          
          <h3 className="font-semibold text-lg dark:text-gray-700 text-gray-400">{name}</h3>

          <p className="dark:text-gray-500 text-gray-600">{branch}</p>

        </div>
  </div>
}