"use client"
import {useState} from "react"
import Image from "next/image"
import Icon from "./svgs/icon"
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import shemaEncript from "@/src/utils/shema"
import {z} from 'zod'
import { cifradoTexto } from "@/src/utils/encript"
import { descrifrarTexto } from "@/src/utils/decript"
import {useStateTextEncript} from '@/src/utils/useStore'


interface FormValues{
    textArea: string

}

type FormData = z.infer<typeof shemaEncript>;

export default function TextBox(){

    const setEncript = useStateTextEncript((state) => state.setTextEncript)
    const [action, setAction] = useState('');

    const { register, handleSubmit, formState: { errors, isSubmitted } } = useForm<FormData>({
        resolver: zodResolver(shemaEncript),
    });

    const onSubmit = (data: any) => {
        setEncript('')
        let text = ''
        const textoBuffer = Buffer.from(data.texto, 'utf-8')

        if (action === 'sendText') {
            text = cifradoTexto({texto: textoBuffer.toString()})
            setAction('')
        }else if (action === 'sendEncript') {
            text = descrifrarTexto({texto: textoBuffer.toString()})
            setAction('')
            
        }
        setEncript(text)  
    };


    return(
        <div className="lg:h-full lg:flex lg:flex-col lg:justify-between">
            <div className="w-full h-24 lg:h-24">
                <Image 
                src={'/logo.svg'} 
                height={30} 
                width={30} 
                alt="aulura-latam"
                className=""
                />
            </div>
            <div className="w-full flex flex-col items-start justify-end lg:flex-grow">
                
                <form className="w-full h-full lg:h-full
                lg:flex lg:flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <textarea {...register('texto')}
                    className="w-full h-56 overflow-y-scroll bg-transparent
                    font-inter text-darkblue text-2xl pt-8 pb-12 px-4 outline-none
                    focus:outline-none resize-none caret-slate-400 
                    lg:flex-grow "
                    placeholder="Ingrese texto aqui...">

                    </textarea>
                    

                    {errors.texto && errors.texto.message ? 
                    (<ErrorMensaje mensaje={errors.texto.message} />) : (<Mensaje/>)}

                    <div className="flex flex-col gap-6">
                         <button className="font-inter font-normal text-base
                                            p-6 flex text-center justify-center align-middle rounded-3xl 
                                            border border-solid transition-all duration-200 ease-in-out
                                          bg-darkblue text-white hover:bg-darkblueh"
                         type="submit" onClick={()=>{setAction('sendText'); handleSubmit(onSubmit)()}}>Encriptar</button>
                         <button className="font-inter font-normal text-base
                                            p-6 flex text-center justify-center align-middle rounded-3xl 
                                            border border-solid transition-all duration-200 ease-in-out
                                          border-darkblue text-darkblue hover:bg-bgazulh"
                        type="submit" onClick={()=>{setAction('sendEncript'); handleSubmit(onSubmit)()}}>Desencriptar</button>
                    </div>
                </form>
            </div>
        </div>

    )
}


/**
                    {isSubmitted && errors.texto ? 
                    (<Mensaje/>) : errors.texto && errors.texto.message ? 
                    (<ErrorMensaje mensaje={errors.texto.message} />) : null}
 

 */

const Mensaje = () => {
    return(
        <span className="flex items-center gap-3 my-4"><Icon/>Solo letras minúsculas y sin acentos</span>    
    )
}

interface PropsError {
    mensaje: string | undefined
}

const ErrorMensaje = ({mensaje}:PropsError) => {
    return(
        <span className="flex items-center gap-3 my-4"><Icon color="#FF306B"/>{mensaje}</span>
    )
}