import React from 'react';
import style from './Header.module.scss';

import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Menu',
    link: '/link',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '/pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '/legendaries',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '/documentation',
  },
];

const Header = () => {
  return (
    <div className={style.root}>
      <div className={style.wrap}>
        <div className={style.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={style.menuWrap}>
          {MENU.map(({ id, value, link }) => (
            <a className={style.menuLink} href={link} key={id}>
              {value}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
