/*Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.*/
const souvenirWeight = 75;
      accessoriesWeight = 122;


let souvenirAmount = prompt("Cколько сувениров купили?"),
    accessoriesAmount = prompt("Cколько безделушек купили?");

let sum = ((souvenirWeight * souvenirAmount) + (accessoriesWeight * accessoriesAmount));
alert("Oбщий вес посылки " + sum + "г" );
//document.write(`Oбщий вес посылки ${sum}г`);
document.write(`Общий вес посылки: ${sum}`+ " г." + "<br>" );
console.log(`Oбщий вес посылки ${sum}г`);