/*
1) Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 4.
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
P.S. Убедитесь, что значение свойства числовое.
*/
let objFirst = {
				First: 22,
				Second: "Test",
				Third: 7,
				Fourth:99,
				Fifth: "Wow"
}
				
function multiplyNumeric(obj) {
for (let key in obj) {
					if (typeof obj[key]=='number') {
					obj[key]*=4;}
					}
}


multiplyNumeric(objFirst);
for (let key in objFirst) {
					alert(objFirst[key]);
}


/*
2) Создайте объект calculator (калькулятор) с тремя методами:
- read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
- sum() (суммировать) возвращает сумму сохранённых значений.
- mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/

let calculator = {
  read: function() {
	  this.a=+prompt('Введити число "a"');
	  this.b=+prompt('Введити число "b"');
  },
  sum: function(){
	  alert(this.a+this.b);
  },
  mul: function() {
	  alert(this.a*this.b)
  }
};

calculator.read();
calculator.sum();
calculator.mul();

/*
3) Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
let user = {
  name: "Василий Иванович",
  age: 35
};
*/
let user = {
  name: "Василий Иванович",
  age: 35
};
let jsonUser = JSON.stringify(user, null, 2)
alert(jsonUser)

let user2 = JSON.parse (jsonUser)
alert(user2.name)
