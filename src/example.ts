type TypeFnc = (firstStr: string, secondStr: string) => string;

const concat: TypeFnc = (firstStr, secondStr) => {
  return firstStr + secondStr;
};

concat('Hello ', 'World'); // -> Hello World;

interface Hometask {
  howIDoIt: string;
  simeArray: (string | number)[];
  withData: { howIDoIt: string; simeArray: (string | number)[] }[];
}

const myHometask: Hometask = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

// eslint-disable-next-line no-console
console.log(myHometask);

interface MyArr<T> {
  [N: number]: T;
  reduce(fn: (init: T, el: T, i: number, arr: T[]) => T): T;
}

const tsArr: MyArr<number> = [1, 2, 3, 4];

// eslint-disable-next-line no-console
console.log(tsArr);
