import Hero from "@/components/Hero";
import { MemberList } from "@/components/MemberList";
import Hope from "@/components/hope";
import FooterComponent from "@/components/footerComponent";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="h-40"></div>
      <MemberList />
      <div className="h-40"></div>
      <Hope />
      <div className="h-40"></div>
      <FooterComponent />
    </>
  );
}
