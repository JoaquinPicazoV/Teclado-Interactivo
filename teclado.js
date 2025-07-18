function presionarTecla(){
    let teclas = document.querySelectorAll(".teclado button");

    // Función interna para restablecer los estilos y marcar la tecla presionada al hacer clic en ella
    function resetear(event) {
        eliminarEstilos(); 

    }

    // Función interna para aplicar estilos cuando se presiona una tecla
    function presionar(event) {
        eliminarEstilos();
        // Obtiene el caracter de la tecla presionada y la convierte a mayúscula
        let caracter = event.key.toUpperCase();
        // Busca el elemento HTML con el ID (el id de la tecla es la letra en mayúscula)
        let letra = document.getElementById(caracter); 
        if (letra) {
            // Aplica un estilo de fondo rojo si se encontró la tecla correspondiente
            letra.style.backgroundColor = 'red'; 
        }
    }

    // Función interna para eliminar estilos al dejar de apretar la tecla
    function eliminar() {
        eliminarEstilos(); 
    }

    // Función interna para eliminar todos los estilos de las teclas
    function eliminarEstilos() {
        teclas.forEach(function (tecla) {
            tecla.style.backgroundColor = ''; 

        });
    }

    // Agrega un evento de clic a cada tecla para restablecer los estilos al hacer clic
    teclas.forEach(function (tecla) {
        tecla.addEventListener("click", resetear);
    });

    // Eventos al apretar y soltar la tecla
    window.addEventListener("keydown", presionar);
    window.addEventListener("keyup", eliminar);
}

// Se llama a la función presionarTecla
presionarTecla();
