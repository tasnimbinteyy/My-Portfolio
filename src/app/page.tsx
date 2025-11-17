"use client";

import { CarouselDemo } from "@/components/ui/Projects";
import { StickyScrollRevealDemo } from "@/components/ui/Skills";
import { SignupFormDemo } from "@/components/ui/Contact";

export default function Home() {
  return (
    <div>
      
      <CarouselDemo />
      <StickyScrollRevealDemo />
      <SignupFormDemo />
    </div>
  );
}
