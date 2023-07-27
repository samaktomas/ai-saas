import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = ({}) => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LandingPage;
