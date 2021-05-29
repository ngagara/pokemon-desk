import React from 'react';

export interface PokemonProps {
    id: string | number
}

const PokemonPage: React.FC<PokemonProps> = ({ id }) => {


    return (
        <div>
            poke{id}
            
        </div>
    );
};

export default PokemonPage;
