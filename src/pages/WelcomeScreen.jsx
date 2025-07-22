import React from 'react';
import { motion } from 'framer-motion';

export default function WelcomeScreen({ onEnter }) {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center text-center px-6 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Selamat Datang 👋
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl max-w-xl mb-8 leading-relaxed"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Saya <span className="text-blue-400 font-semibold">Aidil Pramadita Putra</span>, mahasiswa Teknik Informatika di 
        <span className="text-indigo-400 font-medium"> UIN Sultan Syarif Kasim Riau</span>. 
        Saya berasal dari <span className="text-pink-400">Duri</span> dan memiliki minat di bidang 
        <span className="text-green-400"> web development, cybersecurity, musik, dan animasi</span>.
        Cita-cita saya adalah menjadi <span className="text-yellow-400">programmer yang menguasai berbagai bahasa pemrograman</span>.
      </motion.p>

      <motion.button
        onClick={onEnter}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Masuk ke Website
      </motion.button>
    </motion.div>
  );
}
