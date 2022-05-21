/*5. Создайте программу, которая запрашивает у пользователя два целых числа **a** и **b**, после чего выводит на экран результаты следующих математических операций: 
    
    - сумма a и b; 
    
    - разница между a и b;
    
    - произведение a и b; 
    
    - частное от деления a на b; 
    
    - остаток от деления a на b;  
    
    - результат возведения числа a в степень b*/

    /*let a = 30;
    let b = 3
    console.log(a + b); // +
    document.write(`сумма a и b: ${a + b}` + "<br>");

    console.log(a - b); // -
    document.write(`разница между a и b : ${a - b}` + "<br>");

    console.log(a * b); // *
    document.write(`произведение a и b: ${a * b}`+"<br>");

    console.log(a / b); // /
    document.write(`частное от деления a на b: ${a / b}`+"<br>");

    console.log(a % b); // %
    document.write(`остаток от деления a на b: ${a % b}`+"<br>");

    console.log(a ** b); // **
    document.write(`результат возведения числа a в степень b* : ${a ** b}`+"<br>");*/

    let a = prompt("Выведите целое число?");
    a = Number(a);
    let b = prompt("Выведите целое число?");
    b = Number(b);
    document.write("сумма a и b = " + (a + b) + "<br>");
    document.write("разница между a и b = " + (a - b) + "<br>");
    document.write("произведение a и b = " + (a * b) + "<br>");
    document.write("частное от деления a на b = " + (a / b) + "<br>");
    document.write("остаток от деления a на b = " + (a % b) + "<br>");
    document.write("результат возведения числа a в степень b = " + (a ** b));

    console.log(`сумма a и b = ${a + b}`);
    console.log(`разница между a и b = ${a - b}`);
    console.log(`произведение a и b = ${a * b}`);
    console.log(`частное от деления a на b = ${a / b}`);
    console.log(`остаток от деления a на b = ${a % b}`);
    console.log(`результат возведения числа a в степень b = ${a ** b}`);

   

