'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(DrawSVGPlugin);

export default function Day12Page() {
    useGSAP(() => {
        // Anima il disegno del path dall'inizio alla fine
        gsap.from('#star-path', {
            drawSVG: '0%',
            duration: 2,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true,
        });

        // Anima il cerchio con un effetto diverso
        gsap.from('#circle-path', {
            drawSVG: '50% 50%',
            duration: 2.5,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
            delay: 0.5,
        });

        // Anima la scritta
        gsap.from('#text-path', {
            drawSVG: '0%',
            duration: 3,
            ease: 'none',
            repeat: -1,
            repeatDelay: 1,
        });
    }, []);

    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 px-8 gap-12 bg-linear-to-br from-slate-900 to-slate-800">
            <h1 className="text-4xl font-bold text-white mb-8">
                DrawSVG Plugin Demo
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

                {/* Cerchio */}
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-2xl text-white">Cerchio dal Centro</h2>
                    <svg width="200" height="200" viewBox="0 0 200 200">
                        <circle
                            id="circle-path"
                            cx="100"
                            cy="100"
                            r="80"
                            fill="none"
                            stroke="#60a5fa"
                            strokeWidth="4"
                        />
                    </svg>
                </div>

                {/* Scritta */}
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-2xl text-white">Testo Tracciato</h2>
                    <svg width="400" height="100" viewBox="0 0 400 100">
                        <path
                            id="text-path"
                            d="M 10 50 Q 40 10, 80 50 T 150 50 M 160 50 L 160 30 L 200 30 L 200 50 L 160 50 L 160 70 L 200 70 M 210 50 Q 240 10, 280 50 T 350 50"
                            fill="none"
                            stroke="#34d399"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>

            <div className="mt-8 p-6 bg-slate-800 rounded-lg text-white max-w-2xl">
                <h3 className="text-xl font-semibold mb-4">DrawSVG Plugin</h3>
                <p className="mb-2">
                    Il plugin DrawSVG permette di animare il tracciamento di
                    path e forme SVG.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                    <li>
                        <code className="text-amber-400">
                            drawSVG: &quot;0%&quot;
                        </code>{' '}
                        - Inizia dal nulla
                    </li>
                    <li>
                        <code className="text-amber-400">
                            drawSVG: &quot;100%&quot;
                        </code>{' '}
                        - Disegno completo
                    </li>
                    <li>
                        <code className="text-amber-400">
                            drawSVG: &quot;50% 50%&quot;
                        </code>{' '}
                        - Inizia dal centro
                    </li>
                </ul>
            </div>
        </main>
    );
}
