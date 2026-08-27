import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Nexo — Rede Social de Projetos",description:"Uma rede social para transformar ideias em projetos e conectar pessoas que fazem.",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body>{children}</body></html>}
