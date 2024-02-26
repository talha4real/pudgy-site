// components/FloatingImage.js
"use client"; // This is a client component 👈🏽

import fimage from './fimage.png'
import Image from 'next/image';
import { useEffect, useState } from 'react';


const FloatingImage = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            // Calculate new random position
            const newX = Math.random() * (window.innerWidth - 256); // Subtract image width to keep it within bounds
            const newY = Math.random() * (window.innerHeight - 256); // Subtract image height to keep it within bounds
            setPosition({ x: newX, y: newY });
        }, 1500); // Change this value to adjust the speed of movement

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 flex justify-center items-center">
                <p className="text-center text-3xl text-white">Coming Soon</p>
            </div>
            <div className="fixed" style={{ top: position.y, left: position.x, transition: 'top 2s, left 2s' }}>
                <Image src={fimage} alt="Floating Image" className="w-64 h-auto rounded-full shadow-lg" />
            </div>
        </div>
    );
};

export default FloatingImage;
