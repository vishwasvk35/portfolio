"use client";

import React from "react";
import FallingLightDrops from "@/components/ui/hero-background";
import GradientText from "@/components/ui/gradient-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { FadeInSection } from "../../components/ui/FadeInSection";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background - positioned absolutely */}
      <FallingLightDrops />

      {/* Content - positioned with z-index to appear above background */}
      <div className="flex flex-col items-center justify-center relative z-10 w-full h-full p-8">
        <FadeInSection>
          
          <GradientText />
                    <p className="text-6xl text-white font-primary mb-4">
            Software Engineer
          </p>
          <p className="text-xl text-white md:text-4xl font-secondary">
            Crafting seamless digital experiences, from pixel to scalable
            backend.
          </p>

          <div className="w-full flex items-center justify-center pt-16" >
            <RainbowButton className="font-bold text-black text-xl" >
              <a href="https://drive.google.com/file/d/10t-rYF3VNDH4czMLo-JulcK1FxqmQbot/view?usp=sharing">
                Download Resume
              </a>
            </RainbowButton>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Hero;
