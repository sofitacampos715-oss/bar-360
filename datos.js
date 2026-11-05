// =====================================================================
//  DATOS DEL BAR — aquí se cambia todo sin tocar el resto de la página.
//  (Datos de ejemplo: cambiar nombres, precios y fotos por los reales.)
// =====================================================================

// --- Video del recorrido -------------------------------------------------
// En celular se usa la versión liviana. Ángulos en grados:
//   yaw   = izquierda/derecha (0 = al frente, -90 = izquierda, 90 = derecha)
//   pitch = arriba/abajo (0 = horizonte)
export const VIDEO = {
  normal: 'media/recorrido.mp4?v=4',
  liviano: 'media/recorrido_liviano.mp4?v=4',
};

// --- Paradas: momentos donde el video se congela ---------------------------
// Video: el del muñequito de lana (VID_20261103_183848_00_053).
// time = segundo del video donde se pausa. Para encontrarlo abre la página
// con ?editar al final de la dirección y toca la pantalla: te muestra el
// segundo y el ángulo exacto.
export const PARADAS = [
  {
    id: 'escenario', time: 1.5, yaw: -115, pitch: 5,
    titulo: 'Escenario',
    texto: 'Aquí tocan las bandas.',
    opciones: [{ label: 'Ver cartelera', accion: 'panel:cartelera' }],
  },
  {
    id: 'barra', time: 5, yaw: -65, pitch: 0,
    titulo: 'La barra',
    texto: 'Cervezas, tragos y algo pa’ picar.',
    opciones: [{ label: 'Ver la carta', accion: 'panel:carta' }],
  },
  {
    id: 'muro', time: 57, yaw: -25, pitch: 5,
    titulo: 'El Muro',
    texto: 'Cada ladrillo es un plato o un trago. Elige uno.',
    opciones: [{ label: 'Ir al muro de la carta', accion: 'tab:muro' }],
  },
];

// --- Para que no se vea el muñequito -------------------------------------
// El video se exportó SIN estabilización, así que el muñequito queda siempre
// en el mismo lugar (a la derecha y abajo). La cámara no deja mirar hacia ahí.
// yawMin/yawMax: hasta dónde pueden llegar los bordes de la vista (grados).
// pitchMin: qué tan abajo se puede mirar. maxFov: cuánto se puede alejar.
export const VISTA_VIDEO = { yawMin: -228, yawMax: 16, pitchMin: -20, maxFov: 75 };

// --- Nombres sobre los murales (desactivado) -------------------------------
// Vacío a propósito. Si algún día se quiere, cada entrada pone un nombre
// animado sobre un mural cuando el video se congela en esa parada:
// { parada: 'escenario', nombre: '...', estilo: 'neon', yaw: -88, pitch: 27 }
export const MUSICOS = [];

// --- Pestañas de arriba ----------------------------------------------------
// tipo 'video' salta a una parada; tipo 'foto' abre una foto 360.
export const PESTANAS = [
  { id: 'recorrido', label: 'Recorrido', tipo: 'video', time: 0 },
  { id: 'escenario', label: 'Escenario', tipo: 'video', parada: 'escenario' },
  { id: 'barra', label: 'Barra', tipo: 'video', parada: 'barra' },
  { id: 'muro', label: 'Muro', tipo: 'foto', foto: 'media/muro.jpg', yaw: 31, pitch: 12, zoom: 0, yawCelular: 14, pitchCelular: 4 },
  { id: 'salon', label: 'Salón', tipo: 'foto', foto: 'media/foto_048.jpg', yaw: 0, pitch: 0, zoom: 0 },
  { id: 'entrada', label: 'Entrada', tipo: 'foto', foto: 'media/foto_051.jpg', yaw: 0, pitch: 0, zoom: 0 },
];

// --- El muro (en píxeles de la foto media/muro.jpg, 3840 x 1920) -----------
// Los ladrillos se detectan solos desde la foto con:
//     python herramientas/detectar_ladrillos.py
// que guarda sus contornos en ladrillos.json. Si cambias la foto, vuelve a correrlo.
export const MURO = {
  ladrillos: 'ladrillos.json',
  // Respaldo por si ladrillos.json no trae el "hueco" (lo normal es que lo traiga):
  // arriba-izq, arriba-der, abajo-der, abajo-izq (con ?editar ves los píxeles)
  prisma: [[1650, 760], [2010, 760], [2010, 1360], [1650, 1360]],
  // Tamaño del producto dentro del hueco negro (1 = ocupa todo el hueco libre)
  tamanoTarjeta: 0.9,
};

// --- Carta (cada plato o trago queda en un ladrillo) -----------------------
// foto: imagen del plato (las de media/carta son de ejemplo, de Wikimedia Commons;
// cámbialas por fotos reales con el mismo nombre). Si falta, se usa el emoji.
export const CARTA = [
  { nombre: 'Bummler Hazy Pale', tipo: 'Cervezas', precio: 4500, emoji: '🍺', foto: 'media/carta/hazy_pale.jpg', desc: 'Sedosa, ultra lupulada, frutal. 5,0°' },
  { nombre: 'Tübinger Stout', tipo: 'Cervezas', precio: 4500, emoji: '🍺', foto: 'media/carta/stout.jpg', desc: 'Negra, cremosa, notas a café' },
  { nombre: 'Schop Lager', tipo: 'Cervezas', precio: 3500, emoji: '🍻', foto: 'media/carta/schop.jpg', desc: 'Medio litro bien helado' },
  { nombre: 'IPA de la casa', tipo: 'Cervezas', precio: 4800, emoji: '🍺', foto: 'media/carta/ipa.jpg', desc: 'Amarga y aromática' },
  { nombre: 'Pisco Sour', tipo: 'Tragos', precio: 5000, emoji: '🍸', foto: 'media/carta/pisco_sour.jpg', desc: 'Clásico, pisco 35°' },
  { nombre: 'Piscola', tipo: 'Tragos', precio: 4500, emoji: '🥃', foto: 'media/carta/piscola.jpg', desc: 'Pisco + cola' },
  { nombre: 'Terremoto', tipo: 'Tragos', precio: 4000, emoji: '🍨', foto: 'media/carta/terremoto.jpg', desc: 'Pipeño, helado de piña y granadina' },
  { nombre: 'Mojito', tipo: 'Tragos', precio: 5500, emoji: '🌿', foto: 'media/carta/mojito.jpg', desc: 'Ron, menta, limón' },
  { nombre: 'Dark Side Negroni', tipo: 'Tragos', precio: 6500, emoji: '🌈', foto: 'media/carta/negroni.jpg', desc: 'Gin, vermut rosso, Campari' },
  { nombre: 'Comfortably Gin', tipo: 'Tragos', precio: 6000, emoji: '🍹', foto: 'media/carta/gin_tonic.jpg', desc: 'Gin tonic con pepino' },
  { nombre: 'Chorrillana', tipo: 'Para picar', precio: 12000, emoji: '🍟', foto: 'media/carta/chorrillana.jpg', desc: 'Papas, carne, cebolla y huevo (2-3 personas)' },
  { nombre: 'Papas fritas', tipo: 'Para picar', precio: 5000, emoji: '🍟', foto: 'media/carta/papas_fritas.jpg', desc: 'Con salsas de la casa' },
  { nombre: 'Empanaditas de queso', tipo: 'Para picar', precio: 5500, emoji: '🥟', foto: 'media/carta/empanaditas.jpg', desc: '8 unidades' },
  { nombre: 'Tabla de quesos', tipo: 'Para picar', precio: 9500, emoji: '🧀', foto: 'media/carta/tabla_quesos.jpg', desc: 'Quesos, aceitunas y pan' },
  { nombre: 'Barros Luco', tipo: 'Sándwiches', precio: 7500, emoji: '🥪', foto: 'media/carta/barros_luco.jpg', desc: 'Carne y queso fundido' },
  { nombre: 'Chacarero', tipo: 'Sándwiches', precio: 7800, emoji: '🥪', foto: 'media/carta/chacarero.jpg', desc: 'Carne, porotos verdes, tomate, ají' },
  { nombre: 'Completo italiano', tipo: 'Sándwiches', precio: 3500, emoji: '🌭', foto: 'media/carta/completo.jpg', desc: 'Palta, tomate, mayo' },
  { nombre: 'Brownie', tipo: 'Postres', precio: 3500, emoji: '🍫', foto: 'media/carta/brownie.jpg', desc: 'Con helado' },
  { nombre: 'Jugo natural', tipo: 'Sin alcohol', precio: 3000, emoji: '🧃', foto: 'media/carta/jugo.jpg', desc: 'Frambuesa, mango o piña' },
  { nombre: 'Bebida', tipo: 'Sin alcohol', precio: 2000, emoji: '🥤', foto: 'media/carta/bebida.jpg', desc: 'Lata 350 cc' },
];

// --- Cartelera (ejemplo) ---------------------------------------------------
export const CARTELERA = [
  { dia: 'Jue 6 nov', hora: '21:30', banda: 'Tributo a Pink Floyd', detalle: 'The Dark Side completo · $5.000' },
  { dia: 'Vie 7 nov', hora: '22:00', banda: 'Los Cerros Blues', detalle: 'Blues porteño · entrada liberada' },
  { dia: 'Sáb 8 nov', hora: '22:30', banda: 'Rock nacional en vivo', detalle: 'Covers de Los Prisioneros y Lucybell · $4.000' },
  { dia: 'Dom 9 nov', hora: '19:00', banda: 'Jam abierta', detalle: 'Trae tu instrumento' },
  { dia: 'Mié 12 nov', hora: '21:00', banda: 'Noche de cantautores', detalle: 'Micrófono abierto' },
];
