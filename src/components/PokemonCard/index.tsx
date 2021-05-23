import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IPokemonCardProps {
  name: string;
  attack: string | number;
  defense: string | number;
  types: string[];
  image: string;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ name, attack, defense, types, image }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading type={3}>{name}</Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>{types}</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
