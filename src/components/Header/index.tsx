import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';

import style from './Header.module.scss';

import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';
import { GENERAL_MENU } from '../../routes';

const Header = () => {
  const path = usePath();
  return (
    <div className={style.root}>
      <div className={style.wrap}>
        <div className={style.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={style.menuWrap}>
          {GENERAL_MENU.map(({ link, title }) => (
            <A className={cn(style.menuLink, { [style.activeLink]: link === path })} href={link} key={title}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
