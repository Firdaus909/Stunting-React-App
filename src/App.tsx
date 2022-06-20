import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './component/Navbar';
import Footer from './component/Footer';
import LandingPage from './pages/LandingPage';
import Article from './pages/Article';
import Diagnose from './pages/Diagnose';
import Schedule from './pages/Schedule';
import NotFound from './pages/NotFound';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/article" element={<Article />} />
      <Route path="/diagnose" element={<Diagnose />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  );
};

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <AppRouter />
    <Footer />
  </ChakraProvider>
);
