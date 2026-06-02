/*
 ╔══════════════════════════════════════════════════════════════════╗
 ║        🌿 CONFIGURACIÓN DE FOTOS — mis_fotos.js                 ║
 ╠══════════════════════════════════════════════════════════════════╣
 ║                                                                  ║
 ║  INSTRUCCIONES:                                                  ║
 ║                                                                  ║
 ║  1. Copia tus fotos dentro de la carpeta "fotos_animales"        ║
 ║                                                                  ║
 ║  2. Para cada foto, edita o añade un bloque aquí abajo           ║
 ║     con el nombre EXACTO del archivo de imagen                   ║
 ║                                                                  ║
 ║  3. Guarda este archivo                                          ║
 ║                                                                  ║
 ║  4. Abre index.html en el navegador                              ║
 ║     → ¡La galería se actualiza automáticamente!                  ║
 ║                                                                  ║
 ╠══════════════════════════════════════════════════════════════════╣
 ║  ESTRUCTURA DE CADA BLOQUE:                                      ║
 ║                                                                  ║
 ║  {                                                               ║
 ║    id: 1,                           ← número único (no repetir) ║
 ║    src: "fotos_animales/foto1.jpg", ← nombre EXACTO del archivo ║
 ║    title: "Fotografía #1",          ← título en la galería      ║
 ║    photographer: "María, 9 años"    ← quién tomó la foto        ║
 ║  },                                                              ║
 ║                                                                  ║
 ╚══════════════════════════════════════════════════════════════════╝
*/

const animals = [

  // ── FOTO 1 ── Cambia foto1.jpg por el nombre real de tu imagen
  {
    id: 1,
    src: "fotos_animales/1.jpg",
    title: "Fotografía #1",
    photographer: "j, 9"
  },

  // ── FOTO 2 ──
  {
    id: 2,
    src: "fotos_animales/2.jpg",
    title: "Fotografía #2",
    photographer: "Na, 10"
  },

  // ── FOTO 3 ──
  {
    id: 3,
    src: "fotos_animales/3.jpg",
    title: "Fotografía #3",
    photographer: "sa, 5"
  },

  // ── FOTO 4 ──
  {
    id: 4,
    src: "fotos_animales/4.jpg",
    title: "Fotografía #4",
    photographer: "pu, 3"
  },

  // ── FOTO 5 ──
  {
    id: 5,
    src: "fotos_animales/5.jpg",
    title: "Fotografía #5",
    photographer: "df, 23"
  },

  // ── FOTO 6 ──
  {
    id: 6,
    src: "fotos_animales/6.jpg",
    title: "Fotografía #6",
    photographer: "red, 5"
  },

// ── FOTO 7 ──
  {
    id: 7,
    src: "fotos_animales/7.jpg",
    title: "Fotografía #6",
    photographer: "niño, 78"
  },

// ── FOTO 8 ──
  {
    id: 8,
    src: "fotos_animales/8.jpg",
    title: "Fotografía #6",
    photographer: "dsdff, 2"
  },

// ── FOTO 9 ──
  {
    id: 9,
    src: "fotos_animales/9.jpg",
    title: "Fotografía #6",
    photographer: "N, 8"
  },

// ── FOTO 10 ──
  {
    id: 10,
    src: "fotos_animales/10.jpg",
    title: "Fotografía #6",
    photographer: "jfkdm, 19"
  },

 // ── FOTO 11 ── 
  {
    id: 11,
    src: "fotos_animales/11.jpg",
    title: "Fotografía #11",
    photographer: "j, 9"
  },

  // ── FOTO 12 ──
  {
    id: 12,
    src: "fotos_animales/12.jpg",
    title: "Fotografía #12",
    photographer: "Na, 10"
  },

  // ── FOTO 13 ──
  {
    id: 13,
    src: "fotos_animales/13.jpg",
    title: "Fotografía #13",
    photographer: "sa, 5"
  },

  // ── FOTO 14 ──
  {
    id: 14,
    src: "fotos_animales/14.jpg",
    title: "Fotografía #14",
    photographer: "pu, 3"
  },

  // ── FOTO 15 ──
  {
    id: 15,
    src: "fotos_animales/15.jpg",
    title: "Fotografía #15",
    photographer: "df, 23"
  },

  // ── FOTO 16 ──
  {
    id: 16,
    src: "fotos_animales/16.jpg",
    title: "Fotografía #16",
    photographer: "red, 5"
  },

// ── FOTO 17 ──
  {
    id: 17,
    src: "fotos_animales/17.jpg",
    title: "Fotografía #17",
    photographer: "niño, 78"
  },

// ── FOTO 18 ──
  {
    id: 18,
    src: "fotos_animales/18.jpg",
    title: "Fotografía #18",
    photographer: "dsdff, 2"
  },

// ── FOTO 19 ──
  {
    id: 19,
    src: "fotos_animales/19.jpg",
    title: "Fotografía #19",
    photographer: "N, 8"
  },

// ── FOTO 20 ──
  {
    id: 20,
    src: "fotos_animales/20.jpg",
    title: "Fotografía #20",
    photographer: "jfkdm, 19"
  },


// ── FOTO 21 ── 
  {
    id: 21,
    src: "fotos_animales/21.jpg",
    title: "Fotografía #21",
    photographer: "j, 9"
  },

  // ── FOTO 22 ──
  {
    id: 22,
    src: "fotos_animales/22.jpg",
    title: "Fotografía #22",
    photographer: "Na, 10"
  },

  // ── FOTO 23 ──
  {
    id: 23,
    src: "fotos_animales/23.jpg",
    title: "Fotografía #23",
    photographer: "sa, 5"
  },

  // ── FOTO 24 ──
  {
    id: 24,
    src: "fotos_animales/24.jpg",
    title: "Fotografía #24",
    photographer: "pu, 3"
  },

  // ── FOTO 25 ──
  {
    id: 25,
    src: "fotos_animales/25.jpg",
    title: "Fotografía #25",
    photographer: "df, 23"
  },

  // ── FOTO 26 ──
  {
    id: 26,
    src: "fotos_animales/26.jpg",
    title: "Fotografía #26",
    photographer: "red, 5"
  },

// ── FOTO 27 ──
  {
    id: 27,
    src: "fotos_animales/27.jpg",
    title: "Fotografía #27",
    photographer: "niño, 78"
  },

// ── FOTO 28 ──
  {
    id: 28,
    src: "fotos_animales/28.jpg",
    title: "Fotografía #28",
    photographer: "dsdff, 2"
  },

// ── FOTO 29 ──
  {
    id: 29,
    src: "fotos_animales/29.jpg",
    title: "Fotografía #29",
    photographer: "N, 8"
  },

// ── FOTO 30 ──
  {
    id: 30,
    src: "fotos_animales/30.jpg",
    title: "Fotografía #30",
    photographer: "jfkdm, 19"
  },

// ── FOTO 31 ── 
  {
    id: 31,
    src: "fotos_animales/31.jpg",
    title: "Fotografía #31",
    photographer: "j, 9"
  },

  // ── FOTO 32 ──
  {
    id: 32,
    src: "fotos_animales/32.jpg",
    title: "Fotografía #32",
    photographer: "Na, 10"
  },

  // ── FOTO 33 ──
  {
    id: 33,
    src: "fotos_animales/33.jpg",
    title: "Fotografía #33",
    photographer: "sa, 5"
  },

  // ── FOTO 34 ──
  {
    id: 34,
    src: "fotos_animales/34.jpg",
    title: "Fotografía #34",
    photographer: "pu, 3"
  },

  // ── FOTO 35 ──
  {
    id: 35,
    src: "fotos_animales/35.jpg",
    title: "Fotografía #35",
    photographer: "df, 23"
  },

  // ── FOTO 36 ──
  {
    id: 36,
    src: "fotos_animales/36.jpg",
    title: "Fotografía #36",
    photographer: "red, 5"
  },

// ── FOTO 37 ──
  {
    id: 37,
    src: "fotos_animales/37.jpg",
    title: "Fotografía #37",
    photographer: "niño, 78"
  },

// ── FOTO 38 ──
  {
    id: 38,
    src: "fotos_animales/38.jpg",
    title: "Fotografía #38",
    photographer: "dsdff, 2"
  },

// ── FOTO 39 ──
  {
    id: 39,
    src: "fotos_animales/39.jpg",
    title: "Fotografía #39",
    photographer: "N, 8"
  },

// ── FOTO 40 ──
  {
    id: 40,
    src: "fotos_animales/40.jpg",
    title: "Fotografía #40",
    photographer: "jfkdm, 19"
  },

// ── FOTO 41 ── 
  {
    id: 41,
    src: "fotos_animales/41.jpg",
    title: "Fotografía #41",
    photographer: "j, 9"
  },

  // ── FOTO 42 ──
  {
    id: 42,
    src: "fotos_animales/42.jpg",
    title: "Fotografía #42",
    photographer: "Na, 10"
  },

  // ── FOTO 43 ──
  {
    id: 43,
    src: "fotos_animales/43.jpg",
    title: "Fotografía #43",
    photographer: "sa, 5"
  },

  // ── FOTO 44 ──
  {
    id: 44,
    src: "fotos_animales/44.jpg",
    title: "Fotografía #44",
    photographer: "pu, 3"
  },

  // ── FOTO 45 ──
  {
    id: 45,
    src: "fotos_animales/45.jpg",
    title: "Fotografía #45",
    photographer: "df, 23"
  },

  // ── FOTO 46 ──
  {
    id: 46,
    src: "fotos_animales/46.jpg",
    title: "Fotografía #46",
    photographer: "red, 5"
  },

// ── FOTO 47 ──
  {
    id: 47,
    src: "fotos_animales/47.jpg",
    title: "Fotografía #47",
    photographer: "niño, 78"
  },

// ── FOTO 48 ──
  {
    id: 48,
    src: "fotos_animales/48.jpg",
    title: "Fotografía #48",
    photographer: "dsdff, 2"
  },

// ── FOTO 49 ──
  {
    id: 49,
    src: "fotos_animales/49.jpg",
    title: "Fotografía #49",
    photographer: "N, 8"
  },

// ── FOTO 50 ──
  {
    id: 50,
    src: "fotos_animales/50.jpg",
    title: "Fotografía #50",
    photographer: "jfkdm, 19"
  },

// ── FOTO 51 ── 
  {
    id: 51,
    src: "fotos_animales/51.jpg",
    title: "Fotografía #51",
    photographer: "j, 9"
  },

  // ── FOTO 52 ──
  {
    id: 52,
    src: "fotos_animales/52.jpg",
    title: "Fotografía #52",
    photographer: "Na, 10"
  },

  // ── FOTO 53 ──
  {
    id: 53,
    src: "fotos_animales/53.jpg",
    title: "Fotografía #53",
    photographer: "sa, 5"
  },

  // ── FOTO 54 ──
  {
    id: 54,
    src: "fotos_animales/54.jpg",
    title: "Fotografía #54",
    photographer: "pu, 3"
  },

  // ── FOTO 55 ──
  {
    id: 55,
    src: "fotos_animales/55.jpg",
    title: "Fotografía #55",
    photographer: "df, 23"
  },

  // ── FOTO 56 ──
  {
    id: 56,
    src: "fotos_animales/56.jpg",
    title: "Fotografía #56",
    photographer: "red, 5"
  },

// ── FOTO 57 ──
  {
    id: 57,
    src: "fotos_animales/57.jpg",
    title: "Fotografía #57",
    photographer: "niño, 78"
  },

// ── FOTO 58 ──
  {
    id: 58,
    src: "fotos_animales/58.jpg",
    title: "Fotografía #58",
    photographer: "dsdff, 2"
  },

// ── FOTO 59 ──
  {
    id: 59,
    src: "fotos_animales/59.jpg",
    title: "Fotografía #59",
    photographer: "N, 8"
  },

// ── FOTO 60 ──
  {
    id: 60,
    src: "fotos_animales/60.jpg",
    title: "Fotografía #60",
    photographer: "jfkdm, 19"
  },

// ── FOTO 61 ── 
  {
    id: 61,
    src: "fotos_animales/61.jpg",
    title: "Fotografía #61",
    photographer: "j, 9"
  },

  // ── FOTO 62 ──
  {
    id: 62,
    src: "fotos_animales/62.jpg",
    title: "Fotografía #62",
    photographer: "Na, 10"
  },

  // ── FOTO 63 ──
  {
    id: 63,
    src: "fotos_animales/63.jpg",
    title: "Fotografía #63",
    photographer: "sa, 5"
  },

  // ── FOTO 64 ──
  {
    id: 64,
    src: "fotos_animales/64.jpg",
    title: "Fotografía #64",
    photographer: "pu, 3"
  },

  // ── FOTO 65 ──
  {
    id: 65,
    src: "fotos_animales/65.jpg",
    title: "Fotografía #65",
    photographer: "df, 23"
  },

  // ── FOTO 66 ──
  {
    id: 66,
    src: "fotos_animales/66.jpg",
    title: "Fotografía #66",
    photographer: "red, 5"
  },

// ── FOTO 67 ──
  {
    id: 67,
    src: "fotos_animales/67.jpg",
    title: "Fotografía #67",
    photographer: "niño, 78"
  },

// ── FOTO 68 ──
  {
    id: 68,
    src: "fotos_animales/68.jpg",
    title: "Fotografía #68",
    photographer: "dsdff, 2"
  },

// ── FOTO 69 ──
  {
    id: 69,
    src: "fotos_animales/69.jpg",
    title: "Fotografía #69",
    photographer: "N, 8"
  },

// ── FOTO 70 ──
  {
    id: 70,
    src: "fotos_animales/70.jpg",
    title: "Fotografía #70",
    photographer: "jfkdm, 19"
  },

// ── FOTO 71 ── 
  {
    id: 71,
    src: "fotos_animales/71.jpg",
    title: "Fotografía #71",
    photographer: "j, 9"
  },

  // ── FOTO 72 ──
  {
    id: 72,
    src: "fotos_animales/72.jpg",
    title: "Fotografía #72",
    photographer: "Na, 10"
  },

  // ── FOTO 73 ──
  {
    id: 73,
    src: "fotos_animales/73.jpg",
    title: "Fotografía #73",
    photographer: "sa, 5"
  },

  // ── FOTO 74 ──
  {
    id: 74,
    src: "fotos_animales/74.jpg",
    title: "Fotografía #74",
    photographer: "pu, 3"
  },

  // ════════════════════════════════════════════════════════
  // PARA AGREGAR MÁS FOTOS: copia y pega el bloque de abajo
  // cambia el id (número único) y el nombre del archivo src
  // ════════════════════════════════════════════════════════

  // {
  //   id: 7,
  //   src: "fotos_animales/foto7.jpg",
  //   title: "Fotografía #7",
  //   photographer: "Nombre del niño, edad"
  // },

];
