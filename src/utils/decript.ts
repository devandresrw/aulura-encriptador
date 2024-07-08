import { 
    createDecipheriv, 
    scryptSync } from 'crypto';

interface Decript{
    textoencript: string;
    seed: string; 
}

export function desencriptarTexto({textoencript, seed}:Decript): string {
    const partes = textoencript.split(':');
    const iv = Buffer.from(partes.shift()!, 'hex');
    const texto = partes.join(':');
    // Ajustar la clave a 32 bytes usando scryptSync
    const clave = scryptSync(seed, 'salt', 32); // 'salt' debe ser el mismo que se usó para encriptar
    const decipher = createDecipheriv('aes-256-cbc', clave, iv);
    let resultado = decipher.update(texto, 'hex', 'utf8');
    resultado += decipher.final('utf8');
    return resultado;
}


/* Pruebas
  

const b = desencriptarTexto(
    {textoencript: "37ee968a1db9966fb3c9b7fe734fbb3a:840e7c03b5322c9f6f720aa46baf2413", seed: '123'})


    console.log(b); // Hola


 */
