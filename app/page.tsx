import HeroSection from "@/components/sections/hero-section";
import Articles from "@/components/sections/articles";

const Home = ({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) => {
  
  return (
            <>
    
                <HeroSection />
                <Articles searchParams={searchParams} />
                
            
            </>
  );
};

export default Home;
