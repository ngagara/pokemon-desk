import React, { useState } from 'react';
import Heading from '../../components/Heading';

import PokemonCard from '../../components/PokemonCard';

import useData from '../../hook/getData';
import { IPokemons, pokemonsRequest } from '../../interface/pokemons';

interface Query {
  name?: string
}

const Pokedex: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<Query>({});

  const handleSerachChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setQuery((state: Query) => ({
      ...state, name: event.target.value
    }))
  }

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [searchValue]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Ups Error</div>;
  }

  return (
    <div>
      <Heading type={1}>TotalPokemons {!isLoading && data?.total}</Heading>
      <input type='text' value={searchValue} onChange={handleSerachChange}></input>
      {!isLoading && data && data.pokemons.map((pokemonData: pokemonsRequest) => (
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
