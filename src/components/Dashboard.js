import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/data') // Change to Railway backend URL
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="bg-black p-6 space-y-4">
            <h1 className="text-3xl font-bold text-red-500 text-center">Admin Dashboard</h1>
            <div className="grid grid-cols-3 gap-4">
                {data.map((item, index) => (
                   <motion.div
                    key={index}
                    className='bg-white p-4 rounded-lg shadow-lg'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }} // Hover effect for scaling the card.
                   >                   
                       <h2 className="text-xl font-semibold">{item.title}</h2>
                       <p className="text-gray-500">{item.date}</p>
                       <p className="text-2xl font-bold">${item.balance}</p>
                    </motion.div>
                ))};
            </div>
        </div>
    );
};

export default Dashboard;