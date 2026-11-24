// Datos de contacto: se usan en el header, el pie, el botón flotante y los
// formularios. Cambiar acá cambia todo el sitio.
export const contacto = {
  telefono: '+56 9 9072 3180',
  telefonoLink: '+56990723180',
  whatsapp: '56990723180',
  email: 'autocontrolarica@gmail.com',
  direccion: 'Alejandro Azolas 1297',
  ciudad: 'Arica, Chile',
  horarios: [
    { dias: 'Lunes a viernes', horas: '08:00 – 18:00' },
    { dias: 'Sábados y feriados', horas: '08:00 – 12:00' },
  ],
};

export function linkWhatsapp(texto?: string) {
  const base = `https://wa.me/${contacto.whatsapp}`;
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base;
}

// Une la ruta base del sitio (GitHub Pages la sirve bajo /autocontrolchile-web/)
// con una ruta interna. Usar siempre para enlaces e imágenes.
export function url(ruta = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const limpia = ruta.replace(/^\//, '');
  return limpia ? `${base}/${limpia}` : `${base}/`;
}

export const clientes = [
  { nombre: 'ACHS', img: 'clientes/achs.jpg' },
  { nombre: "Brink's", img: 'clientes/brinks.jpg' },
  { nombre: 'San José', img: 'clientes/san-jose.jpg' },
  { nombre: 'Syngenta', img: 'clientes/syngenta.jpg' },
  { nombre: 'Universidad de Tarapacá', img: 'clientes/uta.jpg' },
  { nombre: 'PDI', img: 'clientes/pdi.jpg' },
  { nombre: 'Pacal', img: 'clientes/pacal.jpg' },
];
