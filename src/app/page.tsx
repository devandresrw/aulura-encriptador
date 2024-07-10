import Image from "next/image";
import Button from "../components/Button";
import TextBox from "../components/TextBox";
import Encript from "../components/Encript";

export default function Home() {
  return (
   <>
      <div className="w-dvw h-dvh flex flex-col lg:flex-row bg-bgazul px-4 pt-6 pb-10 gap-12 
      ">
         <div className="lg:flex-1">
            <TextBox/>
         </div>
         <div className="lg:flex-2">
            <Encript/>
         </div>
      </div>
   </>
  );
}
