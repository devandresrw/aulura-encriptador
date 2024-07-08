import { 
    randomBytes, 
    createCipheriv, 
    scryptSync } from "crypto";

interface Encript{
    texto: string;
    seed: string; 
}

export function EncriptarText({texto, seed}: Encript): string{
    const iv = randomBytes(16);
    // Ajustar la clave a 32 bytes usando scryptSync
    const clave = scryptSync(seed, 'salt', 32); // 'salt' puede ser reemplazado por un valor único para cada usuario o sesión si es posible
    const cipher = createCipheriv('aes-256-cbc', clave, iv);
    let resultado = cipher.update(texto, 'utf8', 'hex');
    resultado += cipher.final('hex');
    return iv.toString('hex') + ':' + resultado;
}

/* Pruebas
const a = EncriptarText({texto: 'Hola', seed: '123'});
console.log(a);
*/


