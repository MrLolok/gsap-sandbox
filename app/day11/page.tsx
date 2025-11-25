'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function Day11Page() {
    const viewRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Esempi di ScrollTo
        function getSamePageAnchor(link) {
            if (
                link.protocol !== window.location.protocol ||
                link.host !== window.location.host ||
                link.pathname !== window.location.pathname ||
                link.search !== window.location.search
            ) {
                return false;
            }

            return link.hash;
        }

        // Scroll to a given hash, preventing the event given if there is one
        function scrollToHash(hash, e) {
            const elem = hash ? document.querySelector(hash) : false;
            if (elem) {
                if (e) e.preventDefault();
                gsap.to(window, { scrollTo: elem });
            }
        }

        // If a link's href is within the current page, scroll to it instead
        document.querySelectorAll('a[href]').forEach((a) => {
            a.addEventListener('click', (e) => {
                scrollToHash(getSamePageAnchor(a), e);
            });
        });

        // Scroll to the element in the URL's hash on load
        scrollToHash(window.location.hash, null);
    }, []);

    return (
        <main
            ref={viewRef}
            className="flex min-h-screen w-full flex-col items-center py-32 px-8 gap-12"
        >
            <nav className="fixed right-4 top-4 flex gap-4">
                <a href="#section1">Section 1</a>
                <a href="#section2">Section 2</a>
                <a href="#section3">Section 3</a>
                <a href="#section4">Section 4</a>
                <a href="#section5">Section 5</a>
            </nav>

            <section
                id="section1"
                className="h-screen flex items-center justify-center"
            >
                Section 1
            </section>
            <section
                id="section2"
                className="h-screen flex items-center justify-center"
            >
                Section 2
            </section>
            <section
                id="section3"
                className="h-screen flex items-center justify-center"
            >
                Section 3
            </section>
            <section
                id="section4"
                className="h-screen flex items-center justify-center"
            >
                Section 4
            </section>
            <section
                id="section5"
                className="h-screen flex items-center justify-center"
            >
                Section 5
            </section>
        </main>
    );
}
