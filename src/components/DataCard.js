import  { motion } from "framer-motion";

const DataCard = ({ title, balance, date}) => {
    return (
        <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-72"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }} // Hover effect for each card.
        >
            <div className="bg-teal-500 text-white p-2 rounded-t-lg">
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <div className="mt-4">
                <p className="text-gray-500">{date}</p>
                <h2 className="text-2xl font-bold mt-2">${balance}</h2>
            </div>
        </motion.div>

    );
};

export default DataCard;