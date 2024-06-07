// ingerdientes de  mazza de pizza.

const masa = ["harina", "aceite", "agua", "levadura","sal"];

// ingerdientes para añadir a la pizza.

let ingredientes = ["champiñones", "jamón", "bacon","oregano","rúcula","mozzarella","albahaca","sal","aceite de oliva virgen extra","aceitunas negras","gorgonzola","queso curado","parmesano rallado","pepperoni"];

// preparando pizza pepperonni.

function preparationPizza() {
    console.log("Pizza" + " " +" Pepperonni" + " " + "in" + " " + "preparation");
}

console.log(preparationPizza());

// preparando masa.

function estirarMasa() {
    console.log("cogiendo" + " " +"y" + " " + "estirando" + " " + "la" +"masa");

}
console.log(estirarMasa());

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

//añadimos ingrediente.

function añadirIngredientes() {
    console.log("añadimos ingrediente" + " " + ingredientes[5]);
    console.log("añadimos ingrediente" + " " + ingredientes[13]);
}

console.log(añadirIngredientes());


//horneando la pizza.

function horneandoPizza() {
    console.log("horneando" + " " +" la" + " " + "pizza");
}

console.log(horneandoPizza());

//pizza lista.

function pizzaReady() {
    console.log("pizza" + " " +"ready");
}

console.log(pizzaReady());

//pizza entregada.

function pizzaEntregada() {
    console.log("pizza" + " " +"Entregada");
}

console.log(pizzaEntregada());








