'use client';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Day3 = () => {
    useGSAP(() => {
        // GSAP Stagger - applying animations with staggered start times
        // Staggered animation for first set of squares
        gsap.to('.square', {
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
        <>
            <div className="mb-8 text-3xl font-bold">Day 3: Stagger</div>
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
        </>
    );
};

export default Day3;
