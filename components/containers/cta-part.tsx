import { HexagonBackground } from "@/components/ui/hexagon";

const CTAPart = () => {
  return (
    <>
      <div className="w-full overflow-hidden relative m-auto max-w-4xl">
        <HexagonBackground
          className="h-40 mt-8 dark:bg-[#a3f443] inset-0 flex items-center justify-center rounded-md "
          hexagonProps={{
            className: "dark:bg-[#a3f443] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0",
          }}
        />
      </div>
    </>
  );
};

export default CTAPart;


// bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0