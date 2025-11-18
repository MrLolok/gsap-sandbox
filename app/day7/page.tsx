'use client';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import Link from 'next/link';

export default function Day7Page() {
    const smoothWrapper = useRef<HTMLDivElement>(null);
    const smoothContent = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Crea l'istanza di ScrollSmoother
        const smoother = ScrollSmoother.create({
            wrapper: smoothWrapper.current!,
            content: smoothContent.current!,
            smooth: 1.5, // durata dello smoothing in secondi
            effects: true, // abilita data-speed e data-lag
            smoothTouch: 0.1, // smoothing su mobile (0.1 = leggero)
        });

        // Esempio di animazione con ScrollTrigger + ScrollSmoother
        gsap.from('.animate-box', {
            scrollTrigger: {
                trigger: '.animate-box',
                start: 'top 80%',
                end: 'top 30%',
                scrub: true,
            },
            scale: 0.5,
            opacity: 0,
        });

        return () => {
            smoother.kill();
        };
    }, []);

    return (
        <div id="smooth-wrapper" ref={smoothWrapper}>
            <div id="smooth-content" ref={smoothContent}>
                <main className="flex min-h-screen w-full flex-col items-center py-32 px-8 gap-12">
                    <Link
                        href="/"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 self-start"
                    >
                        ← Torna alla home
                    </Link>
                    <div className="mb-8 text-3xl font-bold">
                        Day 7: ScrollSmoother
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-center">
                        ScrollSmoother crea uno smooth scroll fluido con effetti
                        di parallasse. Nota come lo scrolling è più morbido
                        rispetto alle altre pagine.
                    </p>

                    {/* Sezione Hero */}
                    <section className="w-full max-w-4xl flex flex-col items-center gap-8 py-20">
                        <h2 className="text-2xl font-bold">
                            Effetto Smooth Scroll
                        </h2>
                        <div className="w-48 h-48 bg-linear-to-br from-purple-400 to-pink-600 rounded-lg shadow-xl"></div>
                    </section>

                    {/* Sezione con data-speed (parallasse) */}
                    <section className="w-full max-w-4xl flex flex-col items-center gap-8 py-20 relative">
                        <h2 className="text-2xl font-bold">
                            Effetto Parallasse con data-speed
                        </h2>
                        <p className="text-center text-gray-600 dark:text-gray-400 max-w-xl">
                            Gli elementi con data-speed si muovono a velocità
                            diverse creando profondità. Valori &lt; 1 = più
                            lento (sfondo), valori &gt; 1 = più veloce (primo
                            piano)
                        </p>

                        <div className="relative w-full h-96 flex items-center justify-center">
                            {/* Sfondo - si muove più lentamente */}
                            <div
                                data-speed="0.5"
                                className="absolute w-64 h-64 bg-blue-300 rounded-full blur-3xl opacity-50"
                            ></div>

                            {/* Medio - velocità normale */}
                            <div
                                data-speed="1"
                                className="absolute w-40 h-40 bg-green-400 rounded-lg shadow-lg"
                            ></div>

                            {/* Primo piano - si muove più velocemente */}
                            <div
                                data-speed="1.5"
                                className="absolute w-24 h-24 bg-yellow-400 rounded-full shadow-xl"
                            ></div>
                        </div>
                    </section>

                    {/* Sezione con data-lag (ritardo) */}
                    <section className="w-full max-w-4xl flex flex-col items-center gap-8 py-20">
                        <h2 className="text-2xl font-bold">
                            Effetto Lag con data-lag
                        </h2>
                        <p className="text-center text-gray-600 dark:text-gray-400 max-w-xl">
                            data-lag aggiunge un ritardo nell&apos;animazione,
                            creando un effetto elastico
                        </p>

                        <div className="flex gap-8 flex-wrap justify-center">
                            <div
                                data-lag="0"
                                className="w-32 h-32 bg-red-400 rounded-lg flex items-center justify-center text-white font-bold"
                            >
                                lag: 0
                            </div>
                            <div
                                data-lag="0.3"
                                className="w-32 h-32 bg-orange-400 rounded-lg flex items-center justify-center text-white font-bold"
                            >
                                lag: 0.3
                            </div>
                            <div
                                data-lag="0.8"
                                className="w-32 h-32 bg-pink-400 rounded-lg flex items-center justify-center text-white font-bold"
                            >
                                lag: 0.8
                            </div>
                        </div>
                    </section>

                    {/* Sezione con animazione ScrollTrigger */}
                    <section className="w-full max-w-4xl flex flex-col items-center gap-8 py-20">
                        <h2 className="text-2xl font-bold">
                            Combinazione con ScrollTrigger
                        </h2>
                        <p className="text-center text-gray-600 dark:text-gray-400 max-w-xl">
                            ScrollSmoother funziona perfettamente con
                            ScrollTrigger
                        </p>

                        <div className="animate-box w-64 h-64 bg-linear-to-br from-cyan-400 to-blue-600 rounded-xl shadow-2xl"></div>
                    </section>

                    {/* Sezione con clamp */}
                    <section className="w-full max-w-4xl flex flex-col items-center gap-8 py-20">
                        <h2 className="text-2xl font-bold">
                            Effetto Clamp con data-speed
                        </h2>
                        <p className="text-center text-gray-600 dark:text-gray-400 max-w-xl">
                            data-speed=&quot;clamp(min, max)&quot; limita il
                            movimento dell&apos;elemento tra i valori min e max,
                            mantenendolo sempre visibile nel viewport
                        </p>

                        <div className="w-full flex flex-col gap-8 items-center">
                            <div
                                data-speed="clamp(0.5, 1.5)"
                                className="w-64 p-6 bg-linear-to-br from-emerald-400 to-teal-600 rounded-xl text-white text-center shadow-xl"
                            >
                                <h3 className="font-bold mb-2">
                                    Clamp (0.5, 1.5)
                                </h3>
                                <p className="text-sm">
                                    Questo elemento rimane sempre nel viewport,
                                    limitato tra 0.5x e 1.5x
                                </p>
                            </div>

                            <div
                                data-speed="clamp(0, 2)"
                                className="w-64 p-6 bg-linear-to-br from-amber-400 to-orange-600 rounded-xl text-white text-center shadow-xl"
                            >
                                <h3 className="font-bold mb-2">Clamp (0, 2)</h3>
                                <p className="text-sm">
                                    Range più ampio: da fermo (0) a molto veloce
                                    (2)
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Sezione con più elementi parallax */}
                    <section className="w-full max-w-4xl flex flex-col items-center gap-16 py-20">
                        <h2 className="text-2xl font-bold">
                            Effetto Profondità Avanzato
                        </h2>

                        <div className="w-full flex flex-col gap-32">
                            <div className="relative h-80 flex items-center justify-center">
                                <div
                                    data-speed="0.3"
                                    className="absolute w-96 h-96 bg-purple-200 rounded-full blur-2xl"
                                ></div>
                                <div
                                    data-speed="0.7"
                                    className="absolute w-48 h-48 bg-purple-400 rounded-lg"
                                ></div>
                                <div
                                    data-speed="1.3"
                                    className="absolute w-32 h-32 bg-purple-600 rounded-full z-10"
                                ></div>
                            </div>

                            <div
                                data-speed="0.8"
                                className="w-full p-8 bg-linear-to-r from-indigo-500 to-purple-500 rounded-xl text-white"
                            >
                                <h3 className="text-xl font-bold mb-4">
                                    Carte con Parallasse
                                </h3>
                                <p>
                                    Questa carta si muove leggermente più lenta
                                    dello scroll creando profondità
                                </p>
                            </div>

                            <div
                                data-speed="1.2"
                                data-lag="0.5"
                                className="w-full p-8 bg-linear-to-r from-pink-500 to-red-500 rounded-xl text-white"
                            >
                                <h3 className="text-xl font-bold mb-4">
                                    Combinazione speed + lag
                                </h3>
                                <p>
                                    Questa carta combina velocità maggiore con
                                    un effetto lag elastico
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Spaziatura finale */}
                    <div className="w-full h-screen"></div>
                </main>
            </div>
        </div>
    );
}
