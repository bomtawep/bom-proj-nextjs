import React from "react";
import '@/app/styles/globals.css'
import type { Metadata } from 'next'
import { NavigationBar } from '@/components/NavigationBar'
import { StoreProvider } from '@/app/StoreProvider'
import { menuItems } from "@/constants/menuItems";

export const metadata: Metadata = {
    title: 'bom',
    description: 'bom app',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <NavigationBar menuItems={menuItems}/>
                <section>
                    <StoreProvider>{children}</StoreProvider>
                </section>
            </body>
        </html>
    )
}