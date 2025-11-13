'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

// Registra il plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Day4Page() {
    useGSAP(() => {
        // GSAP ScrollTrigger - animazioni sincronizzate con lo scroll
        gsap.to('.box', {
            scrollTrigger: {
                trigger: '.box', // elemento che triggera l'animazione
                start: 'top 50%', // quando il top del box raggiunge l'80% del viewport
                scrub: 2, // sincronizza l'animazione con lo scroll
                toggleActions: 'play none reverse none', // azioni di toggle
            },
            x: 500,
            duration: 1,
        });
    }, []);

    return (
        <main className="flex min-h-screen w-full flex-col items-center py-32 px-8 gap-12">
            <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 self-start"
            >
                ← Torna alla home
            </Link>
            <div className="mb-8 text-3xl font-bold">Day 4: ScrollTrigger</div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-center">
                Scrolla verso il basso per vedere l&apos;animazione partire
                quando il box entra nel viewport
            </p>

            {/* Spaziatura per lo scroll */}
            <div className="w-full h-screen"></div>

            {/* Box semplice con scroll trigger */}
            <div className="box h-24 w-24 bg-lime-400 rounded-sm"></div>

            {/* Spaziatura finale */}
            <div className="w-full h-screen"></div>
        </main>
    );
}
