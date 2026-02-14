import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { Gift, Lock, Unlock } from 'lucide-react';

const Surprise = () => {
    const [unlocked, setUnlocked] = useState(false);
    const [holding, setHolding] = useState(false);
    const timeoutRef = useRef(null);

    const handleStart = () => {
        setHolding(true);
        timeoutRef.current = setTimeout(() => {
            setUnlocked(true);
            setHolding(false);
        }, 2000); // 2 seconds long press
    };

    const handleEnd = () => {
        setHolding(false);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-pink-100 relative overflow-hidden text-center p-6">
            {unlocked && <Confetti recycle={true} numberOfPieces={500} colors={['#ff69b4', '#ff1493', '#ffc0cb', '#FFD700']} />}

            <AnimatePresence mode="wait">
                {!unlocked ? (
                    <motion.div
                        key="locked"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <h2 className="text-2xl font-bold text-gray-700 font-dancing">Hold to Unlock My Secret Gift 🎁</h2>

                        <div className="relative">
                            {/* Progress Ring */}
                            <svg width="120" height="120" className="absolute top-0 left-0 -rotate-90 pointer-events-none">
                                <circle
                                    cx="60"
                                    cy="60"
                                    r="58"
                                    stroke="#e5e7eb"
                                    strokeWidth="4"
                                    fill="none"
                                />
                                <motion.circle
                                    cx="60"
                                    cy="60"
                                    r="58"
                                    stroke="#ec4899"
                                    strokeWidth="4"
                                    fill="none"
                                    strokeDasharray="365"
                                    strokeDashoffset="365"
                                    animate={{ strokeDashoffset: holding ? 0 : 365 }}
                                    transition={{ duration: 2, ease: "linear" }}
                                />
                            </svg>

                            <motion.button
                                onMouseDown={handleStart}
                                onMouseUp={handleEnd}
                                onMouseLeave={handleEnd}
                                onTouchStart={handleStart}
                                onTouchEnd={handleEnd}
                                className="w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center relative z-10 select-none active:scale-95 transition-transform"
                            >
                                <Lock className="text-pink-400" size={40} />
                            </motion.button>
                        </div>

                        <p className="text-sm text-gray-500 animate-pulse">
                            {holding ? "Keep holding..." : "Long press the button"}
                        </p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="unlocked"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center gap-6 bg-white/80 p-8 rounded-3xl shadow-2xl backdrop-blur-md max-w-md"
                    >
                        <Unlock className="text-green-500 w-16 h-16 mb-2" />
                        <h1 className="text-4xl font-bold text-pink-600 font-dancing">Will You Be Mine Forever? 💍</h1>
                        <p className="text-gray-600 text-lg italic">
                            "There is no one else I'd rather spend my life with."
                        </p>
                        <div className="flex gap-4 mt-4">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-pink-500 text-white px-8 py-3 rounded-full text-xl shadow-lg font-bold"
                                onClick={() => alert("Yay! I love you! ❤️")}
                            >
                                YES!
                            </motion.button>
                            {/* No 'No' button ;) */}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Surprise;
