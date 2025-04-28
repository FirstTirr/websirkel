import Hero from "@/components/Hero";
import { MemberList } from "@/components/MemberList";
import Hope from "@/components/hope";
import FooterComponent from "@/components/footerComponent";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <main>
      <section id="home">
      <Hero />
      <div className="h-40"></div>
      </section>

      <MemberList />
      <div className="h-40"></div>
      <Hope />
      <div className="h-40"></div>
    </main>
    <FooterComponent />
    </>
  );
}
