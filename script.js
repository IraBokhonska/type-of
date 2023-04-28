// 1.Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

const numberOneString = '0,1';
const numberTwoString = '0,2';

const numberOne = + numberOneString.replace(',', '.'); //заміна значення
const numberTwo = + numberTwoString.replace(',', '.');


const sum = numberOne + numberTwo;

console.log(+sum.toFixed(1));

console.log(typeof(+sum.toFixed(1)));

// можна використати parseFloat() приймає рядок як аргумент та повертає числове значення.

// 2.Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

const string = '1';
const number = 2;

const sumOfStringNumber = +string + number;

console.log(sumOfStringNumber);

// 3.Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
// 1Гб = 1024Мб

const memoryOfCard = 1024;
const memoryOfFile = 820;

const numberOfFiles = memoryOfCard / memoryOfFile;

console.log(Math.floor(numberOfFiles));

// 4. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. 
// Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const sumOfMoney = prompt('How many dollars do you have?');
const priceOfСhocolate = prompt('What is the price of the chocolate?');
const numberOfChocolates = Math.floor(sumOfMoney / priceOfСhocolate);
const remainder = sumOfMoney % priceOfСhocolate;
console.log(`You  can buy ${numberOfChocolates} chocolates. Your reminder is ${remainder}.`);
alert(`You  can buy ${numberOfChocolates} chocolates. Your reminder is ${remainder}.`);

// 5.Запитай у користувача тризначне число і виведи його задом наперед. 
// Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

const numberOfThree = prompt('Enter three-digit number.');
let reverseNumber = + numberOfThree.split('').reverse().join(''); // розділяє, перевертає, приєднує
let result = 0;
if (reverseNumber < 100) {
  result = (reverseNumber /100).toFixed(2); //у разі, коли останнє число 0
} else {
  result = reverseNumber;
}

console.log(`Reverse number is ${result}.`);
alert(`Reverse number is ${result}.`);


// 6.Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
const deposit = prompt('What is your deposit?');
const percent = 5;
const periodMonth = 2;
const profit = (deposit * 2 / 12 * 5 / 100).toFixed(2);
console.log(`Your profit is ${profit}.`);
alert(`Your profit is ${profit}.`);


// 7.Що повернуть вирази:
console.log(2 && 0 && 3); // 0
console.log(2 || 0 || 3 ); // 2
console.log(2 && 0 || 3); // 3