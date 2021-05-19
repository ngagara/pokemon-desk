import React, { useEffect, useState } from 'react';

import s from './Parallax.module.scss';

import SmallPokeBallPng from './assets/pokeBall1.png';
import CloudPng from './assets/cloud1.png';
import PokeBallPng from './assets/pokeball2.png';
import CloudBigPng from './assets/cloud2.png';
import PikachuPng from './assets/pikachu.png';

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [screenX, screenY]);

  return (
    <div className={s.root}>
      <div
        className={s.cloud}
        style={{
          transform: `translate(${screenX * -0.01}px, ${screenY * -0.01}px)`,
        }}>
        <img src={CloudPng} alt="Cloud small" />
      </div>
      <div
        className={s.smallPokeBall}
        style={{
          transform: `translate(${screenX * 0.02}px, ${screenY * 0.02}px)`,
        }}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>

      <div
        className={s.cloudBig}
        style={{
          transform: `translate(${screenX * -0.03}px, ${screenY * -0.03}px)`,
        }}>
        <img src={CloudBigPng} alt="Cloud Big" />
      </div>
      <div
        className={s.pikachu}
        style={{
          transform: `translate(${screenX * -0.04}px, ${screenY * -0.04}px)`,
        }}>
        <img src={PikachuPng} alt="Pikachu throw PokeBall" />
      </div>
      <div
        className={s.pokeBall}
        style={{
          transform: `translate(${screenX * -0.035}px, ${screenY * -0.05}px)`,
        }}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
    </div>
  );
};

export default Parallax;
