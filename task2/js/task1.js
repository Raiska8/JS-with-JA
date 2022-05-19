let userName;
userName = prompt("Как Вас зовут?", "Ваше имя");

//Дана строка 'ddd@bbb@ccc'. Замените все @ на '!'

let str = "ddd@bbb@ccc";
document.write((`Дана строка 'ddd@bbb@ccc'. Замените все @ на '!':`) + "     " +(str.replaceAll("@", "!")) + "<br>");

