import { TextLoop } from "@/components/ui/text-loop";
import { ArrowRight } from "lucide-react";

export function CTALoop() {
  return (
    <>
      <div className="flex flex-col group gap-0 w-full overflow-hidden relative m-auto max-w-4xl">
        <div className="flex flex-row items-start md:items-center space-y-2 md:space-y-0 space-x-2 md:space-x-4">
          <p className="text-4xl md:text-[70px] transition-colors duration-300 group-hover:text-[#a3f443]">
            Let's make
          </p>
          <ArrowRight
            size={32}
            className="md:hidden relative top-2 transition-colors duration-300 text-[#a3f443]"
          />
          <ArrowRight
            size={70}
            className="hidden md:block relative top-2 transition-colors duration-300 text-[#a3f443]"
          />
        </div>

        <div>
          <p className="inline-flex gap-1 md:gap-0 whitespace-pre-wrap text-4xl md:text-[70px] transition-colors duration-300 group-hover:text-[#a3f443]/60">
            something{" "}
            <TextLoop
              className="overflow-y-clip"
              transition={{
                type: "spring",
                stiffness: 900,
                damping: 80,
                mass: 10,
              }}
              variants={{
                initial: {
                  y: 20,
                  rotateX: 90,
                  opacity: 0,
                  filter: "blur(4px)",
                },
                animate: {
                  y: 0,
                  rotateX: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                },
                exit: {
                  y: -20,
                  rotateX: -90,
                  opacity: 0,
                  filter: "blur(4px)",
                },
              }}
            >
              <span>epic</span>
              <span>original</span>
              <span>valuable</span>
              <span>usable</span>
              <span>delightful</span>
            </TextLoop>
          </p>
        </div>
      </div>
    </>
  );
}