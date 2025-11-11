'use client';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import React from 'react';

const Day1 = () => {
    const boxToRef = React.useRef<HTMLDivElement>(null);
    const boxFromRef = React.useRef<HTMLDivElement>(null);
    const boxFromToRef = React.useRef<HTMLDivElement>(null);
    const boxSetRef = React.useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // GSAP Animations - examples of .to, .from, .fromTo, and .set
        // .to - animates to the given properties
        // .from - animates from the given properties
        // .fromTo - animates from the first set of properties to the second set
        // .set - immediately sets the given properties without animation
        gsap.to(boxToRef.current, {
            x: 300,
            duration: 2,
            repeat: 1,
            autoAlpha: 0,
        });
        gsap.from(boxFromRef.current, { x: 300, duration: 2, repeat: 0 });
        gsap.fromTo(boxFromToRef.current, { x: -50 }, { x: 300, duration: 2 });
        gsap.set(boxSetRef.current, {
            backgroundColor: 'purple',
            x: 150,
        });
    }, []);

    return (
        <>
            <div className="mb-8 text-3xl font-bold">Day 1: GSAP Basics</div>
            <div
                ref={boxToRef}
                className="w-24 h-24 rounded-sm bg-indigo-500 p-2"
            >
                Box (gsap.to)
            </div>
            <div
                ref={boxFromRef}
                className="w-24 h-24 rounded-sm bg-lime-500 p-2"
            >
                Box (gsap.from)
            </div>
            <div
                ref={boxFromToRef}
                className="w-24 h-24 rounded-sm bg-orange-500 p-2"
            >
                Box (gsap.fromTo)
            </div>
            <div
                ref={boxSetRef}
                className="w-24 h-24 rounded-sm bg-sky-500 p-2"
            >
                Box (gsap.set)
            </div>
        </>
    );
};

export default Day1;
