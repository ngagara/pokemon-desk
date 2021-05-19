import React from 'react';
import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex';
import Legendaries from './pages/Legendaries';
import Documentation from './pages/Documentation';

const routes = {
  '/': () => <HomePage />,
  '/pokedex': () => <Pokedex />,
  '/legendaries': () => <Legendaries />,
  '/documentation': () => <Documentation />,
};

export default routes;
