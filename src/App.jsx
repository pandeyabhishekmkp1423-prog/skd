import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <AppRouter />
      </AnimatePresence>
    </BrowserRouter>
  );
}
