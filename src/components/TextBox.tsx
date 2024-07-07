import Image from "next/image"
import ButtonAction from "./Button"


export default function TextBox(){
    return(
        <div className="flex flex-col 
        justify-between">
            <div className="">
                <Image 
                src={'/logo.svg'} 
                height={30} 
                width={30} 
                alt="aulura-latam"
                className=""
                />
            </div>
            <div className="w-full  flex flex-col items-start justify-end ">
                <form className="w-full h-full">
                    <textarea className="w-full h-full  overflow-y-scroll bg-transparent
                    font-inter text-darkblue text-2xl pt-14 pb-12 px-4 outline-none
                    focus:outline-none resize-none caret-slate-400"
                    placeholder="Ingrese texto aqui...">

                    </textarea>
                    <div className="flex flex-col gap-6">
                         <ButtonAction text="Encriptar" typebtn="submit"/>
                         <ButtonAction text="Desencriptar" typebtn="encript"/>
                    </div>
                </form>
            </div>
        </div>
    )
}