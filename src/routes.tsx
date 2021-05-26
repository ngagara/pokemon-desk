import React, { PropsWithChildren } from 'react';
import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex';
import Legendaries from './pages/Legendaries';
import Documentation from './pages/Documentation';
import PokemonPage from './pages/Pokemon';
import { PokemonProps } from './pages/Pokemon/index';

interface IGeneralMenu {
  title: string;
  link: string;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOKUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id'
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'HOME',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <Legendaries />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOKUMENTATION,
    component: () => <Documentation />,
  },
];

export const SECOND_ROUTES: IGeneralMenu[] = [
  {
    title: 'POKEMON',
    link: LinkEnum.POKEMON,
    component: ({id}: PokemonProps) => <PokemonPage id={id}/>,
  },
];



interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
