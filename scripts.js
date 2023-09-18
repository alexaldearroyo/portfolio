$(document).ready(function () {
    // Guarda el color original del elemento .nav-link.active
    const originalColor = $('.nav-link.active').css('color');

    $('.nav-link').hover(
        function () { // Al hacer hover
            if ($(this).hasClass('active')) {
                return; // Si es el enlace activo, simplemente salimos de la función
            }
            $('.nav-link.active').css('color', '#2c3e50');
        },
        function () { // Al salir del hover
            if ($(this).hasClass('active')) {
                return; // Si es el enlace activo, simplemente salimos de la función
            }
            $('.nav-link.active').css('color', originalColor);
        }
    );

    $('.toggle-content').click(function () {
        // Encuentra el contenedor "expandible" relacionado con el botón que se presionó
        const expandibleSection = $(this).siblings('.expandible');

        // Encuentra todos los .content-box-grid
        const otherBoxes = $('.content-box-grid');

        if (expandibleSection.is(':visible')) {
            expandibleSection.slideUp();  // Si está visible, ocúltalo
            $(this).text('🞥');   // Cambia el texto del botón a 'SHOW MORE'

            // Aquí puedes revertir los ajustes de estilo si es necesario
            otherBoxes.css('marginBottom', '0');
        } else {
            expandibleSection.slideDown();  // Si no está visible, muéstralo
            $(this).text('━');     // Cambia el texto del botón a 'SHOW LESS'

            // Aquí puedes agregar más ajustes de estilo si es necesario
            otherBoxes.css('marginBottom', '20px'); // Por ejemplo, añadir un margen
        }
    });

});