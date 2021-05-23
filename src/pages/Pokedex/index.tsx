import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading';

import PokemonCard from '../../components/PokemonCard';

import req from '../../utils/request';

interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

interface IPokemon {
  name_clean: string;
  abilities: Array<string>;
  stats: PokemonStats;
  types: Array<string>;
  img: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}

interface IData {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: Array<IPokemon>;
}

interface IPokemons {
  data: IData | undefined;
  isLoading: boolean;
  isError: boolean;
}

const usePokemons = (): IPokemons => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const res = await req('getPokemons');
        setData(res);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const Pokedex: React.FC = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Ups Error</div>;
  }

  return (
    <div>
      <Heading type={1}>TotalPokemons {data?.total}</Heading>
      {data?.pokemons.map((pokemonData) => (
        <PokemonCard
          name={pokemonData.name_clean}
          attack={pokemonData.stats.attack}
          defense={pokemonData.stats.defense}
          image={pokemonData.img}
          types={pokemonData.types}
          key={pokemonData.id}
        />
      ))}
    </div>
  );
};

export default Pokedex;
