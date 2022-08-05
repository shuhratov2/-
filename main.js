// let number = +prompt('Son kiriting');
// let res = '';
// for (let i = 1; i <= number; i++) {
//     res = res + '*'
//     document.write(res + '<br>')
// }

// document.write(1);
// document.write(2);
// document.write(3);
// document.write(4);
// document.write(5);
// document.write(6);
// document.write(7);
// document.write(8);
// document.write(9);
// document.write(10);

// let num = +prompt('Введите число');
// for (let i = 1; i <= num; i++) {
//     if (i % 2 == 0) {

//     }

// }
// document.write(i + ' ');

// const time = new Date().getHours();
// let greeting;
// if (time < 10) {
//     greeting = "Good morning";
// } else if (time < 20) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// document.getElementById("demo").innerHTML = greeting;
// alert(greeting);

// const number = 15;
// number = 20;
// alert(number);



let savol = +prompt('Сколько вопросов задать?');
let s = 0;
for (let i = 1; i <= savol; i++) {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let res = +prompt(num1 + ' * ' + num2 + ' = ?');
    if (res == num1 * num2) {
        document.write(num1 + ' * ' + num2 + ' = ' + res + ' правильно!' + '<br>');
        s++;
    } else {
        document.write(num1 + ' * ' + num2 + ' = ' + res + ' неправильно (Ответ:' + (num1 * num2) + ')<br>');
    }
}
if (s == savol) {
    document.write('<br> Все ответы верны!');
} else {
    document.write('правильные ответы ' + s + ' ta <br> ');
    document.write('неправильные ответы ' + (savol - s) + 'ta <br> ');

}