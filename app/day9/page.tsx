'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

export default function Day9Page() {
    const viewRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Esempi di SplitText
        SplitText.create('.heading', {
            type: 'words, lines',
            wordsClass: 'wordChildren',
            linesClass: 'lineChildren',
            onSplit: () => {
                gsap.fromTo(
                    '.wordChildren',
                    { y: -100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 1,
                        ease: 'back.out(2.7)',
                    }
                );
            },
        });
    }, []);

    return (
        <main
            ref={viewRef}
            className="flex min-h-screen w-full flex-col items-center py-32 px-8 gap-12"
        >
            <h1 className="heading text-4xl font-bold max-w-4xl text-center">
                Day 9: SplitText Example - Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
            </h1>
        </main>
    );
}
