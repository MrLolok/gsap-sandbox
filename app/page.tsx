import Day1 from './components/Day1';
import Day2 from './components/Day2';

export default function Home() {
    return (
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-[5rem]">
                GSAP <span className="text-blue-600">Playground</span>
            </h1>
            <Day1 />
            <Day2 />
        </main>
    );
}
