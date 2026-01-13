import Navbar from "@/component/common/navbar/Navbar";
import Section1 from "@/component/landing/section1/Section1";
import Section2 from "@/component/landing/section2/Section2";
import Section3 from "@/component/landing/section3/Section3";
import Section4 from "@/component/landing/section4/Section4";
import Footer from "@/component/common/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden" suppressHydrationWarning>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </main>
  );
}
