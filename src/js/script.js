// Работа в современом режиме, где не работают некоторые неточности из старых стандартов
"use strict";
// a = 15;
// console.log(a);

// alert(1);

// console.log(1);

// let num = 5;
// const leftBorderWidth = 1;
// num = 10;
// console.log(num);

// // В js нет строгих констант
// const obj = {
//     a: 50
// };
// obj.a = 10;
// console.log(obj);

// let name = 'Mike';
// name = 'Michael';
// name = 'Mikki';
// console.log(name);

// // Переменные объявленные в блоке не видны за его пределами
// let result = 55;
// {
//     const answer = 'SD';
//     result = 50;
//     result = 55;
//     console.log(answer + result);
// }
// console.log(result);

// // Для десятых используется точка
// let num = 4.6;
// console.log(-4/0);
// console.log('string' * 9);

// // Можно использовать двойные""" и одинарные'' кавычки, а также ``
// const person = `Mike`;

// const bool = true;

// // ReferenceError - ошибка ссылочного типа, при ссылке на объект которого нет
// console.log(something);

// // Undifined при обращении к пустой переменной или пустому объекту
// let und;
// console.log(und);

// // Лучше обращаться к свойствам объекта через точку,
// // но можно и через квадратные скобки поставив кавычки,
// // потому что имя свойства объекта не переменная.
// const obj = {
//     name: 'Mike',
//     age: 25,
//     isMarried: false
// }
// // console.log(obj.name);
// console.log(obj['name']);

// // Массив это частный случай объекта.
// // В каждый элемент можно записать данные любого типа(простые и объекты).
// // Элементы лежат по порядку начиная с нулевого объекта.
// //         0           1             2  3            4   5
// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[2]);

// // Вызывает предупреждение с текстом
// alert('Hello world');

// // confirm создаёт модальное окно с вопросом
// // и двумя вариантами ответа. Возвращает да/нет
// const result = confirm('Are u here?');
// console.log(result);

// // prompt создаёт модальное окно с инпутом,
// // куда можно прикрутить плэйсхолдер.
// // Для совеместимости с IE placeholder оставить пустым.
// // Плюс перед prompt указывает принимать ответ как число,
// // елси ответ не число запишет значение как NaN.
// const answer = prompt('Вам есть 18?', '18');
// console.log(answer + 5);
// console.log(+answer + 5);
// console.log(typeof(answer));
// console.log(typeof+(answer));

// // Массив
// const answers = [];
// answers[0] = prompt('Whatz your name?', 'Mike');
// answers[1] = prompt('Where RU from?', 'M83');
// answers[2] = prompt('Pss? ;)', 'Y');
// console.log(answers[0] + ', ' + answers[1] + ', ' + answers[2]);