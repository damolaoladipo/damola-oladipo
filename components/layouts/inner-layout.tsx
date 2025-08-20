import { ILayout } from "@/utils/interfaces";
import { Footer } from "../containers/footer";

const InnerLayout = (data: ILayout) => {
  const { children } = data;

  return (
    <>
      <div className="fixed inset-0 pointer-events-none flex sm:px-8">
        <div className="w-full max-w-7xl lg:px-8">
         
        </div>
      </div>
      <div className="relative flex w-full  min-h-screen flex-col">
        
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default InnerLayout;
