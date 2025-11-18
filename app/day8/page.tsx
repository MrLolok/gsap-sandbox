'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

export default function Day8Page() {
    const viewRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Esempi di Draggable e InertiaPlugin
        Draggable.create('.flair--1', {
            type: 'x',
            bounds: '.container',
        });
        Draggable.create('.flair--3b', {
            type: 'rotation',
            inertia: true,
        });
        Draggable.create('.flair--4b', {
            bounds: '.container',
            inertia: {
                linkedProps: 'x,y',
                resistance: 3,
            },
        });

        // Drop area
        const overlapThreshold = '99%';

        // Utility to add/remove class
        function addClass(el: HTMLElement, className: string) {
            el.classList.add(className);
        }

        function removeClass(el: HTMLElement, className: string) {
            el.classList.remove(className);
        }

        function hasClass(el: HTMLElement, className: string) {
            return el.classList.contains(className);
        }

        Draggable.create('.box', {
            bounds: window,
            onDrag: function () {
                if (this.hitTest('#dropArea', overlapThreshold)) {
                    addClass(this.target, 'highlight');
                } else {
                    removeClass(this.target, 'highlight');
                }
            },
            onDragEnd: function () {
                if (!hasClass(this.target, 'highlight')) {
                    gsap.to(this.target, {
                        duration: 0.2,
                        x: 0,
                        y: 0,
                    });
                }
            },
        });
    }, []);

    return (
        <main
            ref={viewRef}
            className="flex min-h-screen w-full flex-col items-center px-8 gap-12"
        >
            <div className="container relative w-[90vw] h-[90vh] border-4 border-dashed border-gray-400 overflow-hidden flex justify-center items-center">
                <div className="wrapper">
                    <div className="flair flair--1 cursor-pointer min-w-[200px] min-h-[200px] max-h-[15vh] max-w-[15vh] bg-cover bg-[url(https://assets.codepen.io/16327/flair.png)]"></div>
                </div>
                <div className="wrapper">
                    <div className="flair flair--3b cursor-pointer min-w-[200px] min-h-[200px] max-h-[15vh] max-w-[15vh] bg-cover bg-[url(https://assets.codepen.io/16327/ui-flair-2.png)]"></div>
                </div>
                <div className="wrapper">
                    <div className="flair flair--4b cursor-pointer min-w-[200px] min-h-[200px] max-h-[15vh] max-w-[15vh] bg-cover bg-[url(https://assets.codepen.io/16327/ui-flair-4.png)]"></div>
                </div>
            </div>

            <div className="boxes gap-4 flex flex-row items-center w-full max-w-lg">
                <div id="container" className="flex gap-2 flex-col">
                    <div
                        id="box1"
                        className="box rounded-sm flex items-center justify-center w-48 h-16 bg-linear-to-r from-red-500 to-yellow-500"
                    >
                        box1
                    </div>
                    <div
                        id="box2"
                        className="box rounded-sm flex items-center justify-center w-48 h-16 bg-linear-to-r from-green-400 to-blue-500"
                    >
                        box2
                    </div>
                    <div
                        id="box3"
                        className="box rounded-sm flex items-center justify-center w-48 h-16 bg-linear-to-r from-purple-500 to-pink-500"
                    >
                        box3
                    </div>
                </div>

                <div
                    id="dropArea"
                    className="w-lg min-h-[200px] border-4 border-dashed border-gray-400 rounded-sm flex items-center justify-center"
                >
                    Drop Area
                </div>
            </div>
        </main>
    );
}
