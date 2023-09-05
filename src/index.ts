import { concatenation } from './concatenation';

const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
  button.addEventListener('click', () => {
    concatenation(input.value, 'hello!');
  });
}

type Dog = {
  legs: 4;
  bark: () => void;
};

type Fish = {
  fins: 2;
  swim: () => void;
};

let pet: Dog | Fish;

// type guard function
function isDog(pet: Dog | Fish): pet is Dog {
  return 'bark' in pet;
}
function isFish(pet: Dog | Fish): pet is Fish {
  return 'swim' in pet;
}

// Перевіряємо, чи є наш вихованець собакою перед тим, як використовувати метод bark
if (isDog(pet) || isFish(pet)) {
  pet.bark(); // OK, тепер TypeScript знає, що pet - це Dog
} else {
  pet.swim(); // TypeScript знає, що якщо pet не Dog, то це має бути Fish
}


