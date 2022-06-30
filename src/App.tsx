import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import Navbar from './component/Navbar';
import Footer from './component/Footer';
import LandingPage from './pages/LandingPage';
import Article from './pages/Article';
import Diagnose from './pages/Diagnose';
import Schedule from './pages/Schedule';
import NotFound from './pages/NotFound';
import Nutrition from './pages/Nutrition';

const AppRouter = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path="/" element={<LandingPage />} />
    <Route path="/article" element={<Article />} />
    <Route path="/nutrition" element={<Nutrition />} />
    <Route path="/diagnose" element={<Diagnose />} />
    <Route path="/schedule" element={<Schedule />} />
  </Routes>
);

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Provider store={store}>
        <AppRouter />
      </Provider>
      <Footer />
    </ChakraProvider>
  );
}
