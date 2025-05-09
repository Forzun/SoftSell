import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import StyleButton from "./StyleButton"
  

export default function QuestionSection(){ 

    return <div className="h-full w-full">
        <div className="relative max-w-3xl mx-auto w-full flex flex-col gap-20 justify-center items-center">
        <div className="">
      <div className="absolute right-0 md:bottom-30 -bottom-4 w-96 h-96 md:bg-pink-500/15 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
        <div className="flex gap-1 items-center group justify-center ">
            <div className="flex flex-col max-w-2xl text-sm mx-auto ">
              <div className="flex items-center justify-center flex-col">
              <StyleButton title="Simple Steps to Sell" svgTextColor="violet" svgFullColor="fill-violet-400" bgColor={"bg-violet-700/20"} bgBorderColor={"border-violet-500/20"} />
                <h1 className="font-light text-2xl md:text-5xl">Q&A</h1>
                <div className="flex items-center justify-center">
            </div>
              </div>
              <p className="pt-3 text-base font-light text-center text-slate-500 ">Quick answers to help you understand how SoftSell works and what you can expect.</p>
            </div>
          </div>
            <div className="w-full md:px-2 px-8 scale-110">
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How do I sell my license?</AccordionTrigger>
        <AccordionContent>
        Simply upload the details of your software license through our platform. Our team will evaluate its market value, and once approved, you’ll receive your payment securely through your preferred method.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>You’ll usually receive your payment within 1 to 2 business days after we verify your license.</AccordionTrigger>
        <AccordionContent>
         Usually within 1–2 business days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What types of licenses can I sell?</AccordionTrigger>
        <AccordionContent>
        You can sell major software licenses like Microsoft, Adobe, Autodesk, and other commonly used business tools.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
            </div>
        </div>  
    </div>
}

