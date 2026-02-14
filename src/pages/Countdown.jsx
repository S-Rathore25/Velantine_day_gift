import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    // Generate flowers only once
    const flowers = useMemo(() => [...Array(20)].map((_, i) => ({
        id: i,
        emoji: ['🌸', '🌹', '🌺', '🌷'][Math.floor(Math.random() * 4)],
        left: Math.random() * 100,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 5,
    })), []);

    function getNextValentine() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const valentine = new Date(`${currentYear}-02-14T00:00:00`);

        if (now > valentine) {
            valentine.setFullYear(currentYear + 1);
        }
        return valentine;
    }

    function calculateTimeLeft() {
        const difference = +getNextValentine() - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return timeLeft;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">

            {/* Falling Flowers Background */}
            {flowers.map((flower) => (
                <motion.div
                    key={flower.id}
                    className="absolute text-2xl"
                    initial={{
                        y: -50,
                        opacity: 0,
                        rotate: 0,
                    }}
                    animate={{
                        y: window.innerHeight + 50,
                        opacity: [0, 1, 0],
                        rotate: 360,
                    }}
                    transition={{
                        duration: flower.duration,
                        repeat: Infinity,
                        delay: flower.delay,
                        ease: "linear",
                    }}
                    style={{ left: `${flower.left}%` }}
                >
                    {flower.emoji}
                </motion.div>
            ))}

            <div className="z-10 text-center bg-white/30 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/50 w-full max-w-md mx-4">
                <h2 className="text-3xl md:text-4xl text-pink-600 font-dancing mb-8">Next Valentine's ❤️</h2>

                <div className="grid grid-cols-4 gap-2 md:gap-4 font-nunito text-gray-700">
                    {['days', 'hours', 'minutes', 'seconds'].map((interval) => (
                        <div key={interval} className="flex flex-col items-center bg-white/40 rounded-xl p-2 shadow-sm">
                            <span className="text-3xl md:text-5xl font-bold text-pink-500 tabular-nums">
                                {timeLeft[interval] !== undefined ? timeLeft[interval] : '0'}
                            </span>
                            <span className="text-[10px] md:text-sm uppercase tracking-wide mt-1 text-gray-500">{interval}</span>
                        </div>
                    ))}
                </div>

                <p className="mt-8 text-lg font-light italic text-gray-600">
                    "Time flies, but my love for you stands still."
                </p>
            </div>
        </div>
    );
};

export default Countdown;
