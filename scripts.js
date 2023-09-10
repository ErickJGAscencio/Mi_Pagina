function mostrarVentanaEmergente(titulo, descripcion, imagen) {    
    document.getElementById('titulo-proyecto-ventana').textContent = titulo;
    document.getElementById('descripcion-proyecto-ventana').textContent = descripcion;
    document.getElementById('imagen-proyecto').src = imagen;
    document.getElementById('ventana-emergente').style.display = 'flex';
}

function cerrarVentanaEmergente() {
    document.getElementById('ventana-emergente').style.display = 'none';
}