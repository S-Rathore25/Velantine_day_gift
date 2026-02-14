import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-pink-50 relative overflow-hidden">
            {/* Background Heartbeat */}
            <motion.div
                className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
                <Heart size={300} fill="#ffb7c5" stroke="none" />
            </motion.div>

            <div className="z-10 text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-7xl font-bold text-pink-500 mb-4"
                    style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                    Hi My Love 💖
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-xl text-gray-600 mb-8 font-light"
                >
                    Using every heartbeat to say...
                    <br />
                    <span className="font-semibold text-pink-400">"You make my life beautiful"</span>
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/reasons')}
                    className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:bg-pink-600 transition-colors flex items-center gap-2 mx-auto"
                >
                    <Heart size={20} fill="currentColor" />
                    Open My Heart
                </motion.button>
            </div>

            {/* Floating hearts background elements (simple CSS animation or framer) */}
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-pink-200"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: window.innerHeight + 100,
                        opacity: 0,
                    }}
                    animate={{
                        y: -100,
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear",
                    }}
                >
                    <Heart size={Math.random() * 30 + 10} fill="currentColor" />
                </motion.div>
            ))}
        </div>
    );
};

export default Home;
