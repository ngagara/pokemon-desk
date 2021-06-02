import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
    test('Должны принммать два аргумента "getPokemons" и пустой объект, на выходе получть объект с полями pathname, protocol, host и пустым query', ()=> {
        const url = getUrlWithParamsConfig('getPokemons', {});

        expect(url).toEqual({
            protocol: 'http',
            host: 'zar.hosthot.ru',
            pathname: '/api/v1/pokemons',
            query: {}
        })
    });
    test('Должны принммать два аргумента "getPokemons" и { name: "Pikachu" }, на выходе получть объект с полями pathname, protocol, host и query c полем name:"Pikachu"', ()=> {
        const url = getUrlWithParamsConfig('getPokemons', { name: "Pikachu" });

        expect(url).toEqual({
            protocol: 'http',
            host: 'zar.hosthot.ru',
            pathname: '/api/v1/pokemons',
            query: { name: 'Pikachu'}
        })
    });
    test('Должны принммать два аргумента "getPokemon" и { id: 25 }, на выходе получть объект с полями pathname, protocol, host и пусты query"', ()=> {
        const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

        expect(url).toEqual({
            protocol: 'http',
            host: 'zar.hosthot.ru',
            pathname: '/api/v1/pokemon/25',
            query: {}
        })
    });
});