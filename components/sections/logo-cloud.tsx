import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export default function LogoCloud() {
  return (
    <section className="bg-background overflow-hidden py-28 md:py-24">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col md:items-center  md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="md:text-end  text-left text-sm">
              Toolkit I build with, from concept to deployment
            </p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={50} speed={160} gap={40}>
              <div className="flex">
                <img
                  className="mx-auto h-16 w-fit dark:invert"
                  src="./blocks/typescript.svg"
                  alt="Typescript Logo"
                  height="16"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-16 w-fit dark:invert"
                  src="./blocks/node-js.svg"
                  alt="React Native Logo"
                  height="16"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-16 w-fit dark:invert"
                  src="./blocks/react.svg"
                  alt="React Native Logo"
                  height="16"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-16 w-fit dark:invert"
                  src="./blocks/tailwind-css.svg"
                  alt="Tailwind CSS Logo"
                  height="16"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-16 w-fit dark:invert"
                  src="./blocks/canva.svg"
                  alt="Canva Logo"
                  height="16"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-16 w-fit dark:invert"
                  src="./blocks/figma.svg"
                  alt="Figma Logo"
                  height="16"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-16 w-fit dark:invert"
                  src="./blocks/notion.svg"
                  alt="Notion Logo"
                  height="16"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-16 w-fit dark:invert"
                  src="./blocks/mongodb.svg"
                  alt="MongoDB Logo"
                  height="16"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-16 w-fit dark:invert"
                  src="./blocks/express-js.svg"
                  alt="Express JS Logo"
                  height="16"
                  width="auto"
                />
              </div>
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
