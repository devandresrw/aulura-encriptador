import {create} from "zustand"
import { persist, PersistStorage } from "zustand/middleware"

interface TextEncript{
    textEncript: string 
    setTextEncript: (newEncript: string) => void
}

const sessionStorage: PersistStorage<TextEncript> = {
    getItem: (name) =>{
        const value = window.sessionStorage.getItem(name)
        return value ? JSON.parse(value) : null;
    },
    setItem: (name, value)=>{
        window.sessionStorage.setItem(name, JSON.stringify(value))
    },
    removeItem: (name) =>{
        window.sessionStorage.removeItem(name)
    }
}

export const useStateTextEncript = create <TextEncript>()(
    persist(
        (set)=>({
            textEncript: '',
            setTextEncript: (newEncript: string) => set({textEncript: newEncript})
        }),
        {
            name: 'text-encript',
            storage: sessionStorage
        }
    )
)