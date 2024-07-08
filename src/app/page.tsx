import Image from "next/image";
import Button from "../components/Button";
import TextBox from "../components/TextBox";
import Encript from "../components/Encript";

export default function Home() {
  return (
   <>
      <div className="w-dvw h-dvh flex flex-col bg-bgazul px-4 pt-6 pb-10 gap-12 
      ">
         <div className="">
            <TextBox/>
         </div>
         <div className="">
            <Encript/>
         </div>
      </div>
   </>
  );
}
