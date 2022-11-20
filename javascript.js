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


let carrito ={
    items:0,
    productos:[],
    precio:0,
}
                    // vinculando botones del html productos con js
let ClickKa = document.querySelector("#BotonKa");
let ClickClio = document.querySelector("#BotonClio");
let ClickDuster = document.querySelector("#BotonDuster");
let ClickGol = document.querySelector("#BotonGol");
let Click207 = document.querySelector("#Boton207");
let ClickHilux = document.querySelector("#BotonHilux");


function prueba() {
    carrito.precio += 1
    console.log(carrito.precio)
}
prueba()

// funciones productos

function Ka(){
    KitFordKA.Stock -= 1
    carrito.precio += KitFordKA.Precio
    carrito.items += 1
    carrito.productos += "Kit Ford Ka, "
    alert("Kit Ford Ka se ha anadido al carrito exitosamente")
    console.log(carrito)
}
 

ClickKa.addEventListener("click",Ka);

function Clio(){
    KitClio.Stock -= 1
    carrito.precio += KitClio.Precio
    carrito.items += 1
    carrito.productos += "Kit Renault Clio, "
    alert("Kit Renault Clio se ha anadido al carrito exitosamente")
    console.log(carrito)
}

ClickClio.addEventListener("click",Clio);


function Duster(){
    KitClio.Stock -= 1
    carrito.precio += KitDuster.Precio
    carrito.items += 1
    carrito.productos += "Kit Renault Duster, "
    alert("Kit Renault Duster se ha anadido al carrito exitosamente")
    console.log(carrito)
}

ClickDuster.addEventListener("click",Duster);


function Gol(){
    KitGoltrend.Stock -= 1
    carrito.precio += KitGoltrend.Precio
    carrito.items += 1
    carrito.productos += "Kit Volkswagen Gol Trend, "
    alert("Kit Volkswagen Gol Trend se ha anadido al carrito exitosamente")
    console.log(carrito)
}

ClickGol.addEventListener("click",Gol);

function doscientossiete(){
    Kit207.Stock -= 1
    carrito.precio += Kit207.Precio
    carrito.items += 1
    carrito.productos += "Kit Peugeot 207, "
    alert("Kit Peugeot 207 se ha anadido al carrito exitosamente")
    console.log(carrito)
}

Click207.addEventListener("click",doscientossiete);

function Hilux(){
    Kit207.Stock -= 1
    carrito.precio += KitHilux.Precio
    carrito.items += 1
    carrito.productos += "Kit Toyota Hilux, "
    alert("Kit Toyota Hilux se ha anadido al carrito exitosamente")
    console.log(carrito)
}

ClickHilux.addEventListener("click",Hilux);