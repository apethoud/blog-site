// import { Lalezar, Lato } from 'next/font/google'
import localFont from 'next/font/local';
 
export const lalezar = localFont({
  src: '../fonts/LalezarRegular.woff2',
  fallback: ['system-ui', 'arial']
})
 
export const lato = localFont({
  src: '../fonts/LatoRegular.woff2',
  fallback: ['system-ui', 'arial']
})

export const latoItalic = localFont({
  src: '../fonts/LatoItalic.woff2',
  fallback: ['system-ui', 'arial']
})

export const latoBold = localFont({
  src: '../fonts/LatoBold.woff2',
  fallback: ['system-ui', 'arial']
})
