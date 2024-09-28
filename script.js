

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


