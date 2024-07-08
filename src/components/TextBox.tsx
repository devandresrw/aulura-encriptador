"use client"
import Image from "next/image"
import ButtonAction from "./Button"
import Icon from "./svgs/icon"
import {useForm, SubmitHandler} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

export default function TextBox(){

    const handleSubmit = (e: any) =>{
        e.preventDefault()
        console.log("Encriptar")   
    }

    return(
        <div className="">
            <div className="w-full h-24">
                <Image 
                src={'/logo.svg'} 
                height={30} 
                width={30} 
                alt="aulura-latam"
                className=""
                />
            </div>
            <div className="w-full flex flex-col items-start justify-end ">
                
                <form className="w-full h-full" onSubmit={handleSubmit}>
                    <textarea className="w-full h-56 overflow-y-scroll bg-transparent
                    font-inter text-darkblue text-2xl pt-8 pb-12 px-4 outline-none
                    focus:outline-none resize-none caret-slate-400"
                    placeholder="Ingrese texto aqui...">

                    </textarea>
                    <span className="flex items-center gap-3 my-4"><Icon/>Solo letras minúsculas y sin acentos</span>
                    <div className="flex flex-col gap-6">
                         <ButtonAction text="Encriptar" typebtn="enviar" onClick={()=>{}}/>
                         <ButtonAction text="Desencriptar" typebtn="encript"/>
                    </div>
                </form>
            </div>
        </div>
    )
}