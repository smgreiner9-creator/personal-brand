import { Hero } from "@/components/sections/Hero";
import { Proof } from "@/components/sections/Proof";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { Pricing } from "@/components/sections/Pricing";
import { Newsletter } from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Proof />
      <WhatIDo />
      <Pricing />
      <Newsletter />
    </>
  );
}
