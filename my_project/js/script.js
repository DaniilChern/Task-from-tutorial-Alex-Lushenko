var goods = {
	"dd" : {
		"name": "Яблоки",
      "cost": 78,
      "img":"https://cdn3.iconfinder.com/data/icons/fruits-8/512/apple-128.png"
	},
	"dc" : {
		"name": "Груши",
      "cost": 23,
      "img":"https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_pera-128.png"
	},
	"cd" : {
		"name": "Абрикосы",
      "cost":8,
      "img":"https://cdn2.iconfinder.com/data/icons/fruits-3/128/apricots-128.png"
	},
	"dee" : {
		"name": "Сливы",
      "cost": 69,
      "img":"https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_ameixa-128.png"
	},
	"dd2" : {
		"name": "Вишни",
      "cost": 21,
      "img":"https://cdn3.iconfinder.com/data/icons/spring-23/32/cherry-cherries-berry-berries-fruit-food-spring-128.png"
   }
};
  
 /* var out =" ";
  for ( var key in goods){
     out += " наименование:"+" "+ goods[key].name+ "<br>";
     out += " цена:"+" "+ goods[key].cost+"руб."+ "<br>"+"<br>";
  };
  document.getElementById("out").innerHTML = out};*/

  var cost;
  var out=" ";
 for (var key in goods ){
   cost = goods[key].cost;
   if (cost >20) { 
      out += '<img src="'+ goods[key].img+ '">'+"<br>"+"<br>";
      out += " наименование:"+" "+ goods[key].name+ "<br>";
     out += " цена:"+" "+ goods[key].cost+"руб."+ "<br>"+"<br>";
     
   };
   document.getElementById("out").innerHTML = out};
  
 