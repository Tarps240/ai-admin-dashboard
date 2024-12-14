import React from 'react';
import { motion } from 'framer-motion';

const Sidebar = () => {
    return (
        <motion.div
            className='bg-black text-white w-64 h-full p-6 fixed left-0 top-0'
            initial={{ x: -250 }} // Initially hidden off screen.
            animate={{ x: 0 }} // Animates to its normal position.
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
            <h2 className='text-xl font-bold text-red-500'>Admin Dashboard</h2>
            <ul className='mt-8 space-y-4'>
                <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">Home</motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">Settings</motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">Reports</motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">Users</motion.li>
            </ul>
        </motion.div>
    );
};

export default Sidebar;