"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {props.children}
        <Toaster />
      </ThemeProvider>
    </ChakraProvider>
  )
}