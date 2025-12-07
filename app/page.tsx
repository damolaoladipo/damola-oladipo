import HeroSection from "@/components/sections/hero-section";
import LogoCloud from "@/components/sections/logo-cloud";
import Projects from "@/components/sections/projects";
import CallToAction from "@/components/sections/call-to-action";
import PlaygroundTabs from "@/components/sections/playground-tabs";
import InterestCards from "@/components/sections/interests";
import CTAPart from "@/components/containers/cta-part";
import { CTALoop } from "@/components/containers/cta-loop";
import MyInterests from "@/components/sections/my-interests";

const Home = () => {
  
  return (
            <>
    
                <HeroSection />
                <LogoCloud />
                <Projects />
                <CallToAction />
                <PlaygroundTabs />
                <MyInterests/>
                <InterestCards />
                <CTALoop />
                <CTAPart />
            
            </>
  );
};

export default Home;
