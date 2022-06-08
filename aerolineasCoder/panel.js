class Usuario {
    constructor(nombre, vuelos) {
        //this.nombre = nombre;
        this.vuelos = vuelos;
    }
}

const calculaPrecio = (clase_, cantEquipaje_) => {
    // ECO = 100000; BUSSINESS = 150000; VIP = 200000
    let precio_;
    if (clase_ == 'ECO')
        precio_ = 100000;
    else if (clase_ == 'BUSINESS')
        precio_ = 150000;
    else if (clase_ == 'VIP')
        precio_ = 200000;
    else 
        alert("La clase ingresada no existe!");
    cantEquipaje_ >= 2 ? precio_ += 2000 * cantEquipaje_ : precio_;
    return precio_;
}

class Vuelo {
    constructor (_esNacional, _paisSalida, _paisDestino, _clase, _cantEquipaje, _dias) {
        this.esNacional = _esNacional;
        this.paisSalida  = _paisSalida;
        this.paisDestino = _paisDestino;
        this.clase = _clase;
        this.cantEquipaje = _cantEquipaje;
        this.dias = _dias;
        this.precio = calculaPrecio(_clase, _cantEquipaje);
    }
}

class Pais {
    constructor (_nombre, _capital, _continente) {
        this.nombre = _nombre;
        this.capital = _capital;
        this.continent = _continente;
    }
}

let paises = [];
/*
let usuarioActual;

export function createUsuario(nombre_) {
    usuarioActual = new Usuario(nombre_, []);
    localStorage.setItem(listaUsuarios.push(usuarioActual));
    // guardar en local storage: listaUsuarios

}

export function setUsuarioActual(nombre_) {
    // obtener lista usuarios desde local storage
    let listaUsuarios = localStorage.getItem(listaUsuarios);
    for (Usuario in listaUsuarios) {
        if (Usuario.nombre == nombre_) {
            usuarioActual = Usuario;
        }
    }
} */

let getNombresPaises = async() => {
    let lista = await fetch('https://restcountries.com/v3.1/all')
        .then( response => response.json() )
        .then( data => { return data })
    if (lista.length > 0) {
        var origen = document.getElementById('PaisOrigen');
        var destino = document.getElementById('PaisDestino');
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].capital != null) {
                paises.push(
                    new Pais(
                        lista[i].name.common.toUpperCase(),
                        lista[i].capital.toString(),
                        lista[i].continents.toString()
                    )
                );
                let itemOrigen = document.createElement('option');
                let itemDestino = document.createElement('option');
                itemOrigen.appendChild(document.createTextNode(lista[i].name.common.toUpperCase()));
                itemDestino.appendChild(document.createTextNode(lista[i].name.common.toUpperCase()));
                origen.appendChild(itemOrigen);
                destino.appendChild(itemDestino);
            }
        }
    }
};

document.getElementById("consultar").addEventListener("click",() => { 
    let origen = document.getElementById("PaisOrigen").value;//obtener seleccionado;
    let destino = document.getElementById("PaisDestino").value; //obtener destino
    let clase = document.getElementById("clase").value;
    let equipaje = document.getElementById("equipaje").value;
    let dias = document.getElementById("dias").value; 
    /*usuarioActual.vuelos.push(new Vuelo(
        origen == destino ? true : false,
        origen,
        destino,
        clase,
        equipaje,
        dias
    ))*/
    swal("Detalles del vuelo:", `Es nacional: ${origen == destino} \nPais de salida: ${origen} \nPais de destino: ${destino} \nClase: ${clase} \nCantidad de maletas: ${equipaje} \nDias: ${dias} \nPrecio: ${calculaPrecio(clase, equipaje)}`, "info");
})
/* VER LISTADO : document.getElementById("verListado").addEventListener("click",() =>{
    for(vuelo of usuarioActual.vuelos){
        // div1.innerHTML =""; borra la lista anterior
        p1.innnerText =  alert(`Lista:\nEs nacional: ${vuelo.esNacional} \nPais de salida: ${vuelo.paisSalida.nombre} \nPais de destino: ${vuelo.paisDestino.nombre} \nClase: ${vuelo.clase} \nCantidad de maletas: ${vuelo.cantEquipaje} \nDias: ${vuelo.dias} \nPrecio: ${vuelo.precio}`);
        //div1.append(p1);
    }
    });    
}
    else{
        boton2.addEventListener("click",() =>{ 
            alert("El listado no se guardo");
        }); 
    }*/ 