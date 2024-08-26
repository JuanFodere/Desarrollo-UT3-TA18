const personas = document.getElementById("personas")
const buscador = document.getElementById("buscador")

let listaPersonas = [
    "Ana",
    "Albert",
    "Pedro", 
    "Carlos", 
    "María", 
    "Lucía",
    "Lorena",
    "Jorge", 
    "Marta",
    "Mario",
    "Luis", 
    "Sofía", 
    "Diego"
]

function renderizarLista(lista){
    lista.forEach(element => {
        let elem = document.createElement("li")  
        elem.innerText = element
        personas.appendChild(elem) 
    });
}

function OcultarMostrar(){
    let prefijo = buscador.value
    const elementos = personas.getElementsByTagName('li')
    for (let i = 0; i < elementos.length; i++) {
        let nombre = elementos[i].innerText.toLowerCase()
        if (nombre.startsWith(prefijo.toLowerCase())) {
            elementos[i].style.visibility = "visible"
        } else {
            elementos[i].style.visibility = "hidden"
        }
    }
}

renderizarLista(listaPersonas)

buscador.addEventListener("input", ()=>{OcultarMostrar()})

