'use client';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

export default function Day3Page() {
    useGSAP(() => {
        // GSAP Stagger - applying animations with staggered start times
        // Staggered animation for text (words)
        gsap.from('.stagger-word', {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.7)',
        });

        // Staggered animation for letters from center
        gsap.from('.stagger-letter', {
            opacity: 0,
            scale: 0,
            duration: 0.6,
            stagger: {
                amount: 1,
                from: 'center',
            },
            ease: 'power3.out',
        });

        // Staggered animation for first set of squares
        gsap.from('.square', {
            scale: 0.1,
            duration: 1,
            repeat: -1,
            yoyo: true,
            stagger: {
                amount: 0.5,
                from: 'center',
                grid: 'auto',
            },
        });

        // Staggered animation for second set of squares
        gsap.to('.square-2', {
            scale: 0.1,
            duration: 1,
            repeat: -1,
            yoyo: true,
            stagger: {
                amount: 0.5,
                from: 'edges',
                grid: 'auto',
            },
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
            <div className="mb-8 text-3xl font-bold">Day 3: Stagger</div>
            <div className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 flex gap-2 flex-wrap">
                <span className="stagger-word">Animazioni</span>
                <span className="stagger-word">con</span>
                <span className="stagger-word">effetto</span>
                <span className="stagger-word">stagger</span>
                <span className="stagger-word text-blue-600">
                    spettacolari!
                </span>
            </div>
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-500 to-red-500 mb-12 flex">
                <span className="stagger-letter">D</span>
                <span className="stagger-letter">A</span>
                <span className="stagger-letter">L</span>
                <span className="stagger-letter">&nbsp;</span>
                <span className="stagger-letter">C</span>
                <span className="stagger-letter">E</span>
                <span className="stagger-letter">N</span>
                <span className="stagger-letter">T</span>
                <span className="stagger-letter">R</span>
                <span className="stagger-letter">O</span>
                <span className="stagger-letter">!</span>
            </div>
            <div className="flex flex-row gap-4 flex-wrap">
                <div className="square w-24 h-24 rounded-sm bg-indigo-500 p-2" />
                <div className="square w-24 h-24 rounded-sm bg-lime-500 p-2" />
                <div className="square w-24 h-24 rounded-sm bg-orange-500 p-2" />
                <div className="square w-24 h-24 rounded-sm bg-sky-500 p-2" />
                <div className="square w-24 h-24 rounded-sm bg-indigo-500 p-2" />
                <div className="square w-24 h-24 rounded-sm bg-lime-500 p-2" />
                <div className="square w-24 h-24 rounded-sm bg-orange-500 p-2" />
                <div className="square w-24 h-24 rounded-sm bg-sky-500 p-2" />
                <div className="square w-24 h-24 rounded-sm bg-indigo-500 p-2" />
                <div className="square w-24 h-24 rounded-sm bg-lime-500 p-2" />
                <div className="square w-24 h-24 rounded-sm bg-indigo-500 p-2" />
                <div className="square w-24 h-24 rounded-sm bg-lime-500 p-2" />
                <div className="square w-24 h-24 rounded-sm bg-orange-500 p-2" />
                <div className="square w-24 h-24 rounded-sm bg-sky-500 p-2" />
                <div className="square w-24 h-24 rounded-sm bg-indigo-500 p-2" />
                <div className="square w-24 h-24 rounded-sm bg-lime-500 p-2" />
                <div className="square w-24 h-24 rounded-sm bg-orange-500 p-2" />
                <div className="square w-24 h-24 rounded-sm bg-sky-500 p-2" />
                <div className="square w-24 h-24 rounded-sm bg-indigo-500 p-2" />
                <div className="square w-24 h-24 rounded-sm bg-lime-500 p-2" />
            </div>
            <div className="flex flex-row gap-4 flex-wrap">
                <div className="square-2 w-24 h-24 rounded-sm bg-indigo-500 p-2" />
                <div className="square-2 w-24 h-24 rounded-sm bg-lime-500 p-2" />
                <div className="square-2 w-24 h-24 rounded-sm bg-orange-500 p-2" />
                <div className="square-2 w-24 h-24 rounded-sm bg-sky-500 p-2" />
                <div className="square-2 w-24 h-24 rounded-sm bg-indigo-500 p-2" />
                <div className="square-2 w-24 h-24 rounded-sm bg-lime-500 p-2" />
                <div className="square-2 w-24 h-24 rounded-sm bg-orange-500 p-2" />
                <div className="square-2 w-24 h-24 rounded-sm bg-sky-500 p-2" />
                <div className="square-2 w-24 h-24 rounded-sm bg-indigo-500 p-2" />
                <div className="square-2 w-24 h-24 rounded-sm bg-lime-500 p-2" />
                <div className="square-2 w-24 h-24 rounded-sm bg-indigo-500 p-2" />
                <div className="square-2 w-24 h-24 rounded-sm bg-lime-500 p-2" />
                <div className="square-2 w-24 h-24 rounded-sm bg-orange-500 p-2" />
                <div className="square-2 w-24 h-24 rounded-sm bg-sky-500 p-2" />
                <div className="square-2 w-24 h-24 rounded-sm bg-indigo-500 p-2" />
                <div className="square-2 w-24 h-24 rounded-sm bg-lime-500 p-2" />
                <div className="square-2 w-24 h-24 rounded-sm bg-orange-500 p-2" />
                <div className="square-2 w-24 h-24 rounded-sm bg-sky-500 p-2" />
                <div className="square-2 w-24 h-24 rounded-sm bg-indigo-500 p-2" />
                <div className="square-2 w-24 h-24 rounded-sm bg-lime-500 p-2" />
            </div>
        </main>
    );
}
