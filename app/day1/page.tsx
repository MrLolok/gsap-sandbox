'use client';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import React from 'react';
import Link from 'next/link';

export default function Day1Page() {
    const boxToRef = React.useRef<HTMLDivElement>(null);
    const boxFromRef = React.useRef<HTMLDivElement>(null);
    const boxFromToRef = React.useRef<HTMLDivElement>(null);
    const boxSetRef = React.useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // GSAP Animations - examples of .to, .from, .fromTo, and .set
        // .to - animates to the given properties
        // .from - animates from the given properties
        // .fromTo - animates from the first set of properties to the second set
        // .set - immediately sets the given properties without animation
        gsap.to(boxToRef.current, {
            x: 300,
            duration: 2,
            repeat: 1,
            autoAlpha: 0,
        });
        gsap.from(boxFromRef.current, { x: 300, duration: 2, repeat: 0 });
        gsap.fromTo(boxFromToRef.current, { x: -50 }, { x: 300, duration: 2 });
        gsap.set(boxSetRef.current, {
            backgroundColor: 'purple',
            x: 150,
        });
    }, []);

    return (
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 gap-12 sm:items-start">
            <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
                ← Torna alla home
            </Link>
            <div className="mb-8 text-3xl font-bold">Day 1: GSAP Basics</div>
            <div
                ref={boxToRef}
                className="w-24 h-24 rounded-sm bg-indigo-500 p-2"
            >
                Box (gsap.to)
            </div>
            <div
                ref={boxFromRef}
                className="w-24 h-24 rounded-sm bg-lime-500 p-2"
            >
                Box (gsap.from)
            </div>
            <div
                ref={boxFromToRef}
                className="w-24 h-24 rounded-sm bg-orange-500 p-2"
            >
                Box (gsap.fromTo)
            </div>
            <div
                ref={boxSetRef}
                className="w-24 h-24 rounded-sm bg-sky-500 p-2"
            >
                Box (gsap.set)
            </div>
        </main>
    );
}
