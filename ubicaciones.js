/*
 ╔══════════════════════════════════════════════════════════════════════╗
 ║          🗺️  UBICACIONES DE LAS FOTOGRAFÍAS — ubicaciones.js        ║
 ╠══════════════════════════════════════════════════════════════════════╣
 ║                                                                      ║
 ║  Este archivo define las coordenadas exactas de cada fotografía      ║
 ║  para que aparezcan correctamente en el mapa interactivo.            ║
 ║                                                                      ║
 ║  CÓMO OBTENER LAS COORDENADAS:                                       ║
 ║  1. Abre Google Maps (maps.google.com)                               ║
 ║  2. Navega al lugar exacto donde fue tomada la foto                  ║
 ║  3. Haz clic derecho sobre el punto exacto                           ║
 ║  4. El primer dato que aparece son las coordenadas (cópialo)         ║
 ║     Ejemplo: 23.1390, -82.3590                                       ║
 ║     El primer número es lat, el segundo es lng                       ║
 ║                                                                      ║
 ║  INSTRUCCIONES:                                                      ║
 ║  - El campo "id" debe coincidir con el id en mis_fotos.js            ║
 ║  - El campo "location" es el nombre corto del lugar                  ║
 ║  - El campo "address" es la dirección completa (opcional)            ║
 ║  - Este archivo tiene prioridad sobre las coordenadas en mis_fotos.js║
 ║                                                                      ║
 ╚══════════════════════════════════════════════════════════════════════╝
*/

const ubicaciones = [

  // ── FOTO 1 ── Sustituye las coordenadas por las reales
  {
    id: 1,
    lat: 23.1390,
    lng: -82.3590,
    location: "Plaza de la Catedral",
    address: "Plaza de la Catedral, Habana Vieja, La Habana, Cuba"
  },

  // ── FOTO 2 ──
  {
    id: 2,
    lat: 23.1350,
    lng: -82.3575,
    location: "Plaza Vieja",
    address: "Plaza Vieja, Habana Vieja, La Habana, Cuba"
  },

  // ── FOTO 3 ──
  {
    id: 3,
    lat: 23.1362,
    lng: -82.3555,
    location: "Calle Obispo",
    address: "Calle Obispo, Habana Vieja, La Habana, Cuba"
  },

  // ── FOTO 4 ──
  {
    id: 4,
    lat: 23.1402,
    lng: -82.3600,
    location: "El Malecón",
    address: "Malecón, Centro Habana, La Habana, Cuba"
  },

  // ── FOTO 5 ──
  {
    id: 5,
    lat: 23.1340,
    lng: -82.3580,
    location: "Parque Central",
    address: "Parque Central, Habana Vieja, La Habana, Cuba"
  },

  // ── FOTO 6 ──
  {
    id: 6,
    lat: 23.1372,
    lng: -82.3545,
    location: "Barrio Chino",
    address: "Barrio Chino, Centro Habana, La Habana, Cuba"
  },

  /*
  ══════════════════════════════════════════════════════════════════
  PARA AGREGAR MÁS UBICACIONES: copia y pega el bloque de abajo
  ══════════════════════════════════════════════════════════════════

  {
    id: 7,
    lat: 23.0000,       ← reemplaza con latitud real de Google Maps
    lng: -82.0000,      ← reemplaza con longitud real de Google Maps
    location: "Nombre corto del lugar",
    address: "Dirección completa, Habana Vieja, La Habana, Cuba"
  },

  */

];
