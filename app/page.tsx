import HeroSection from "@/components/sections/hero-section";
import LogoCloud from "@/components/sections/logo-cloud";
import Projects from "@/components/sections/projects";
import CallToAction from "@/components/sections/call-to-action";
import PlaygroundTabs from "@/components/sections/playground-tabs";
import InterestCards from "@/components/sections/interests";
import CTAPart from "@/components/containers/cta-part";
import { CTALoop } from "@/components/containers/cta-loop";
import { Container } from "@/components/containers/c-container";

const Home = () => {
  
  return (
    <>
      
      
            <Container>
                <HeroSection />
                <LogoCloud />
                <Projects />
                <CallToAction />
                <PlaygroundTabs />
                <InterestCards />

                <div className="relative mt-32 mx-auto">
                <div className="bg-linear-to-b h-32 absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
                <CTALoop />
                </div>
                <CTAPart />
            </Container>
    </>
  );
};

export default Home;
