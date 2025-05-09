import { CardWithForm } from "@/components/Form";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItworks";
import Navbar from "@/components/Navbar";
import QuestionSection from "@/components/QuestionSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden overflow-y-hidden relative container mx-auto font-sans ">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <QuestionSection/>
      <CardWithForm />
    </main>
  );
}


