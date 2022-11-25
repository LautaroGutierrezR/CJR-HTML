//const listaProductos=[Kit207,KitHilux,KitDuster,KitGoltrend,KitFordKA,KitClio];

let Kit207={
    Marca:"CJR",
    Precio:50000,
    Stock:1000,
}

let KitHilux={
    Marca:"CJR",
    Precio:50250,
    Stock:1000
}

let KitDuster={
    Marca:"CJR",
    Precio:50500,
    Stock:1000
}

let KitGoltrend={
    Marca:"CJR",
    Precio:50750,
    Stock:1000
}

let KitClio={
    Marca:"CJR",
    Precio:51000,
    Stock:1000,
}
let KitFordKA={
    Marca:"CJR",
    Precio:51250,
    Stock:1000,
}


function saludo(){
    let nombre=prompt("Como te llamas?")
    alert("Hola "+ nombre+"!")
}

let ClickSaludo = document.querySelector("#saludar");

ClickSaludo.addEventListener("click",saludo);



                    // vinculando botones del html productos con js
let ClickKa = document.querySelector("#BotonKa");
let ClickClio = document.querySelector("#BotonClio");
let ClickDuster = document.querySelector("#BotonDuster");
let ClickGol = document.querySelector("#BotonGol");
let Click207 = document.querySelector("#Boton207");
let ClickHilux = document.querySelector("#BotonHilux");

let ClickKa2 = document.querySelector("#BotonKa2");
let ClickClio2 = document.querySelector("#BotonClio2");
let ClickDuster2 = document.querySelector("#BotonDuster2");
let ClickGol2 = document.querySelector("#BotonGol2");
let Click2072 = document.querySelector("#Boton2072");
let ClickHilux2 = document.querySelector("#BotonHilux2");




function prueba() {
    carrito.precio += 1
    console.log(carrito.precio)
}
//prueba()

// funciones productos

function Ka(){
    KitFordKA.Stock -= 1
    carrito.precio += KitFordKA.Precio
    carrito.items += 1
    carrito.productos += "Kit Ford Ka, "
    alert("Kit Ford Ka se ha añadido al carrito exitosamente")
    console.log(carrito)
}
 

ClickKa.addEventListener("click",Ka);

ClickKa2.addEventListener("click",Ka);

function Clio(){
    KitClio.Stock -= 1
    carrito.precio += KitClio.Precio
    carrito.items += 1
    carrito.productos += "Kit Renault Clio, "
    alert("Kit Renault Clio se ha añadido al carrito exitosamente")
    console.log(carrito)
}

ClickClio.addEventListener("click",Clio);
ClickClio2.addEventListener("click",Clio);

function Duster(){
    KitClio.Stock -= 1
    carrito.precio += KitDuster.Precio
    carrito.items += 1
    carrito.productos += "Kit Renault Duster, "
    alert("Kit Renault Duster se ha añadido al carrito exitosamente")
    console.log(carrito)
}

ClickDuster.addEventListener("click",Duster);
ClickDuster2.addEventListener("click",Duster);

function Gol(){
    KitGoltrend.Stock -= 1
    carrito.precio += KitGoltrend.Precio
    carrito.items += 1
    carrito.productos += "Kit Volkswagen Gol Trend, "
    alert("Kit Volkswagen Gol Trend se ha añadido al carrito exitosamente")
    console.log(carrito)
}

ClickGol.addEventListener("click",Gol);
ClickGol2.addEventListener("click",Gol);

function doscientossiete(){
    Kit207.Stock -= 1
    carrito.precio += Kit207.Precio
    carrito.items += 1
    carrito.productos += "Kit Peugeot 207, "
    alert("Kit Peugeot 207 se ha añadido al carrito exitosamente")
    console.log(carrito)
}

Click207.addEventListener("click",doscientossiete);
Click2072.addEventListener("click",doscientossiete);

function Hilux(){
    Kit207.Stock -= 1
    carrito.precio += KitHilux.Precio
    carrito.items += 1
    carrito.productos += "Kit Toyota Hilux, "
    alert("Kit Toyota Hilux se ha añadido al carrito exitosamente")
    console.log(carrito)
}

ClickHilux.addEventListener("click",Hilux);
ClickHilux2.addEventListener("click",Hilux);

let carrito ={
    items:0,
    productos:[],
    precio:0,
}

let ClickCarrito = document.querySelector("#changuito");

function MostrarCarrito(){
    if (carrito.items===0){
        alert("Actualmente su carrito se encuenta vacio")
    }
    else{
        alert(JSON.stringify(carrito))
    }
}

ClickCarrito.addEventListener("click",MostrarCarrito);
