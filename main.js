//funcion constructora de productos de la tienda (precios en MXN)

class ProductoPC{
    constructor(id, nombre, specs, color, precio){
        this.id=id;
        this.nombre=nombre;
        this.specs=specs;
        this.color=color;
        this.precio=parseFloat(precio);
        this.disponible=true;
    }
    sumarIva(){
        return this.precio * 1.16;
    }
    mostrarProducto(){
        return "ID: "+this.id+"\nNombre: "+this.nombre+"\nEspecificaciones: "+this.specs+"\nColor: "+this.color+"\nPrecio: $"+this.precio+"\nPrecio mas IVA: $"+(this.sumarIva().toFixed(2));
    }
}

//creacion de nuevos productos dentro de un array
const productos = [];
productos.push(new ProductoPC("001","Grafica EVGA 3080Ti","Modelo FTW3 12GB GDDR6X","Negro", 18000));
productos.push(new ProductoPC("002","Procesador Intel Core i9-9900K","3.60GHz, 8-Core, 16MB Smart Cache","N/A", 7200));
productos.push(new ProductoPC("003","Procesador AMD Ryzen 9 7950X","4.50GHz, 16-Core, 64MB Cache","N/A", 12000));
productos.push(new ProductoPC("004","Fuente de Poder EVGA SuperNOVA","80 PLUS Platinum, 24-pin ATX, 135mm, 850W","Negro", 2950));
productos.push(new ProductoPC("005","Mouse Razer Naga Trinity","5G Sensor óptico - 3 placas laterales intercambiables","RGB", 1680));
productos.push(new ProductoPC("006","Grafica EVGA 3070Ti","Modelo FTW3 8GB GDDR6X","Negro", 13440));
productos.push(new ProductoPC("007","Tarjeta Madre ASUS ROG CROSSHAIR X670E","AMD Socket AM5 ATX Ryzen 7000","RGB", 18480));

/*Precio mas IVA de objeto (no incluido en consola por el momento)
console.log("El Precio mas el 16% de IVA seria:\n"+productos[0].sumarIva().toFixed(2));
*/

//recorrido de todos los productos de la tienda por consola
console.log("******* Recorrido de la tienda *******")
for(let i=0; i<productos.length; i++){
    console.log(productos[i].mostrarProducto());
}

// interaccion con usuario
do{
    alert("🖥️ Bienvendo a la tienda en linea de equipo de computo 🖥️")
    let comprobacion = prompt("Selecciona una opcion de productos:\n\nTarjetas Graficas: 1\nProcesadores: 2\nPerifericos: 3\nTarjetas Madre: 4\n\nSi deseas salir escribe Fin");
    if (comprobacion === "Fin" || comprobacion === "fin" || comprobacion === "FIN"){
        alert("Gracias por Visitar mi tienda 😄");
        break;
    }else{
        if (comprobacion == "1"){
            let comprobacion = prompt("Tenemos los siguienges articulos:\n"+"1: "+productos[0].nombre+"\n2: "+productos[5].nombre+"\nEscribe el numero de la que deseas conocer mas detalles:");
            if(comprobacion == "1"){
                alert(productos[0].mostrarProducto());
            }
            else if(comprobacion == "2"){
                alert(productos[5].mostrarProducto());
            }else{
                alert("Error en la opcion");
            }
        }else if (comprobacion == "2"){
            let comprobacion = prompt("Tenemos los siguienges articulos:\n"+"1: "+productos[1].nombre+"\n2: "+productos[2].nombre+"\nEscribe el numero de la que deseas conocer mas detalles:");
            if(comprobacion == "1"){
                alert(productos[1].mostrarProducto());
            }
            else if(comprobacion == "2"){
                alert(productos[2].mostrarProducto());
            }else{
                alert("Error en la opcion");
            }
        }else if (comprobacion == "3"){
            let comprobacion = prompt("Tenemos los siguienges articulos:\n"+"1: "+productos[3].nombre+"\n2: "+productos[4].nombre+"\nEscribe el numero de la que deseas conocer mas detalles:");
            if(comprobacion == "1"){
                alert(productos[3].mostrarProducto());
            }
            else if(comprobacion == "2"){
                alert(productos[4].mostrarProducto());
            }else{
                alert("Error en la opcion");
            }
        }else if (comprobacion == "4"){
            let comprobacion = prompt("Tenemos los siguienges articulos:\n"+"1: "+productos[6].nombre+"\nEscribe el numero de la que deseas conocer mas detalles:");
            if(comprobacion == "1"){
                alert(productos[6].mostrarProducto());
            }else{
                alert("Error en la opcion");
            }
        }else{
            alert("Error en la opcion 😵");
        }
    }
}
while (comprobacion = "Fin");