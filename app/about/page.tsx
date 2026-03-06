import AboutHero from '@/components/sections/about-hero';
import HeroSection from '@/components/sections/hero-section';
import LogoCloud from '@/components/sections/logo-cloud';
import Projects from '@/components/sections/projects';
import CallToAction from '@/components/sections/call-to-action';
import PlaygroundTabs from '@/components/sections/playground-tabs';
import CTAPart from '@/components/containers/cta-part';
import { CTALoop } from '@/components/containers/cta-loop';
import MyInterests from '@/components/sections/my-interests';
import WorkWithMe from '@/components/sections/work-with-me';
import LatestWork from '@/components/sections/latest-work';
import PromoBanner from '@/components/sections/promo-banner';

const About = () => {
    return (
        <>
            <AboutHero />
            {/* <HeroSection /> */}
            <LogoCloud />
            {/* <Projects />
            <CallToAction />
            <PlaygroundTabs /> 
            <MyInterests />
            */}
            <LatestWork />
            <PromoBanner />
            <WorkWithMe />

            {/* <CTALoop />
            <CTAPart /> */}
        </>
    );
};

export default About;
