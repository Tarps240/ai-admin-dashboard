import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import { motion } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <motion.div
          className="ml-64 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Add other routes here */}
          </Routes>
        </motion.div>
      </div>
    </Router> 
  );
}

export default App;