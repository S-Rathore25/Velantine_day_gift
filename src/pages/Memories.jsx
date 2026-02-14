import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Heart, Sparkles, Music, ArrowLeft } from 'lucide-react';
import Confetti from 'react-confetti';

// Your beautiful memories! 💕
const mediaItems = [
    {
        id: 1,
        type: 'image',
        src: '/images/WhatsApp Image 2026-02-14 at 7.37.47 PM.jpeg',
        date: 'Feb 14, 2026',
        caption: 'Heart Made With Love 💕',
        description: 'Every gesture speaks of my love for you'
    },
    {
        id: 2,
        type: 'image',
        src: '/images/WhatsApp Image 2026-02-14 at 7.37.48 PM.jpeg',
        date: 'Feb 14, 2026',
        caption: 'My Beautiful Bachhhhaaa 😘',
        description: 'Your smile lights up my world'
    },
    {
        id: 3,
        type: 'image',
        src: '/images/WhatsApp Image 2026-02-14 at 7.37.49 PM.jpeg',
        date: 'Feb 14, 2026',
        caption: 'Beautiful Flowers 🌸',
        description: 'Like these flowers, our love blooms forever'
    },
    {
        id: 4,
        type: 'image',
        src: '/images/WhatsApp Image 2026-02-14 at 7.38.18 PM (1).jpeg',
        date: 'Feb 14, 2026',
        caption: 'I Miss You Baby Doll 💖',
        description: 'You make my heart complete'
    },
    {
        id: 5,
        type: 'image',
        src: '/images/WhatsApp Image 2026-02-14 at 7.38.18 PM.jpeg',
        date: 'Feb 14, 2026',
        caption: 'Love You So Much ❤️',
        description: 'Every moment with you is precious'
    },
    {
        id: 6,
        type: 'video',
        src: '/images/WhatsApp Video 2026-02-14 at 7.38.28 PM.mp4',
        thumbnail: '/images/WhatsApp Image 2026-02-14 at 7.37.48 PM.jpeg',
        date: 'Feb 14, 2026',
        caption: 'Our Special Moments 🎥',
        description: 'Captured memories of our love'
    },
    {
        id: 7,
        type: 'image',
        src: '/images/WhatsApp Image 2026-02-14 at 7.38.30 PM.jpeg',
        date: 'Feb 14, 2026',
        caption: 'Together Forever 💑',
        description: 'You and me, always'
    },
    {
        id: 8,
        type: 'image',
        src: '/images/WhatsApp Image 2026-02-14 at 7.38.35 PM.jpeg',
        date: 'Feb 14, 2026',
        caption: 'My Everything 💝',
        description: 'You mean the world to me'
    },
    {
        id: 9,
        type: 'video',
        src: '/images/WhatsApp Video 2026-02-14 at 7.38.36 PM.mp4',
        thumbnail: '/images/WhatsApp Image 2026-02-14 at 7.37.47 PM.jpeg',
        date: 'Feb 14, 2026',
        caption: 'Sweet Memories 🎬',
        description: 'Our beautiful journey together'
    },
    {
        id: 10,
        type: 'image',
        src: '/images/WhatsApp Image 2026-02-14 at 7.38.38 PM (1).jpeg',
        date: 'Feb 14, 2026',
        caption: 'Precious Moments 🌟',
        description: 'Making memories with you'
    },
    {
        id: 11,
        type: 'image',
        src: '/images/WhatsApp Image 2026-02-14 at 7.38.38 PM.jpeg',
        date: 'Feb 14, 2026',
        caption: 'My Love 💗',
        description: 'You are my happiness'
    },
    {
        id: 12,
        type: 'image',
        src: '/images/WhatsApp Image 2026-02-14 at 7.38.39 PM (1).jpeg',
        date: 'Feb 14, 2026',
        caption: 'Always & Forever 💞',
        description: 'My heart belongs to you'
    },
    {
        id: 13,
        type: 'image',
        src: '/images/WhatsApp Image 2026-02-14 at 7.38.39 PM.jpeg',
        date: 'Feb 14, 2026',
        caption: 'I Love You Bachhhhaaa 💕',
        description: 'You are my dream come true'
    },
];



const Memories = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [filter, setFilter] = useState('images'); // 'images', 'videos'
    const [isPlaying, setIsPlaying] = useState(false); // music state
    const audioRef = React.useRef(null);

    const selectedMedia = mediaItems.find(m => m.id === selectedId);

    // Reset music when modal closes
    React.useEffect(() => {
        if (!selectedId) {
            setIsPlaying(false);
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        }
    }, [selectedId]);

    // Music control
    React.useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(e => console.log('Audio play failed:', e));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    const filteredItems = mediaItems.filter(item => {
        if (filter === 'images') return item.type === 'image';
        if (filter === 'videos') return item.type === 'video';
        return true;
    });

    return (
        <div className="min-h-screen relative overflow-hidden pb-24">
            {/* Background music */}
            <audio
                ref={audioRef}
                loop
                src="/music/love-song.mp3"
                onError={(e) => {
                    // Fallback to online romantic music if local file not found
                    e.target.src = "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3";
                }}
                className="hidden"
            />

            {/* Animated gradient background */}
            <div className="fixed inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 animate-gradient-shift"></div>

            {/* Floating hearts animation */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-pink-300 opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            fontSize: `${Math.random() * 30 + 20}px`,
                        }}
                        animate={{
                            y: [1000, -100],
                            x: [0, Math.random() * 100 - 50],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 15,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    >
                        ❤️
                    </motion.div>
                ))}
            </div>

            <div className="relative z-10 p-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-5xl font-dancing bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mb-2">
                        Our Precious Memories
                    </h1>
                    <p className="text-gray-600 flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                        Every moment with you is magical
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                    </p>
                </motion.div>

                {/* Filter buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center gap-3 mb-8"
                >
                    {['images', 'videos'].map((filterType) => (
                        <button
                            key={filterType}
                            onClick={() => setFilter(filterType)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === filterType
                                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-300'
                                : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80'
                                }`}
                        >
                            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                        </button>
                    ))}
                </motion.div>

                {/* Masonry Grid Gallery */}
                <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3 max-w-6xl mx-auto">
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            layoutId={`media-${item.id}`}
                            onClick={() => setSelectedId(item.id)}
                            className="break-inside-avoid mb-4 group cursor-pointer"
                        >
                            <div className="relative bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 max-w-sm">
                                {/* Media container */}
                                <div className="relative overflow-hidden">
                                    {item.type === 'video' ? (
                                        <div className="relative">
                                            <img
                                                src={item.thumbnail}
                                                alt={item.caption}
                                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <Play className="w-8 h-8 text-pink-500 ml-1" fill="currentColor" />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <img
                                            src={item.src}
                                            alt={item.caption}
                                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/400x500/FFB6C1/FF69B4?text=Add+Your+Image';
                                            }}
                                        />
                                    )}

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Caption */}
                                <div className="p-4">
                                    <h3 className="text-lg font-dancing text-pink-600 mb-1 flex items-center gap-2">
                                        <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
                                        {item.caption}
                                    </h3>
                                    <p className="text-sm text-gray-600">{item.date}</p>
                                </div>

                                {/* Sparkle effect on hover */}
                                <motion.div
                                    className="absolute top-4 right-4 text-yellow-400"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 180, 360],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                >
                                    ✨
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty state */}
                {filteredItems.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-gray-500 text-lg">No {filter} found. Add your memories! 💕</p>
                    </motion.div>
                )}
            </div>

            <AnimatePresence>
                {selectedId && selectedMedia && (
                    <>
                        {/* Confetti celebration! */}
                        <Confetti
                            width={window.innerWidth}
                            height={window.innerHeight}
                            recycle={true}
                            numberOfPieces={150}
                            colors={['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1', '#ff69b4', '#db7093']}
                            gravity={0.15}
                        />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedId(null)}
                        >
                            {/* Animated gradient background */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-600 to-rose-600"
                                animate={{
                                    background: [
                                        'linear-gradient(to bottom right, #db2777, #9333ea, #e11d48)',
                                        'linear-gradient(to bottom right, #9333ea, #e11d48, #db2777)',
                                        'linear-gradient(to bottom right, #e11d48, #db2777, #9333ea)',
                                        'linear-gradient(to bottom right, #db2777, #9333ea, #e11d48)',
                                    ],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{ opacity: 0.95 }}
                            />

                            {/* Floating hearts in background */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                {[...Array(25)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute text-4xl"
                                        style={{
                                            left: `${Math.random() * 100}%`,
                                            top: `${100 + Math.random() * 20}%`,
                                        }}
                                        animate={{
                                            y: [-200, -window.innerHeight - 200],
                                            x: [0, (Math.random() - 0.5) * 200],
                                            rotate: [0, 360],
                                            opacity: [0, 1, 1, 0],
                                        }}
                                        transition={{
                                            duration: 5 + Math.random() * 5,
                                            repeat: Infinity,
                                            delay: Math.random() * 3,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        {['💕', '💖', '💗', '💝', '💞', '❤️', '🌹'][Math.floor(Math.random() * 7)]}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Sparkles effect */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                {[...Array(30)].map((_, i) => (
                                    <motion.div
                                        key={`sparkle-${i}`}
                                        className="absolute text-yellow-300"
                                        style={{
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`,
                                            fontSize: `${Math.random() * 20 + 10}px`,
                                        }}
                                        animate={{
                                            scale: [0, 1, 0],
                                            rotate: [0, 180, 360],
                                            opacity: [0, 1, 0],
                                        }}
                                        transition={{
                                            duration: 2 + Math.random() * 2,
                                            repeat: Infinity,
                                            delay: Math.random() * 2,
                                        }}
                                    >
                                        ✨
                                    </motion.div>
                                ))}
                            </div>

                            {/* Main content card */}
                            <motion.div
                                layoutId={`media-${selectedId}`}
                                initial={{ scale: 0.5, rotateY: -180 }}
                                animate={{ scale: 1, rotateY: 0 }}
                                exit={{ scale: 0.5, rotateY: 180 }}
                                transition={{
                                    type: "spring",
                                    damping: 25,
                                    stiffness: 200
                                }}
                                className="relative bg-white rounded-3xl overflow-y-auto max-w-3xl w-full shadow-2xl"
                                style={{
                                    boxShadow: '0 0 60px rgba(255, 105, 180, 0.6), 0 0 100px rgba(147, 51, 234, 0.4)',
                                    maxHeight: '90vh'
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Glowing border effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-3xl"
                                    style={{
                                        background: 'linear-gradient(45deg, #ff69b4, #9333ea, #ff1493, #db2777)',
                                        backgroundSize: '400% 400%',
                                    }}
                                    animate={{
                                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />

                                {/* Inner white card */}
                                <div className="relative bg-white rounded-3xl m-1">
                                    {/* Music button with animation */}
                                    <motion.button
                                        onClick={() => setIsPlaying(!isPlaying)}
                                        className={`absolute top-4 right-4 ${isPlaying ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-pink-500 to-rose-500'} hover:from-pink-600 hover:to-rose-600 p-3 rounded-full z-20 shadow-lg`}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        animate={{
                                            rotate: isPlaying ? [0, 10, -10, 0] : 0,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            repeat: isPlaying ? Infinity : 0,
                                        }}
                                    >
                                        <Music size={24} className="text-white" />
                                    </motion.button>

                                    {/* Decorative hearts in corners */}
                                    <motion.div
                                        className="absolute top-4 left-4 text-2xl z-10"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 10, -10, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                    >
                                        💖
                                    </motion.div>

                                    {/* Media content */}
                                    <div className="relative p-4 flex items-center justify-center" style={{ minHeight: '300px', maxHeight: '60vh' }}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="w-full h-full flex items-center justify-center"
                                        >
                                            {selectedMedia.type === 'video' ? (
                                                <video
                                                    src={selectedMedia.src}
                                                    controls
                                                    autoPlay
                                                    className="rounded-2xl"
                                                    style={{
                                                        maxWidth: '100%',
                                                        maxHeight: '55vh',
                                                        width: 'auto',
                                                        height: 'auto',
                                                        objectFit: 'contain',
                                                        boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                                                    }}
                                                />
                                            ) : (
                                                <img
                                                    src={selectedMedia.src}
                                                    alt={selectedMedia.caption}
                                                    className="rounded-2xl"
                                                    style={{
                                                        maxWidth: '100%',
                                                        maxHeight: '55vh',
                                                        width: 'auto',
                                                        height: 'auto',
                                                        objectFit: 'contain',
                                                        boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                                                    }}
                                                    onError={(e) => {
                                                        e.target.src = 'https://via.placeholder.com/800x600/FFB6C1/FF69B4?text=Beautiful+Memory';
                                                    }}
                                                />
                                            )}
                                        </motion.div>
                                    </div>

                                    {/* Beautiful info section */}
                                    <motion.div
                                        className="p-4 bg-gradient-to-r from-pink-50 via-purple-50 to-rose-50"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <motion.h3
                                            className="text-2xl md:text-3xl font-dancing bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mb-2 flex items-center gap-2"
                                            animate={{
                                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                            }}
                                            transition={{
                                                duration: 5,
                                                repeat: Infinity,
                                            }}
                                        >
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.3, 1],
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                }}
                                            >
                                                <Heart className="w-6 h-6 fill-pink-500 text-pink-500" />
                                            </motion.div>
                                            {selectedMedia.caption}
                                        </motion.h3>

                                        <motion.p
                                            className="text-sm md:text-base text-gray-700 mb-2 italic"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            {selectedMedia.description}
                                        </motion.p>

                                        <motion.div
                                            className="flex items-center justify-between gap-4 mb-3"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            {/* Date and emojis on left */}
                                            <div className="flex items-center gap-2">
                                                <div className="flex items-center gap-2 text-pink-600 text-sm">
                                                    <Sparkles className="w-4 h-4" />
                                                    <span className="font-medium">{selectedMedia.date}</span>
                                                    <Sparkles className="w-4 h-4" />
                                                </div>

                                                {/* Floating emojis */}
                                                <div className="flex gap-2">
                                                    {['💕', '✨', '🌹', '💖', '😘'].map((emoji, i) => (
                                                        <motion.span
                                                            key={i}
                                                            className="text-xl"
                                                            animate={{
                                                                y: [0, -6, 0],
                                                                rotate: [0, 8, -8, 0],
                                                            }}
                                                            transition={{
                                                                duration: 2,
                                                                repeat: Infinity,
                                                                delay: i * 0.2,
                                                            }}
                                                        >
                                                            {emoji}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Back button on right - smaller */}
                                            <motion.button
                                                onClick={() => setSelectedId(null)}
                                                className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full shadow-lg font-medium text-sm"
                                                whileHover={{ scale: 1.05, x: -3 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <ArrowLeft size={16} />
                                                <span>Back</span>
                                            </motion.button>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Memories;
