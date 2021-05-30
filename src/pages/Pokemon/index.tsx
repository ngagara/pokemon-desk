import React from 'react';
import useData from './../../hook/getData';
import { pokemonsRequest } from './../../interface/pokemons';

export interface PokemonProps {
    id: string | number
}

const PokemonPage: React.FC<PokemonProps> = ({ id }) => {
    
    const { data, isLoading } = useData<pokemonsRequest>('getPokemon', {id});

    if (isLoading) {
        return<>Loading...</>
    }
 
    console.log(data?.name);
    

    return (
        <div>

            poke {data?.name}
            
        </div>
    );
};

export default PokemonPage;
