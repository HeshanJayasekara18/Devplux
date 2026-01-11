import Navbar from "@/component/common/navbar/Navbar";
import Section2 from "@/component/project/section2/Section2";
import Footer from "@/component/common/footer/Footer";
import Section1 from "@/component/project/section1/Section1";

export default function Projects() {
  return (
    <main className="min-h-screen w-full bg-black text-white" suppressHydrationWarning>
      <Navbar />
      <Section1 />
      <Section2 />
      <Footer />
    </main>
  );
}

