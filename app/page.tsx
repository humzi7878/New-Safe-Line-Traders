import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CEOMessage from "@/components/CEOMessage";
import Services from "@/components/Services";
import ValueProps from "@/components/ValueProps";
import CoreOfferings from "@/components/CoreOfferings";
import MedicalCamps from "@/components/MedicalCamps";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <CEOMessage />
      <Services />
      <ValueProps />
      <CoreOfferings />
      <MedicalCamps />
      <Contact />
      <Footer />
    </main>
  );
}
