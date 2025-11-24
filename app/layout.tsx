import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

// Importa plugin
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Draggable } from 'gsap/Draggable';
import { SplitText } from 'gsap/SplitText';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(
    useGSAP,
    ScrollTrigger,
    ScrollSmoother,
    Draggable,
    SplitText,
    InertiaPlugin,
    TextPlugin,
    ScrambleTextPlugin,
    ScrollToPlugin
);

const geistSans = Geist({
    variable: '--font-geist-sans',
});

export const metadata: Metadata = {
    title: 'GSAP Sandbox',
    description: 'GSAP experiments and demos built with Next.js',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
