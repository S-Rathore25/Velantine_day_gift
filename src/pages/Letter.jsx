import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Music, Pause } from 'lucide-react';

const Letter = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="min-h-screen bg-[#fdfbf7] pt-20 pb-24 px-6 relative overflow-hidden">
            <audio
                ref={audioRef}
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
                loop
            />

            <div className="fixed top-4 right-4 z-50">
                <button
                    onClick={toggleMusic}
                    className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform animate-pulse"
                >
                    {isPlaying ? <Pause size={20} /> : <Music size={20} />}
                </button>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-2xl mx-auto bg-white p-8 shadow-xl rounded-lg border-2 border-pink-100 relative"
            >
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'repeating-linear-gradient(#f1f1f1 0px, #f1f1f1 24px, #e1e1e1 25px)' }}>
                </div>

                <h1 className="text-3xl font-bold text-pink-600 font-dancing mb-6 text-center">My Dearest Love,</h1>

                <div className="prose prose-pink prose-lg font-nunito text-gray-700 leading-loose space-y-6 relative z-10">
                    <p>
                        I am writing this letter to tell you how much you mean to me. Since the day you walked into my life, everything has changed for the better. The colors are brighter, the air is sweeter, and my heart beats a little faster.
                    </p>
                    <p>
                        You are my rock, my safe haven, and my greatest adventure. I cherish every moment we spend together, whether we are exploring new places or just sitting in silence. Your laughter is my favorite melody, and your smile is the sunshine that brightens my darkest days.
                    </p>
                    <p>
                        I promise to always stand by your side, to support your dreams, and to love you unconditionally. You are the missing piece of my puzzle, the one I didn't know I was looking for until I found you.
                    </p>
                    <p>
                        Thank you for being you. Thank you for loving me. I love you more than words can express, today and forever.
                    </p>
                    <p className="text-right font-bold mt-8">
                        Yours always,<br />
                        [Your Name] ❤️
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Letter;
