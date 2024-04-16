const h5 = document.getElementById('textoH5');

let lista = [];

function productoA(nombre, descripcion, precio) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
}


function carrito(producto, descripcion, precio) {
    let prodAct = new productoA(producto, descripcion, precio);
    lista.push(prodAct);
    console.log(lista);
}

function mensajeDeAlerta() {
    alert(lista);
    listadoP()
}

function listadoP() {
    for (let i = 0; i < lista.length; i++) {
        if (i == 0) {
            document.createElement('div').innerHTML = "NO SE ENCUENTRAN PRODUCTOS"
            h5.appendChild(div);
        }
       else {
        let div = document.createElement('div');
        div.innerHTML = lista.indexOf(i);
        h5.appendChild(div);
       }
    }
};

// let comida2 = new productoA("fanta", "gaseosa 300ml", 1000);
// lista.push(comida2)
// console.log(lista);

