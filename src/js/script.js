// Работа в современом режиме, где не работают
// некоторые неточности из старых стандартов
'use strict';
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

// // пробую обратиться к элементу массива
// // и узнать длинну массива
// const answers = [];
// answers[0] = 1;
// answers[1] = 'a';
// answers[2] = '2';
// answers[3] = [4, 'd', 3];
// console.log(typeof answers[0]);
// console.log(typeof(answers[1]));
// console.log(typeof(answers));
// console.log(answers.length);
// console.log(answers[3].length);
// console.log(typeof(answers[3][2]));
// console.log(typeof(answers[3][1]));
// console.log (answers[0] + (answers[3][0] - answers[3][2]));

// // null отдельный тип даныых, но определяется как объект
// console.log(typeof(null));

// есть команды домтупные только в браузере,
// и наоборот – существующие только в node.js

// // использование `бэктиков`
// const category = `toys`;
// console.log(`https://someurl.com/${category}/5`);
// const user = `Mike`;
// console.log(`Hello, ${user}`);

// // Операторы
// // Конкатинация. унарный плюс ставится перед каким-то аргументом,
// // чтобы рассматривать его как число
// console.log('arr' + " - object");
// console.log(4 + " - object");
// console.log(4 + +"4");

// // Инкремент и декремент. Переменные можно задавать через запятую.
// // Можно писать до и после аргумента – префикс и постфикс
// // Если использовать эти операторы сразу, то постфикс будет
// // выполняться после обращения оператора/функции к переменной
// // У постфикса приоритет выше чем у префикса
// let incr = 10,
//     decr = 10;
// incr++;
// --decr;
// console.log(incr);
// console.log(decr);
// console.log(++incr);
// console.log(decr--);
// console.log(decr);

// // Остаток от деления
// console.log(5%2);

// // = присваивание
// // == оператор проверки на равенство 4 = "4"
// // === строгая проверка на идентичность 4 ≠ "4"
// console.log(4 == '4');
// console.log(2*4 === 8);

// // Порядок выполнения операций
// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// // != это ≠
// // !== оператор проверки на неидентичность (=== наоборот)
// console.log(2 + 2 * 2 === 8);
// console.log((2 + 2) * 2 === 8);
// console.log(2 + 2 * 2 != 6);
// console.log(2 + 2 * 2 !== 6);
// console.log(2 + 2 * 2 !== '6');

// // && оператор И возвращает true, только если все варианты правдивы
// // || оператор ИЛИ возвращает true, если правдив хотя бы один вариант
// // ! отрицание
// const isChecked = true,
//       isClosed = false;
// console.log(!(isChecked && isClosed));
// let bingo = !isChecked || isClosed;
// console.log(bingo);






/* Задание на урок: -------------------------------------------------------

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');
// писать только через квадратные скобки
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);