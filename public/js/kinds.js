document.addEventListener('DOMContentLoaded', () => {
    // Obtener todos los checkboxes
    const chkEmpresa = document.getElementById('chkEmpresa');
    const chkPais = document.getElementById('chkPais');
    const chkComunidad = document.getElementById('chkComunidad');
    const chkDesechos = document.getElementById('chkDesechos');
    const chkTodos = document.getElementById('chkTodos');
    const chkSubcategoriaEmpresa = document.getElementById('chkSubcategoriaEmpresa');
    const chkSubcategoriaPais = document.getElementById('chkSubcategoriaPais');
    const chkSubcategoriaComunidad = document.getElementById('chkSubcategoriaComunidad');
    const chkSubcategoriaDesechos = document.getElementById('chkSubcategoriaDesechos');

    // Función para mostrar o esconder tarjetas
    function toggleCards() {
        // Subcategorías
        const cardsEmpresa = document.querySelectorAll('.empresa');
        const cardsPais = document.querySelectorAll('.pais');
        const cardsComunidad = document.querySelectorAll('.comunidad');
        const cardsDesechos = document.querySelectorAll('.desechos');
        
        // Subcategoría de la empresa
        const subcategoriaEmpresa = document.querySelectorAll('.SubcategoriaEmpresa');
        const subcategoriaPais = document.querySelectorAll('.SubcategoriaPais');
        const subcategoriaComunidad = document.querySelectorAll('.SubcategoriaComunidad');
        const subcategoriaDesechos = document.querySelectorAll('.SubcategoriaDesechos');
        
        // Mostrar las tarjetas de las subcategorías solo si el checkbox de la subcategoría está marcado
        if (chkSubcategoriaEmpresa.checked && chkEmpresa.checked) {
            subcategoriaEmpresa.forEach(card => card.classList.remove('hidden'));
        } else {
            subcategoriaEmpresa.forEach(card => card.classList.add('hidden'));
        }

        if (chkSubcategoriaPais.checked && chkPais.checked) {
            subcategoriaPais.forEach(card => card.classList.remove('hidden'));
        } else {
            subcategoriaPais.forEach(card => card.classList.add('hidden'));
        }

        if (chkSubcategoriaComunidad.checked && chkComunidad.checked) {
            subcategoriaComunidad.forEach(card => card.classList.remove('hidden'));
        } else {
            subcategoriaComunidad.forEach(card => card.classList.add('hidden'));
        }

        if (chkSubcategoriaDesechos.checked && chkDesechos.checked) {
            subcategoriaDesechos.forEach(card => card.classList.remove('hidden'));
        } else {
            subcategoriaDesechos.forEach(card => card.classList.add('hidden'));
        }

        // Mostrar u ocultar tarjetas de las categorías principales
        const allCards = {
            chkEmpresa: cardsEmpresa,
            chkPais: cardsPais,
            chkComunidad: cardsComunidad,
            chkDesechos: cardsDesechos
        };

        // Aplicar filtros generales para las categorías principales
        Object.keys(allCards).forEach(key => {
            const checkbox = document.getElementById(key);
            const cards = allCards[key];
            if (checkbox.checked) {
                cards.forEach(card => card.classList.remove('hidden'));
            } else {
                cards.forEach(card => card.classList.add('hidden'));
            }
        });

        // Si el checkbox "Ver todos" está marcado, muestra todas las tarjetas
        if (chkTodos.checked) {
            document.querySelectorAll('.empresa, .pais, .comunidad, .desechos').forEach(card => card.classList.remove('hidden'));
        }
    }

    // Escuchar los cambios en los checkboxes
    chkEmpresa.addEventListener('change', toggleCards);
    chkPais.addEventListener('change', toggleCards);
    chkComunidad.addEventListener('change', toggleCards);
    chkDesechos.addEventListener('change', toggleCards);
    chkTodos.addEventListener('change', toggleCards);
    chkSubcategoriaEmpresa.addEventListener('change', toggleCards);
    chkSubcategoriaPais.addEventListener('change', toggleCards);
    chkSubcategoriaComunidad.addEventListener('change', toggleCards);
    chkSubcategoriaDesechos.addEventListener('change', toggleCards);

    // Llamar a la función al cargar la página para aplicar los filtros actuales
    toggleCards();
});

    document.getElementById('searchInput').addEventListener('keyup', function () {
        let searchTerm = this.value.toLowerCase();
        let cards = document.querySelectorAll('.card');
    
        cards.forEach(function (card) {
            let text = card.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
    