import Section1 from "@/component/contact/section1/Section1";
import Section2 from "@/component/contact/section2/Section2";
import Navbar from "@/component/common/navbar/Navbar";
import Footer from "@/component/common/footer/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen w-full bg-black text-white" suppressHydrationWarning>
      <Navbar />
      <Section1 />
      <Section2 />
      <Footer />
    </main>
  );
}
