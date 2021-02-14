const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => reject('err'), 2000);
});

fetch('')
  .then((result) => {
    alert(result);
    return Promise.resolve(5);
  })
  .then((res) => {
    console.log('res', res);
  })
  .catch((err) => alert(err))
  .finally(() => alert('Промис завершён'));

// 1.1. Промисифицировать setTimeout() : напишите функцию delay(ms),
// которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
// Должен быть возможен вот такой вызов delay(ms).then(doSomething)

// Пример использования и эквивалетный вызов setTimeout():
// delay(1000)
// .then(() => alert("Hello!"))

// setTimeout(()=> alert("Hello!"),1000)

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('result');
//     }, ms);
//   });
// }

// delay(1000).then(() => alert('Hello!'));

// function delay(ms) {
//   if (!Number.isNaN(ms)) {
//     return new Promise((resolve, reject) =>
//       setTimeout(() => resolve('Promise fullfilled'), ms)
//     );
//   } else {
//     throw new Promise((resolve, reject) =>
//       setTimeout(() => reject(TypeError('Not a number')), ms)
//     );
//   }
// }

// delay(4)
//   .then((result) => console.log(result))
//   .catch((err) => {
//     console.log(err);
//   });

//---------------------------------------------------------------------------------------------------

// 1.2. Напишите функцию, которая последовательно выводит в консоль числа от 1 до 20,
// с интервалом между числами 100мс. То есть, весь вывод должен занимать 2000мс,
// в течение которых каждые 100мс в консоли появляется очередное число.
// Решение задачи должно использовать setTimeout. (По циклу таймеры не создавать)

// for (let i = 1; i <= 20; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// То же, но с setInterval
// let from = 1;
// const to = 20;

// const intId = setInterval(() => {
//   from <= to ? console.log(from++) : clearInterval(intId);
// }, 100);

// let i = 1;
// let intervalId = setInterval(() => {
//   console.log(i++);
//   if (i == 21) clearInterval(intervalId);
// }, 1000);

// let i = 1;
// setTimeout(function run() {
//   console.log(i++);
//   if (i < 21) {
//     setTimeout(run, 100);
//   }
// }, 100);

// const timerId = setTimeout(() => {
//   console.log('Hello');
// }, 2000);
// clearTimeout(timerId);

//---------------------------------------------------------------------------------------------------

// 2 Задача:
// 2.1) Создать promise для каждого типа (number, boolean, string, symbol, null, undefined, object )

// const numPromise = Promise.resolve(5);
// const boolPromise = Promise.resolve(true);
// const stringPromise = Promise.resolve('Hello!');
// const symbolPromise = Promise.resolve(Symbol('MySymbol'));
// const nullPromise = Promise.resolve(null);
// const undPromise = Promise.resolve(undefined);
// const objPromise = Promise.resolve({ id: 36 });

// console.log('numPromise', numPromise);

// numPromise.then((result) => {
//   console.log('result', result);
// });

// 2.2) создать асинхронную функцию для их console.log
//async await

// promiseLogger(stringPromise);

// async function promiseLogger(loggedValue) {
//   console.log('loggedValue', await loggedValue);
// }

//---------------------------------------------------------------------------------

// Динамически менять цвет фигуры

// const figure = document.getElementById('figure');

// function ChangeColor(elem) {
//   setInterval(() => (elem.style.backgroundColor = 'blue'), 2000);
// }

// ChangeColor(figure);

// const figure = document.getElementById('figure');

// setInterval(changeFigureColor, 2000);

// function changeFigureColor() {
//   if (figure.style.backgroundColor == 'red') {
//     figure.style.backgroundColor = 'blue';
//   } else {
//     figure.style.backgroundColor = 'red';
//   }
// }

// const figure = document.getElementById('figure');

// setInterval(changeFigureColor, 10);

// let colorIndex = 0;

// function changeFigureColor() {
//   figure.style.backgroundColor = `rgb(${colorIndex++ % 256},0,0)`;
// }
