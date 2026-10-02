// 1. Configuración global (Dólar y Porcentaje de Ganancia)
const valorDolar = 1250; 
const porcentajeGanancia = 1.40; 

// 2. Catálogo completo con tus PRECIOS DE COSTO originales en dólares
const perfumes = [
    { id: 1, nombre: "9 AM White", precioBase: 31.80, imagen: "img/9-am-white.png", notas: "Notas cítricas, florales y amaderadas." },
    { id: 2, nombre: "9 PM", precioBase: 29.90, imagen: "img/9-pm.png", notas: "Notas de canela, lavanda y vainilla dulce." },
    { id: 3, nombre: "9 PM Rebel", precioBase: 46.90, imagen: "img/9-pm-rebel.png", notas: "Notas especiadas, frutales y ámbar oscuro." },
    { id: 4, nombre: "Amber Oud Gold", precioBase: 54.60, imagen: "img/amber oud gold.png", notas: "Notas de melón, piña, ámbar y almizcle." },
    { id: 5, nombre: "Asad Bourbon", precioBase: 44.50, imagen: "img/asad-bourbon.png", notas: "Notas de vainilla, tabaco y especias cálidas." },
    { id: 6, nombre: "Asad Elixir", precioBase: 37.70, imagen: "img/asad-elixir.png", notas: "Notas amaderadas, cuero y ámbar profundo." },
    { id: 7, nombre: "Asad Zanzibar", precioBase: 28.00, imagen: "img/asad-zanzibar.png", notas: "Notas marinas, coco y lavanda." },
    { id: 8, nombre: "Asaad Negro", precioBase: 31.90, imagen: "img/assad-negro.png", notas: "Notas de pimienta negra, tabaco y café." },
    { id: 9, nombre: "Badee Al Oud Sublime", precioBase: 25.50, imagen: "img/badee-al-oud-sublime.png", notas: "Notas de manzana, lichi, rosa y vainilla." },
    { id: 10, nombre: "Bharara King", precioBase: 64.00, imagen: "img/bharara-king.png", notas: "Notas de naranja dulce, neroli y vainilla ambarada." },
    { id: 11, nombre: "Club de Nuit Urban Elixir", precioBase: 41.90, imagen: "img/club de nuit-urban-elixir.png", notas: "Notas cítricas, bergamota y maderas ricas." },
    { id: 12, nombre: "Club Nuit Intense Man", precioBase: 35.90, imagen: "img/club nuit intense man.png", notas: "Notas de limón, piña, abedul y almizcle." },
    { id: 13, nombre: "Eclaire", precioBase: 43.50, imagen: "img/eclaire.png", notas: "Notas de caramelo, leche, vainilla y almizcle blanco." },
    { id: 14, nombre: "Fakhar Black", precioBase: 27.90, imagen: "img/fakhar-black.png", notas: "Notas de manzana, lavanda y haba tonka." },
    { id: 15, nombre: "Ghost Spectre", precioBase: 45.50, imagen: "img/ghost Spectre.png", notas: "Notas misteriosas de vainilla, especias y maderas." },
    { id: 16, nombre: "Gold Ishq Al Shuyukh", precioBase: 29.00, imagen: "img/gold-ishq-al-shuyukh.png", notas: "Notas de caramelo, cuero, haba tonka y ámbar." },
    { id: 17, nombre: "Hawas Elixir", precioBase: 35.10, imagen: "img/hawas elixir.png", notas: "Notas acuáticas, canela y ámbar gris." },
    { id: 18, nombre: "Hawas Black", precioBase: 47.90, imagen: "img/hawas-black.png", notas: "Notas cítricas oscuras, pimienta y maderas." },
    { id: 19, nombre: "Hawas For Him", precioBase: 28.00, imagen: "img/hawas-for-him.png", notas: "Notas de manzana, canela, ciruela y bergamota." },
    { id: 20, nombre: "Hawas Ice", precioBase: 44.80, imagen: "img/hawas-ice.png", notas: "Notas heladas de manzana, cítricos y musgo." },
    { id: 21, nombre: "Hayaati Black", precioBase: 19.90, imagen: "img/hayaati-black.png", notas: "Notas amaderadas, nuez moscada y jengibre." },
    { id: 22, nombre: "Her Confession", precioBase: 37.90, imagen: "img/her-confession.png", notas: "Notas dulces, flores blancas y vainilla cremosa." },
    { id: 23, nombre: "His Confession", precioBase: 34.90, imagen: "img/His confession.png", notas: "Notas especiadas, maderas nobles y haba tonka." },
    { id: 24, nombre: "Honor and Glory", precioBase: 24.90, imagen: "img/honor-and-glory.png", notas: "Notas de piña, brulee de vainilla y sándalo." },
    { id: 25, nombre: "Khamrah", precioBase: 29.90, imagen: "img/khamrah.png", notas: "Notas de canela, nuez moscada, dátiles y vainilla." },
    { id: 26, nombre: "Khamrah Dukhan", precioBase: 26.50, imagen: "img/khamrah-dukhan.png", notas: "Notas ahumadas, canela, incienso y vainilla dulce." },
    { id: 27, nombre: "Khamrah Qahwa", precioBase: 26.90, imagen: "img/khamrah-qahwa.png", notas: "Notas de café, cardamomo, canela y vainilla." },
    { id: 28, nombre: "Liquid Brun", precioBase: 48.90, imagen: "img/liquid brun.png", notas: "Notas avainilladas, cálidas y especiadas." },
    { id: 29, nombre: "Mayar", precioBase: 26.00, imagen: "img/mayar.png", notas: "Notas de lichi, frambuesa, rosa y almizcle." },
    { id: 30, nombre: "Odyssey Aqua", precioBase: 33.50, imagen: "img/odyssey aqua.png", notas: "Notas marinas, cítricos frescos y maderas." },
    { id: 31, nombre: "Odyssey Homme White", precioBase: 31.50, imagen: "img/odyssey-homme white.png", notas: "Notas de vainilla, ámbar y maderas orientales." },
    { id: 32, nombre: "Odyssey Homme Black", precioBase: 25.90, imagen: "img/odyssey-homme-black.png", notas: "Notas oscuras, especias y cuero elegante." },
    { id: 33, nombre: "Odyssey Mandarin Sky", precioBase: 29.90, imagen: "img/odyssey-mandarin-sky.png", notas: "Notas de mandarina, caramelo y haba tonka." },
    { id: 34, nombre: "Philos Pura", precioBase: 23.40, imagen: "img/philos-pura.png", notas: "Notas de perfumería mediterránea, almizcle y ámbar." },
    { id: 35, nombre: "Qaed Al Fursan", precioBase: 21.30, imagen: "img/qaed-al-fursan.png", notas: "Notas de piña, azafrán, abedul y maderas." },
    { id: 36, nombre: "Qaed Al Fursan Unlimited", precioBase: 18.90, imagen: "img/qaed-al-fursan-unlimited.png", notas: "Notas de coco, vainilla, sándalo y flores blancas." },
    { id: 37, nombre: "The Kingdom", precioBase: 29.90, imagen: "img/the kingdom.png", notas: "Notas aromáticas, especias y maderas intensas." },
    { id: 38, nombre: "Victoria", precioBase: 29.90, imagen: "img/victoria.png", notas: "Notas florales delicadas y vainilla sutil." },
    { id: 39, nombre: "Yara Candy", precioBase: 32.90, imagen: "img/yara candy.png", notas: "Notas dulces, frutales, almizcle y caramelo." },
    { id: 40, nombre: "Yara Original", precioBase: 32.90, imagen: "img/yara.png", notas: "Notas de orquídea, heliotropo, mandarina y vainilla." },
    { id: 41, nombre: "Yara Moi", precioBase: 23.50, imagen: "img/yara-moi.png", notas: "Notas de durazno, jazmín, caramelo y pachuli." },
    { id: 42, nombre: "Yara Tous", precioBase: 23.90, imagen: "img/yara-tous.png", notas: "Notas de mango, maracuyá, jazmín y vainilla." }
];

// 3. Elementos del DOM
const contenedorProductos = document.getElementById('contenedor-productos');
const inputBuscador = document.getElementById('input-buscador');

// 4. Función para cargar el catálogo
function cargarCatalogo(listaAVisualizar) {
    contenedorProductos.innerHTML = "";

    const perfumesAMostrar = listaAVisualizar || perfumes;

    if (perfumesAMostrar.length === 0) {
        contenedorProductos.innerHTML = `<p class="no-encontrado">No se encontraron perfumes que coincidan con tu búsqueda 🔍</p>`;
        return;
    }

    perfumesAMostrar.forEach(perfume => {
        const precioCalculado = Math.round(perfume.precioBase * porcentajeGanancia * valorDolar);
        const precioForm = precioCalculado.toLocaleString('es-AR');

        const tarjeta = document.createElement('div');
        tarjeta.classList.add('card-perfume');

        tarjeta.innerHTML = `
            <img src="${perfume.imagen}" alt="${perfume.nombre}" onerror="this.src='https://via.placeholder.com/150/0b1329/d4af37?text=Alure'">
            <h3>${perfume.nombre}</h3>
            <p class="notas">${perfume.notas}</p>
            <p class="precio">$${precioForm}</p>
            <button class="btn-comprar" data-id="${perfume.id}">Agregar al Carrito</button>
        `;

        contenedorProductos.appendChild(tarjeta);
    });

    activarBotones();
}

// 5. Evento para filtrar en tiempo real
inputBuscador.addEventListener('input', (e) => {
    const textoBusqueda = e.target.value.toLowerCase().trim();

    const resultadosFiltrados = perfumes.filter(perfume => {
        const nombreCoincide = perfume.nombre.toLowerCase().includes(textoBusqueda);
        const notasCoinciden = perfume.notas.toLowerCase().includes(textoBusqueda);
        return nombreCoincide || notasCoinciden;
    });

    cargarCatalogo(resultadosFiltrados);
});

// 6. Función de los botones de compra
function activarBotones() {
    const botonesComprar = document.querySelectorAll('.btn-comprar');

    botonesComprar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const idPerfume = e.target.getAttribute('data-id');
            const perfumeSeleccionado = perfumes.find(p => p.id == idPerfume);
            
            alert(`¡Has agregado "${perfumeSeleccionado.nombre}" al carrito de Alure Perfumería! 🛍️✨`);
        });
    });
}

// Carga inicial
cargarCatalogo();