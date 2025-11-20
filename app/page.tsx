import Link from 'next/link';

export default function Home() {
    const days = [
        {
            title: 'Day 10: Text and ScrambleText',
            description:
                'Esempi di animazioni con Text e ScrambleText per animare e trasformare testo',
            href: '/day10',
            color: 'bg-yellow-500 hover:bg-yellow-600',
        },
        {
            title: 'Day 9: SplitText',
            description:
                'Esempio di animazioni con SplitText per suddividere e animare testo',
            href: '/day9',
            color: 'bg-pink-500 hover:bg-pink-600',
        },
        {
            title: 'Day 8: Draggable e Inertia',
            description:
                'Crea elementi trascinabili con fisica di inerzia usando Draggable e InertiaPlugin',
            href: '/day8',
            color: 'bg-red-500 hover:bg-red-600',
        },
        {
            title: 'Day 7: ScrollSmoother',
            description:
                'Crea uno smooth scroll fluido con effetti di parallasse usando ScrollSmoother',
            href: '/day7',
            color: 'bg-green-500 hover:bg-green-600',
        },
        {
            title: 'Day 6: ScrollTrigger con Scrub',
            description:
                'Applica animazioni con ScrollTrigger e scrub per sincronizzare animazioni con lo scroll',
            href: '/day6',
            color: 'bg-blue-500 hover:bg-blue-600',
        },
        {
            title: 'Day 5: ScrollTrigger con Pin e Timeline',
            description:
                'Crea animazioni fissate con pin e sequenze di animazioni con timeline',
            href: '/day5',
            color: 'bg-purple-500 hover:bg-purple-600',
        },
        {
            title: 'Day 4: ScrollTrigger',
            description:
                'Applica animazioni con ScrollTrigger per sincronizzare animazioni con lo scroll',
            href: '/day4',
            color: 'bg-sky-500 hover:bg-sky-600',
        },
        {
            title: 'Day 3: Stagger',
            description:
                'Applica animazioni sfalsate con effetti stagger avanzati',
            href: '/day3',
            color: 'bg-orange-500 hover:bg-orange-600',
        },
        {
            title: 'Day 2: Timelines',
            description: 'Crea sequenze di animazioni con GSAP Timelines',
            href: '/day2',
            color: 'bg-lime-500 hover:bg-lime-600',
        },
        {
            title: 'Day 1: GSAP Basics',
            description:
                'Impara i fondamentali di GSAP: to, from, fromTo, e set',
            href: '/day1',
            color: 'bg-indigo-500 hover:bg-indigo-600',
        },
    ];

    return (
        <main className="flex min-h-screen w-full mx-auto max-w-3xl flex-col items-center py-32 px-16 gap-12">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-[5rem]">
                GSAP <span className="text-blue-600">Playground</span>
            </h1>
            <div className="grid grid-cols-1 gap-6 w-full mt-8">
                {days.map((day) => (
                    <Link
                        key={day.href}
                        href={day.href}
                        className={`${day.color} rounded-lg p-8 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                    >
                        <h2 className="text-3xl font-bold mb-3">{day.title}</h2>
                        <p className="text-lg opacity-90">{day.description}</p>
                    </Link>
                ))}
            </div>
        </main>
    );
}
