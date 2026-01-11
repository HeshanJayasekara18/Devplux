import Section3 from "@/component/service/section3/Section3";
import Section2 from "@/component/service/section2/Section2";
import Navbar from "@/component/common/navbar/Navbar";
import Footer from "@/component/common/footer/Footer";
import Section1 from "@/component/service/section1/Section1";

export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full bg-black" suppressHydrationWarning>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      {/* Future sections (4, etc.) will be added here */}
      <Footer />
    </main>
  );
}
