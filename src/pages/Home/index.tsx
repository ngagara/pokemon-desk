import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';

import style from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={style.root}>
      <Header />
      <Layout className={style.layout}>
        <div>
          <Heading lvl={1}>Find all your favorite Pokemon</Heading>
          <Heading lvl={2}>You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button onClick={() => {}}>See pokemon</Button>
        </div>
        <Parallax />
      </Layout>
    </div>
  );
};

export default HomePage;
