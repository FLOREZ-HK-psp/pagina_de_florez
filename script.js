console.log("¡El archivo JS ahora sí cargó!"); 

const cuadros = document.querySelectorAll('#cuadro2, #cuadro3, #cuadro4'); 
const punto = document.getElementById('punto'); 
const cuadroFondo = document.getElementById('cuadro1'); 
const blurEfecto = document.getElementById('blur'); 
const pantallaFinal = document.getElementById('pantalla-final'); 
const tituloFinal = document.getElementById('titulo-final'); 
const textoFinal = document.getElementById('texto-final'); 

const contenidoPaginas = { 
    cuadro2: { 
        titulo: "Detalle del Proyecto 1", 
        texto: "Has ingresado exitosamente a la sección del primer desarrollador. Aquí puedes desplegar toda la información detallada del software." 
    }, 
    cuadro3: { 
        titulo: "Detalle del Proyecto 2", 
        texto: "Esta es la interfaz limpia para la segunda opción. Todo el contenido previo ha sido removido usando transiciones de CSS." 
    }, 
    cuadro4: { 
        titulo: "Detalle del Proyecto 3", 
        texto: "Explorando el tercer módulo de trabajo. El diseño se adapta de manera dinámica y fluida según la tarjeta seleccionada." 
    } 
}; 

cuadros.forEach(cuadro => { 
    cuadro.addEventListener('click', () => { 
        const idCuadro = cuadro.id; 
        const datos = contenidoPaginas[idCuadro]; 

        if (!datos) return; 

        // Ocultar elementos actuales
        cuadros.forEach(c => { 
            c.style.transition = 'opacity 0.5s ease'; 
            c.style.opacity = '0'; 
            setTimeout(() => c.style.display = 'none', 500); 
        }); 
        
        if (punto) punto.style.display = 'none'; 
        if (cuadroFondo) cuadroFondo.style.display = 'none'; 
        if (blurEfecto) blurEfecto.style.display = 'none'; 

        // Mostrar nueva pantalla limpia con texto
        setTimeout(() => { 
            if (pantallaFinal && tituloFinal && textoFinal) { 
                tituloFinal.textContent = datos.titulo; 
                textoFinal.textContent = datos.texto; 

                pantallaFinal.classList.remove('oculto'); 
                pantallaFinal.style.setProperty('display', 'block', 'important'); 
                pantallaFinal.style.setProperty('opacity', '1', 'important'); 
                pantallaFinal.style.setProperty('visibility', 'visible', 'important'); 
                pantallaFinal.style.animation = 'aparecerPantallaFinal 0.8s ease-out forwards'; 
            } 
        }, 550); 
    }); 
});
