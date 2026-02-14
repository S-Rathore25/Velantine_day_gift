import React from 'react';
import { NavLink } from 'react-router-dom';
import { Camera, Heart, Mail, Clock, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

const tabs = [
  { id: 'memories', icon: Camera, label: 'Memories', path: '/memories' },
  { id: 'reasons', icon: Heart, label: 'Reasons', path: '/reasons' },
  { id: 'letter', icon: Mail, label: 'Letter', path: '/letter' },
  { id: 'countdown', icon: Clock, label: 'Time', path: '/countdown' },
  { id: 'surprise', icon: Gift, label: 'Surprise', path: '/surprise' },
];

const Navigation = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full px-4 pb-4 pt-2 z-50">
      <div className="glass rounded-2xl flex justify-between items-center px-4 py-3 shadow-lg">
        {tabs.map((tab) => (
          <NavLink
            key={tab.id}
            to={tab.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center transition-all duration-300 ${
                isActive ? 'text-pink-600 scale-110' : 'text-gray-400 hover:text-pink-400'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  animate={isActive ? { y: -5 } : { y: 0 }}
                >
                  <tab.icon
                    size={24}
                    fill={isActive ? 'currentColor' : 'none'}
                    strokeWidth={isActive ? 2 : 1.5}
                  />
                </motion.div>
                <span className={`text-[10px] font-medium transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 hidden'}`}>
                  {tab.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
