//Завдання 1

const drink = prompt('Виберіть щось: "Кава", "Чай", "Сік"');

switch (drink){
  case "Кава":
    alert("Ви вибрали Каву");
    break;

  case "Чай":
    alert("Ви вибрали Чай");
    break;

  case "Сік":
    alert("Ви вбрали Сік");
    break;

  default:
    alert("Виберіть щось із списку");
}


//Завдання 2

const day = prompt("Введіть день тижня");

switch (day){
  case "Понеділок":
    alert("Це робочий день");
  break;

  case "Вівторок":
    alert("Це робочий день");
  break;

  case "Середа":
    alert("Це робочий день");
  break;

  case "Четверг":
    alert("Це робочий день");
  break;

  case "П'ятниця":
    alert("Це робочий день");
  break;

  case "Субота":
    alert("Це вихідний день");
  break;

  case "Неділя":
    alert("Це вихідний день");
  break;

  default: 
    alert("Введіть день тижня!");
}


//Завдання 3

const numberMonth = Number(prompt('Введіть місяць порядком цифрою'));

switch (numberMonth){ 
  case 1: 
    alert('Це місяць зими. В цьому місяці 31 день');
  break;

  case 2: 
    alert('Це місяць зими. В цьому місяці 28 днів');
  break;

  case 3: 
    alert('Це місяць весни. В цьому місяці 31 день');
  break;

  case 4: 
    alert('Це місяць весни. В цьому місяці 30 днів');
  break;

  case 5: 
    alert('Це місяць весни. В цьому місяці 31 день');
  break;

  case 6: 
    alert('Це місяць літа. В цьому місяці 30 днів');
  break;

  case 7: 
    alert('Це місяць літа. В цьому місяці 31 день');
  break;

  case 8: 
    alert('Це місяць літа. В цьому місяці 31 день');
  break;

  case 9: 
    alert('Це місяць осені. В цьому місяці 30 днів');
  break;

  case 10: 
    alert('Це місяць осені. В цьому місяці 31 день');
  break;

  case 11: 
    alert('Це місяць осені. В цьому місяці 30 днів');
  break;

  case 12: 
    alert('Це місяць зими. В цьому місяці 31 день');
  break;

  default: 
    alert('Ведіть місяць в числовому виді!');
}


//Завдання 4 

const lengthMonth = Number(prompt('Введіть місяць порядком цифрою'));

switch (lengthMonth){ 
  case 1: 
    alert('В цьому місяці 31 день');
  break;

  case 2: 
    alert('В цьому місяці 28 днів');
  break;

  case 3: 
    alert('В цьому місяці 31 день');
  break;

  case 4: 
    alert('В цьому місяці 30 днів');
  break;

  case 5: 
    alert('В цьому місяці 31 день');
  break;

  case 6: 
    alert('В цьому місяці 30 днів');
  break;

  case 7: 
    alert('В цьому місяці 31 день');
  break;

  case 8: 
    alert('В цьому місяці 31 день');
  break;

  case 9: 
    alert('В цьому місяці 30 днів');
  break;

  case 10: 
    alert('В цьому місяці 31 день');
  break;

  case 11: 
    alert('В цьому місяці 30 днів');
  break;

  case 12: 
    alert('В цьому місяці 31 день');
  break;

  default: 
    alert('Ведіть місяць в числовому виді!');
}


// Завдання 5

const trafficLights = prompt("Світлофор має 3 кольори, напишіть один із них: 'червоний', 'зелений', 'жовтий'");

switch (trafficLights){
    case "червоний":
        alert("Червоний колір означає СТОП!");
    break;

    case "зелений":
        alert("Зелений колір означає ЙТИ!");
    break;

    case "жовтий":
        alert("Жовтий колір означає ЧЕКАТИ!");
    break;

    default:
        alert("Напишіть колір світлофору: 'червоний', 'зелений', 'жовтий'");
}


// Завдання 6

const numberOne = Number(prompt('Введіть перше число'));
const numberTwo = Number(prompt('Введіть друге число'));
const plusMinus = prompt("Введіть дію +, -, *, /.");
let result = '';

switch (plusMinus){
  case '+':
    result = numberOne + numberTwo;
    alert('Ваш результат = ' + result); 
  break; 

  case '-': 
    result = numberOne - numberTwo;
    alert('Ваш результат = ' + result);
  break;

  case '*': 
    result = numberOne * numberTwo;
    alert('Ваш результат = ' + result);
  break; 

  case '/': 
    result = numberOne / numberTwo;
    alert('Ваш результат = ' + result);
  break;

  default: 
    alert('Ви неправильно вписали данні!');
}