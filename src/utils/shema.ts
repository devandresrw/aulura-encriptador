import {z} from 'zod'

const textoMayusculas = /^[a-z\s]*$/

const shemaEncript = z.string()
.min(1, "el mensaje no puede estar vacio")
.regex(textoMayusculas, 'El mensaje no debe contener mayusculas ni acentos')

export default shemaEncript