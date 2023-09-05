import { concatenation } from './concatenation';
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello!');
    });
}
let pet;
// type guard function
function isDog(pet) {
    return 'bark' in pet;
}
function isFish(pet) {
    return 'swim' in pet;
}
// Перевіряємо, чи є наш вихованець собакою перед тим, як використовувати метод bark
if (isDog(pet) || isFish(pet)) {
    pet.bark(); // OK, тепер TypeScript знає, що pet - це Dog
}
else {
    pet.swim(); // TypeScript знає, що якщо pet не Dog, то це має бути Fish
}
//# sourceMappingURL=index.js.map