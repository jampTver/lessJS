//2) Создайте переменную, в нее поместите текст Hello World
let messageOne = "Hello Word";

//3) Выведите содержимое переменной во всплывающем сообщении(alert)
alert(messageOne);

//4) Создайте переменную с типом boolean и number
let peremBool=true;
let peremNum=111;

//5) Сложите boolean и number переменные и выведите результат с помощью alert
alert(peremBool+peremNum);

/*
6) Перепишите 'if..else' в '?'
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
*/
let message;
let login = prompt("Введите имя пользователя", "Директор");
login == 'Сотрудник'

					?
					message = 'Привет'
					:
						login == 'Директор'
										?
										message = 'Здравствуйте'
										:
										login == ''
													?
													message = 'Нет логина'
													:
													message = '';

alert(message);
													

//7) Напишите условие if для проверки, что переменная age находится в диапазоне между 18 и 80 включительно.
//«Включительно» означает, что значение переменной age может быть равно 18 или 80.
let age = prompt("Введите свой возраст", 19);
if (age >=18 && age <= 80)	{
					alert("Возраст подходящий")
					}
			 else 
					{
					alert("Возраст не соответствует критериям");
					}


//8) При помощи цикла for выведите нечётные числа от 1 до 9. Затем, замените for на while.

for (let i=1; i<=9; i++) {
							
							i%2!=0?alert("for "+i):null
}

let i=1
while (i<=9) {
				i%2!=0?alert("while "+i):null;
				i++;
}

//9) Напишите функцию max(a,b), которая возвращает большее из чисел a и b."
function max(a, b) {
  if (Number(a)>Number(b)) {
		return a;
			}
		else {
			return b;
		}
}		
let a = prompt("Введите первое число");
let b = prompt("Введите второе число");
if (isNaN(+a) || isNaN(+b) || a=='' || b=='') {
										alert("Вы не знаете, что такое число?")
										}
									else alert(max(a, b));