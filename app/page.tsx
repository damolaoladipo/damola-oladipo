import AvatarContainer, { Avatar } from "@/components/containers/Avatar";
import { Container } from "@/components/containers/Container";
import { SecondaryButton } from "@/components/containers/dml-button";
import GooeyButton from "@/components/containers/gooey-button";

import SocialLink from "@/components/containers/SocialLink";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/Constants/social-icons";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Grid2X2Icon,
  LayoutGrid,
  ToolCaseIcon,
} from "lucide-react";

const Home = () => {
  return (
    <>
      <Container className="mt-9">
        <div className="flex flex-1">
          <AvatarContainer>
            <Avatar />
          </AvatarContainer>
        </div>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-800 sm:text-5xl dark:text-neutral-100">
            Product and Design Engineer, ML/NLP Researcher.
          </h1>
          <p className="mt-6 text-base text-neutral-600 dark:text-neutral-400">
            I’m Damola Oladipo, a product engineer with experience in building
            web and mobile applications. I’m passionate about Natural Language
            Generation (NLG) and the future of the AI systems.
          </p>


          
          <div className="mt-32 flex gap-4">
            <SecondaryButton
              icon={<LayoutGrid size={16} />}
              iconPosition="right"
              variant="secondary"
              href="/about"
            >
              My playground
            </SecondaryButton>

<GooeyButton variant="secondary" href="#"> Go to Project Planner</GooeyButton>

            {/* <GooeyButton  icon={<LayoutGrid/>} href="#"> Go to Project Planner</GooeyButton>
            <GooeyButton href="#">Go to Project Planner</GooeyButton> */}
            {/* <GooeyButton
              
              variant="default"
              size="default"
            >
              See all services
            </GooeyButton> */}
          </div>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://x.com/damolaoladipo"
              aria-label="Follow on X"
              icon={XIcon}
            />
            <SocialLink
              href="https://github.com/damola-oladipo"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/damola-oladipo/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
