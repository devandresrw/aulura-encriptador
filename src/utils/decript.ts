import {createDecipheriv} from 'crypto'
import { clave, iv } from '@/src/utils/seed'

interface Cifrado{
    texto: string
}

export function descrifrarTexto({texto}: Cifrado): string {
    try {
        const decipher = createDecipheriv('aes-256-cbc', clave, iv);
        let descrifrado = decipher.update(texto, 'hex', 'utf-8');
        descrifrado += decipher.final('utf-8');
        return descrifrado;
    } catch (error: any) {
        console.error('Error al descifrar el texto:', error.message);
        // Log more error details if available
        if (error.code) console.error('Error code:', error.code);
        if (error.stack) console.error('Error stack:', error.stack);
        throw new Error('unable to decrypt data');
    }
}