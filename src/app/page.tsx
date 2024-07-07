import Image from "next/image";
import Button from "../components/Button";
import TextBox from "../components/TextBox";
import Encript from "../components/Encript";

export default function Home() {
  return (
   <>
      <div className="w-dvw h-dvh flex flex-col bg-bgazul px-4 pt-6 pb-10 gap-12 
      items-end flex-grow">
         <div className="w-full flex-1 bg-green-300">
            <TextBox/>
         </div>
         <div className="w-full">
            <Encript/>
         </div>
      </div>
   </>
  );
}
