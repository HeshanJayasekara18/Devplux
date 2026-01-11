import Navbar from "@/component/common/navbar/Navbar";
import Footer from "@/component/common/footer/Footer";
import AboutSection1 from "@/component/about/section1/Section1";
import AboutSection2 from "@/component/about/section2/Section2";

import AboutSection3 from "@/component/about/section3/Section3";

export default function About() {
  return (
    <main className="min-h-screen w-full bg-black text-white" suppressHydrationWarning>
      <Navbar />
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <Footer />
    </main>
  );
}
