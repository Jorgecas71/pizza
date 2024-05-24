// ingredientes para hacer la masa.

const masa = ["harina", "aceite", "agua", "levadura","sal"];

// ingerdientes de pizza.

let ingredientes =["champiñones", "aceitunas", "jamón", "bacon", "chorizo","atún","oregano","rúcula","alcaprras","piña","tomate cherry","queso ,mozzarella","albahaca","sal","aceite de oliva virgen extra","pimienta negra molida","pollo","pavo","chiles","carne de cerdo","alcachofas","aceitunas negras","queso cabrales","queso gorgonzola","queso curado","queso parmesano rallado","queso azul","queso curado","queso roquefort","queso peccorino rallado","pepperoni",]

//ingredientes que utilizamos para hacer la mezcla de masa de pizza.

function mezclarMasa() {
    console.log("400 gramos de" +" " + masa[0]);
    console.log("2 ml de" + " " + masa[2]);
    console.log("2 cucharadas de" + " " + masa[1]);
    console.log("una pizca de" + " " + masa[4]);
    console.log("15 gramos de" + " " + masa[3]);
}

console.log(mezclarMasa());

//después de mezclar los ingredientes amasamos.

function amasarMezcla() {
    console.log("amasar mezcla unos 5 minuto hasta que hagamos una bola y se maneje bien para poder estirar la masa");
}
 
console.log(amasarMezcla());

// añadimos queso y tomate como ingredientes base.

let queso;
let tomate;

function ingredientesBase() {
    console.log("añadimos ingredientes base" + " "+ "queso" + " " + "tomate");
}

console.log(ingredientesBase());

