'use client';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

export default function Day5Page() {
    useGSAP(() => {
        // GSAP ScrollTrigger - animazioni fissate con pin e timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.container',
                pin: true,
                start: 'top top',
                // Formato: 'trigger viewport'
                // 'top top' = quando il TOP del trigger raggiunge il TOP del viewport
                // Altri esempi: 'top center', 'top 80%', 'center center'

                end: '+=500',
                // Quando termina l'animazione. '+=500' significa 500px DOPO lo start
                // Altri esempi: 'bottom top', '+=100%', 'bottom 20%'
                // La distanza tra start e end determina quanto scroll serve per completare l'animazione

                scrub: 3,
                // Sincronizza l'animazione con lo scroll in modo fluido
                // 1 = impiega 1 secondo a "raggiungere" la posizione dello scroll
                // true = sincronizzazione immediata senza ritardo
                // Valori più alti (es. 3) = movimento più smooth e "pesante"

                snap: {
                    snapTo: 'labels',
                    // Fa "scattare" lo scroll alle labels della timeline
                    // Le labels sono: 'start', 'color', 'spin', 'end'
                    // Quando finisci di scrollare, lo scroll salta alla label più vicina

                    duration: { min: 0.2, max: 3 },
                    // Durata dell'animazione di snap (quanto tempo impiega a scattare)
                    // min: tempo minimo, max: tempo massimo
                    // GSAP calcola automaticamente in base alla distanza

                    delay: 0.2,
                    // Attende 0.2 secondi dopo che l'utente smette di scrollare
                    // prima di eseguire lo snap
                },

                markers: true,
            },
        });

        tl.addLabel('start')
            .from('.box p', { scale: 0.3, rotation: 45, autoAlpha: 0 })
            .addLabel('color')
            .from('.box', { backgroundColor: '#28a92b' })
            .addLabel('spin')
            .to('.box', { rotation: 360 })
            .addLabel('end');
    }, []);

    return (
        <main className="flex min-h-screen w-full flex-col items-center py-32 px-8 gap-12">
            <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 self-start"
            >
                ← Torna alla home
            </Link>
            <div className="mb-8 text-3xl font-bold">
                Day 5: ScrollTrigger con Pin e Timeline
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-center">
                Scrolla verso il basso per vedere l&apos;animazione partire
                quando il container entra nel viewport
            </p>

            {/* Spaziatura per lo scroll */}
            <div className="w-full h-screen"></div>

            {/* Container per la timeline con pin */}
            <div className="container relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                <div className="box relative w-48 h-48 bg-blue-500 rounded-lg flex items-center justify-center">
                    <p className="text-white text-2xl font-bold">Timeline</p>
                </div>
            </div>

            {/* Spaziatura finale */}
            <div className="w-full h-screen"></div>
        </main>
    );
}
