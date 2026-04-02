import { Hero } from "@/components/sections/Hero";
import { Proof } from "@/components/sections/Proof";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { Pricing } from "@/components/sections/Pricing";
import { ReadinessCTA } from "@/components/sections/ReadinessCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <Proof />
      <Pricing />
      <ReadinessCTA />
    </>
  );
}
