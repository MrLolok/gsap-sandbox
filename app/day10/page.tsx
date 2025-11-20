'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(TextPlugin, ScrambleTextPlugin);

export default function Day10Page() {
    const viewRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Esempi di Text e ScrambleText
        gsap.to('#heading1', {
            duration: 2,
            text: 'This is the new text',
            ease: 'none',
        });

        const tl = gsap.timeline({
            id: 'text-scramble',
            defaults: { ease: 'none' },
        });

        gsap.set('#scramble-text-original', {
            opacity: 0,
        });

        tl.to('#scramble-text-1', {
            scrambleText: {
                text: 'Mix it up with ScrambleText.',
                chars: 'lowerCase',
            },
            duration: 2,
        })
            .to('#scramble-text-2', {
                scrambleText: {
                    text: 'Animate using characters',
                    chars: 'XO',
                    speed: 0.4,
                },
                duration: 2,
            })
            .to('#scramble-text-3', {
                scrambleText: { text: ' numbers,', chars: '0123456789' },
                duration: 2,
            })
            .to('#scramble-text-4', {
                scrambleText: {
                    text: 'UPPERCASE',
                    chars: 'upperCase',
                    speed: 0.3,
                },
                duration: 1,
            })
            .to('#scramble-text-5', {
                scrambleText: {
                    text: 'or lowercase.',
                    chars: 'lowerCase',
                    speed: 0.3,
                },
                duration: 1.5,
            });
    }, []);

    return (
        <main
            ref={viewRef}
            className="flex min-h-screen w-full flex-col items-center py-32 px-8 gap-12"
        >
            <h1
                id="heading1"
                className="heading text-4xl font-bold max-w-4xl text-center"
            >
                This is old text
            </h1>

            <p id="scramble-text-original" className="text-5xl font-bold">
                Mix it up with ScrambleText. Animate using characters, numbers,
                UPPERCASE or lowercase.
            </p>

            <p
                className="text-scramble__text text-5xl font-bold"
                aria-hidden="true"
            >
                <span id="scramble-text-1"></span>
                <span id="scramble-text-2"></span>
                <span id="scramble-text-3"></span>
                <span id="scramble-text-4"></span>
                <span id="scramble-text-5"></span>
            </p>
        </main>
    );
}
