import React from 'react';
import { navigate } from 'hookrouter';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';

import style from './Home.module.scss';

import { LinkEnum } from '../../routes';

const HomePage = () => {
  return (
    <div className={style.root}>
      <Layout className={style.layout}>
        <div className={style.txtContainer}>
          <Heading type={1}>Find all your favorite Pokemon</Heading>
          <Heading type={2}>You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See pokemon</Button>
        </div>
        <Parallax />
      </Layout>
    </div>
  );
};

export default HomePage;
