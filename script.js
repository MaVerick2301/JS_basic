var tempCelsius = 45;
var tempFahrenheit = (9 / 5) * tempCelsius + 32;
tempFahrenheit = tempFahrenheit.toFixed();
alert(tempFahrenheit);

var admin;
var name;
name = 'Василий';
admin = name;
alert(admin);

var myVar = 1000 + '108'; //результатом будет 1000108, данные будут приведены к строчному типу и произойдет конкатенация
alert(typeof myVar);