import {createCipheriv } from 'crypto'
import { iv, clave } from './seed'

interface Cifrado {
    texto:string 
} 

export function cifradoTexto({texto}: Cifrado): string {
    const cipher = createCipheriv('aes-256-cbc', clave, iv);
    let cifrado = cipher.update(texto, 'utf-8', 'hex');
    cifrado += cipher.final('hex');
    return cifrado;
}