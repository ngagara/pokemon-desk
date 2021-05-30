import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {

    test('Функция которая возвращает строки начинающиеся с заглавной буквы', () => {
        const res = toCapitalizeFirstLetter('some string');
        expect(res).toBe('Some string');
    })

});