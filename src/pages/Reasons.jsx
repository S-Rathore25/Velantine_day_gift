import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Heart, RefreshCw } from 'lucide-react';

const reasonsList = [
    "Your smile lights up my darkest days ☀️",
    "You make me laugh like no one else can 😂",
    "Your hugs are my favorite place to be 🤗",
    "You support my wildest dreams 🚀",
    "I love the way you look at me 👀",
    "You are my best friend and my soulmate 💑",
    "Every moment with you is a treasure 💎",
    "You make ordinary things feel extraordinary ✨",
    "I love your kindness to others 💖",
    "You are simply perfect to me ❤️",
];

const Card = ({ text, index, onSwipe }) => {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-30, 30]);
    const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

    return (
        <motion.div
            style={{ x, rotate, opacity, zIndex: 100 - index }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset, velocity }) => {
                if (Math.abs(offset.x) > 100) {
                    onSwipe();
                }
            }}
            className="absolute w-72 h-96 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-8 text-center border-2 border-pink-100 cursor-grab active:cursor-grabbing"
            initial={{ scale: 0.95, y: -20 * index }}
            animate={{ scale: 1, y: 0 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <Heart className="text-pink-500 mb-6" size={48} fill="#ec4899" />
            <h3 className="text-xl font-bold text-gray-800 font-dancing leading-relaxed">
                {text}
            </h3>
            <p className="mt-4 text-xs text-pink-300 font-bold">SWIPE ME</p>
        </motion.div>
    );
};

const Reasons = () => {
    const [cards, setCards] = useState(reasonsList);

    const handleSwipe = (index) => {
        setCards((prev) => prev.filter((_, i) => i !== index));
        if (cards.length <= 1) {
            setTimeout(() => setCards(reasonsList), 500); // Infinite loop
        }
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-pink-50 relative overflow-hidden pb-20">
            <h2 className="absolute top-10 text-3xl font-bold text-pink-600 font-dancing z-10">Reasons I Love You</h2>

            <div className="relative w-72 h-96 flex items-center justify-center">
                <AnimatePresence>
                    {cards.map((reason, index) => (
                        index === 0 ? (
                            <Card
                                key={reason}
                                text={reason}
                                index={index}
                                onSwipe={() => handleSwipe(0)}
                            />
                        ) : (
                            // Stacked cards visual
                            <motion.div
                                key={reason}
                                className="absolute w-72 h-96 bg-white rounded-3xl shadow-md border-2 border-pink-50"
                                style={{
                                    zIndex: -index,
                                    scale: 1 - index * 0.05,
                                    top: index * 10,
                                    opacity: 1 - index * 0.2
                                }}
                            />
                        )
                    ))}
                </AnimatePresence>

                {cards.length === 0 && (
                    <div className="text-center">
                        <RefreshCw className="animate-spin text-pink-400 mx-auto" />
                        <p className="text-pink-400 mt-2">Reloading love...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Reasons;
