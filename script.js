

document.getElementById('agregarItems').addEventListener('click', agregarAContenedor);

function agregarAContenedor() {

    cargarLista()

}

function cargarLista() {

    const nombre = document.getElementById('nombreItem').value.trim();
    const apellido = document.getElementById('apellidoItem').value.trim();
    const fullName = `${nombre} ${apellido}`;

    if (nombre && apellido) {

        let lista = JSON.parse(localStorage.getItem('fullName')) || [];

        lista.push(fullName);

        localStorage.setItem('fullName', JSON.stringify(lista));

        mostrarLista();

    }


}

function mostrarLista() {

    const contenedroItems = document.getElementById('contenedor');
    contenedroItems.innerHTML = '';

    let lista = JSON.parse(localStorage.getItem('fullName')) || [];

    lista.forEach(fullName => {
        const li = document.createElement('li');
        li.textContent = fullName;
        contenedroItems.appendChild(li);
    });
}


document.getElementById('botonAbc').addEventListener('click', ordenAscendente);

function ordenAscendente() {

    let lista = JSON.parse(localStorage.getItem('fullName')) || [];
    // Ordenamos la lista en orden alfabético, a.localeCompare(b) nos asegura que la lista se ordenará alfabéticamente 
    lista.sort((a, b) => a.localeCompare(b));
    // Actualizamos el localStorage con la lista ordenada
    localStorage.setItem('fullName', JSON.stringify(lista));
    mostrarLista();

}

document.getElementById('botonZyx').addEventListener('click', ordenDescendente);

function ordenDescendente() {

    let lista = JSON.parse(localStorage.getItem('fullName')) || [];
    
    lista.sort((a, b) => b.localeCompare(a));

    localStorage.setItem('fullName', JSON.stringify(lista));
    mostrarLista();

}

// función para borrar todo el contenedor 
document.getElementById('limpiarTodo').addEventListener('click', limpiarContenedor);

function limpiarContenedor() {
    
    localStorage.removeItem('fullName');

    
    const contenedorItems = document.getElementById('contenedor');
    contenedorItems.innerHTML = '';

    // Opcionalmente, si tienes un array lista en memoria, puedes vaciarlo también
    lista = [];
}
