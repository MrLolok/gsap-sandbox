'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

gsap.registerPlugin(MorphSVGPlugin);

export default function Day13Page() {
    useGSAP(() => {
        // Anima il disegno della stella trasformandola in un cuore
        gsap.to('#star-path', {
            morphSVG: '#heart-path',
            duration: 2,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true,
        });
    }, []);

    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 px-8 gap-12 bg-linear-to-br from-slate-900 to-slate-800">
            <h1 className="text-4xl font-bold text-white mb-8">
                MorphSVG Plugin Demo
            </h1>

            <div className="flex flex-col gap-16">
                {/* Stella */}
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-2xl text-white">Stella Animata</h2>
                    <svg width="200" height="200" viewBox="0 0 200 200">
                        <path
                            id="star-path"
                            d="M100,20 L120,80 L180,80 L135,115 L155,175 L100,140 L45,175 L65,115 L20,80 L80,80 Z"
                            fill="none"
                            stroke="#fbbf24"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                {/* Marker (nascosto) */}
                <svg
                    className="hidden"
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                >
                    <path
                        id="heart-path"
                        d="M100,170 C40,130 20,90 50,60 C80,30 120,30 150,60 C180,90 160,130 100,170 Z"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </main>
    );
}
