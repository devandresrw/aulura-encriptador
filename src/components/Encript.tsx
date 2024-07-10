'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import { useStateTextEncript } from "@/src/utils/useStore"

export default function Encript(){
    const [viewpre, setViewPre] = useState(true)
    const store = useStateTextEncript((state)=>state)

    useEffect(()=>{
        const storeVacio = Object.keys(store.textEncript).length === 0
        setViewPre(storeVacio) 
    },[store])

    return(
        <div className="w-full lg:h-full">
              {
                viewpre ? <PreEncript/> : <CopyEncrip/> 
              }  
        </div>
    ) 
}


const PreEncript = () => {
    return(
       <div className="w-full lg:h-full">
         <div className="w-full flex flex-col items-center lg:gap-8 p-8 rounded-[32px] bg-white
        shadow-boxsh lg:h-full lg:justify-center">
              <div className="">
                    <Image 
                    src={'/avatar.svg'} 
                    height={300} 
                    width={300} 
                    alt={'avatar-alura'}
                    className="hidden lg:block"
                    />
              </div>  
              <div className="flex flex-col gap-6 text-center font-inter">
                    <h2 className="font-bold  text-txtazulb text-2xl leading-7">
                        Ningún mensaje fue encontrado</h2>
                    <h3 className="text-graytxt text-base leading-6">
                        Ingresa el texto que desees encriptar o desencriptar.</h3>
              </div>  
        </div>
       </div>
    )
}   

const CopyEncrip = () => {
    const [textoBoton, setTextoBoton] = useState('Copiar')
    const store = useStateTextEncript((state)=>state)

    const copiarTexto = async()=>{
        try{
            await navigator.clipboard.writeText(store.textEncript);
            setTextoBoton('Copiado!')
            setTimeout(() => setTextoBoton('Copiar'), 2000)
        }catch(error){
            console.error('Error al copiar el texto: ', error);
            alert('Error al copiar el texto');
        }
    }
    return(
        <>
        <div className="w-full lg:h-full">
            <div className="w-full flex flex-col items-center lg:gap-8 p-8 rounded-[32px] bg-white
        shadow-boxsh lg:h-full lg:justify-center">
                    <h1>{store.textEncript}</h1>
                    <button onClick={copiarTexto} 
                    className="font-inter font-normal text-base
                                p-6 flex text-center justify-center align-middle rounded-3xl 
                                border border-solid transition-all duration-200 ease-in-out
                              border-darkblue text-darkblue hover:bg-bgazulh">
                        {textoBoton}
                    </button>
            </div>
        </div>
        </>
    )
}