function pow() {
  var base = prompt('Введите число', '');
  var exp = prompt('Введите степень', '');
  var result = Math.pow(base, exp);
  console.log(result);
}

pow();


var users = [];

for (var i = 0; i < 5; i++) {
  users.push(prompt('Введите имя пользователя', ''));
}

console.log(users);

var userName = prompt('Имя пользователя', '');

for (var i = 0; i < 5; i++) {
	if (users[i] === userName && users[i] != null) {
    alert(userName + ', вы успешно вошли ');
	  break;
} else {
    alert('Ошибка');
    break;
  }
}
