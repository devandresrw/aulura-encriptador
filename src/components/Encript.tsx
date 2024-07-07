'use client'
import { useState } from "react"
import Image from "next/image"

export default function Encript(){
    const [viewpre, setViewPre] = useState(true)
    return(
        <div className="">
              {
                viewpre ? <PreEncript/> : <CopyEncrip/> 
              }  
        </div>
    ) 
}

/*
color: var(--Gray-gray-400, #495057);
text-align: center;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 24px */

const PreEncript = () => {
    return(
        <div className="flex flex-col items-center lg:gap-8 p-8 rounded-[32px] bg-white
        shadow-boxsh">
              <div className="">
                    <Image 
                    src={'/avatar.svg'} 
                    height={100} 
                    width={100} 
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
    )
}   

const CopyEncrip = () => {
    return(
        <></>
    )
}