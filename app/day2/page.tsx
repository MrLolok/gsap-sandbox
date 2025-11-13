'use client';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import React from 'react';
import Link from 'next/link';

export default function Day2Page() {
    const boxToRef = React.useRef<HTMLDivElement>(null);
    const boxFromRef = React.useRef<HTMLDivElement>(null);
    const boxFromToRef = React.useRef<HTMLDivElement>(null);
    const boxSetRef = React.useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // GSAP Timelines - sequencing multiple animations
        const tl = gsap.timeline({
            repeat: -1,
            delay: 1,
            yoyo: true,
            defaults: { duration: 1 },
        });
        tl.to('#box1', { rotate: 360 })
            .to('#box2', { rotate: 360 })
            .to('#box3', { rotate: 360 }, '+=2') // delay of 2 seconds before starting this animation
            .to('#box4', { rotate: 360 });
    }, []);

    return (
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 gap-12 sm:items-start">
            <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
                ← Torna alla home
            </Link>
            <div className="mb-8 text-3xl font-bold">Day 2: Timelines</div>
            <div className="flex flex-row gap-8">
                <div
                    id="box1"
                    ref={boxToRef}
                    className="box w-24 h-24 rounded-sm bg-indigo-500 p-2"
                >
                    Box (gsap.to)
                </div>
                <div
                    id="box2"
                    ref={boxFromRef}
                    className="box w-24 h-24 rounded-sm bg-lime-500 p-2"
                >
                    Box (gsap.from)
                </div>
                <div
                    id="box3"
                    ref={boxFromToRef}
                    className="box w-24 h-24 rounded-sm bg-orange-500 p-2"
                >
                    Box (gsap.fromTo)
                </div>
                <div
                    id="box4"
                    ref={boxSetRef}
                    className="box w-24 h-24 rounded-sm bg-sky-500 p-2"
                >
                    Box (gsap.set)
                </div>
            </div>
        </main>
    );
}
