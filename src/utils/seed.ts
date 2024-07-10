import {
    randomBytes
} from 'crypto'

export const clave = randomBytes(32)
export const iv = randomBytes(16)