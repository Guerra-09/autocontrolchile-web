// Cada servicio genera su página en /servicios/<slug>/ y aparece en el menú,
// en la grilla de la portada y en «Otros servicios». Los textos vienen de la
// página original de autocontrolchile.cl.
export type IconoServicio = 'camara' | 'aire' | 'cerco' | 'porton' | 'fuego' | 'cortina';

export interface Servicio {
  slug: string;
  titulo: string;
  icono: IconoServicio;
  menu: string; // subtítulo corto del menú desplegable
  tarjeta: { titulo: string; texto: string }; // grilla de la portada
  resumen: string; // tarjeta en «Otros servicios»
  imagen: string;
  imagenAlt: string;
  imagenPos?: string;
  intro: string;
  detalle: { etiqueta: string; titulo: string; parrafos: string[]; chips: string[] };
  imagenDetalle?: { src: string; alt: string; nota: string };
  sec: string;
  relacionados: string[];
  whatsapp: string;
}

const SEC =
  'Nuestras instalaciones mantienen todos los protocolos de seguridad. Contamos con profesionales con certificación SEC, por lo que son seguras y eficientes.';

export const servicios: Servicio[] = [
  {
    slug: 'camaras-de-seguridad',
    titulo: 'Cámaras de seguridad',
    icono: 'camara',
    menu: 'CCTV interior y exterior',
    tarjeta: {
      titulo: 'Instalación CCTV',
      texto:
        'Las cámaras de seguridad instaladas por Autocontrol Chile le brindan una variedad de opciones para proteger y observar a su familia o su trabajo.',
    },
    resumen:
      'Las cámaras de seguridad son una excelente manera de hacer que su casa se sienta más segura, y sus ventajas van más allá de la mera sensación de seguridad.',
    imagen: 'img/camaras.jpg',
    imagenAlt: 'Cámaras de seguridad domo y bala',
    intro:
      '¿Busca una cámara de seguridad? Las cámaras son una parte importante de la seguridad de su hogar. Hay muchos factores que considerar al elegir una: el nivel de delincuencia en su barrio, el tamaño de su propiedad, si tiene niños en casa y si ya tiene instalados otros métodos de vigilancia. Además, hay distintos tipos de cámaras para personalizar su sistema según sus necesidades.',
    detalle: {
      etiqueta: 'Lo que instalamos',
      titulo: 'Proteja y observe a su familia o su trabajo',
      parrafos: [
        'Las cámaras de seguridad instaladas por Autocontrol Chile le brindan una variedad de opciones para ayudarlo a proteger y observar a su familia o trabajo. Consulte nuestra variedad de sistemas de seguridad interiores y exteriores, incluyendo cámaras domo, el elemento disuasorio visible perfecto, y cámaras de techo separadas, para una opción sin preocupaciones y sin cables.',
      ],
      chips: ['Interior y exterior', 'Cámaras domo', 'Cámaras de techo', 'Opciones sin cables'],
    },
    imagenDetalle: {
      src: 'img/camara-instalada.jpg',
      alt: 'Cámara de seguridad instalada por Autocontrol Chile',
      nota: 'Sus pertenencias vigiladas las 24 horas del día, los 7 días de la semana.',
    },
    sec: SEC,
    relacionados: ['cercos-electricos', 'portones-electricos'],
    whatsapp: 'Hola, quisiera cotizar la instalación de cámaras de seguridad',
  },
  {
    slug: 'aire-acondicionado',
    titulo: 'Aire acondicionado',
    icono: 'aire',
    menu: 'Asesoría e instalación',
    tarjeta: {
      titulo: 'Aires acondicionados',
      texto:
        'Instale el aire acondicionado adecuado para su oficina, casa o negocio. En Autocontrol Chile lo asesoramos desde el primer momento.',
    },
    resumen:
      'Instale el aire acondicionado adecuado para su oficina, casa o negocio. Lo asesoramos desde el primer momento.',
    imagen: 'img/aire-acondicionado.jpg',
    imagenAlt: 'Equipo de aire acondicionado instalado en un muro',
    intro:
      '¿Sabía que instalar el tipo incorrecto de aire acondicionado puede hacer que su hogar u oficina sea menos cómodo? Elegir uno puede ser abrumador si nunca lo ha hecho, especialmente con la amplia variedad de opciones que existen hoy.',
    detalle: {
      etiqueta: 'Asesoría desde el primer momento',
      titulo: 'El equipo adecuado para su casa, oficina o negocio',
      parrafos: [
        'Por eso estamos a su servicio: contáctenos y lo asesoraremos para la instalación de su aire acondicionado, eligiendo el equipo que realmente se ajusta a su espacio.',
      ],
      chips: ['Hogar', 'Oficina', 'Negocio', 'Climatización y ventilación'],
    },
    sec: SEC,
    relacionados: ['cortinas-metalicas', 'red-de-incendios'],
    whatsapp: 'Hola, quisiera cotizar la instalación de un aire acondicionado',
  },
  {
    slug: 'cercos-electricos',
    titulo: 'Cercos eléctricos',
    icono: 'cerco',
    menu: 'Hogar, empresa y campo',
    tarjeta: {
      titulo: 'Cercos eléctricos',
      texto:
        'Los delitos más comunes en la ciudad son el allanamiento de inmuebles y el robo con fuerza. Evítelos con estos sistemas.',
    },
    resumen:
      'Aumente su seguridad, resguarde bienes importantes o la protección de sus seres queridos; también para empresas que desean resguardar producción y equipos.',
    imagen: 'img/cerco-electrico.jpg',
    imagenAlt: 'Cerco eléctrico instalado sobre un muro en Arica',
    intro:
      'El cerco eléctrico es un tipo de valla que utiliza una corriente eléctrica para impedir que los delincuentes ingresen a su inmueble. También puede utilizarse para controlar el ganado sin comprometer la vida del animal ni provocarle daños.',
    detalle: {
      etiqueta: 'Ventajas',
      titulo: 'Seguridad que dura más y casi no necesita mantención',
      parrafos: [
        'La instalación de este tipo de cercado en su propiedad tiene muchas ventajas. El cerco eléctrico puede utilizarse con fines de seguridad en edificios e instalaciones agrícolas. Además, requiere poco mantenimiento y durará mucho más que los materiales de cercado tradicionales.',
      ],
      chips: ['Casas', 'Edificios', 'Instalaciones agrícolas', 'Poco mantenimiento'],
    },
    sec: SEC,
    relacionados: ['camaras-de-seguridad', 'portones-electricos'],
    whatsapp: 'Hola, quisiera cotizar un cerco eléctrico',
  },
  {
    slug: 'portones-electricos',
    titulo: 'Portones eléctricos',
    icono: 'porton',
    menu: 'Casas, condominios y empresas',
    tarjeta: {
      titulo: 'Portones eléctricos',
      texto:
        'Evite bajarse de su vehículo para no sufrir un robo ni exponer a su familia, y deje de entorpecer el tránsito mientras abre el portón.',
    },
    resumen:
      'Instalamos portones eléctricos en condominios, establecimientos educacionales, casas y empresas. Consulte por el tipo de instalación que necesita.',
    imagen: 'img/porton-electrico.webp',
    imagenAlt: 'Portón eléctrico instalado frente a una casa',
    intro:
      'Un portón eléctrico es una forma excelente de proteger su propiedad y mantener alejados a los intrusos. Es una estructura metálica sólida que se coloca en la entrada o el garaje, y se controla con un control remoto o con un botón en el propio portón.',
    detalle: {
      etiqueta: '¿Por qué instalar uno?',
      titulo: 'Llegue a casa sin bajarse del vehículo',
      parrafos: [
        'Por la comodidad y seguridad de llegar al inmueble sin bajarse del vehículo. Esto evita los robos por sorpresa al dejar las llaves puestas con el motor andando mientras abre el portón manualmente.',
        'Otra razón es evitar accidentes al olvidar enganchar el vehículo o dejar el freno de mano cuando hay una leve pendiente en la salida o en el camino.',
      ],
      chips: ['Casas', 'Condominios', 'Establecimientos educacionales', 'Empresas'],
    },
    sec: 'Solicite aquí su instalación. Nuestros trabajos mantienen todos los protocolos de seguridad y contamos con profesionales con certificación SEC, por lo que son seguros y eficientes.',
    relacionados: ['camaras-de-seguridad', 'cercos-electricos'],
    whatsapp: 'Hola, quisiera cotizar un portón eléctrico',
  },
  {
    slug: 'red-de-incendios',
    titulo: 'Red de incendios',
    icono: 'fuego',
    menu: 'Certificación SEC',
    tarjeta: {
      titulo: 'Red de incendios',
      texto:
        'Nuestras instalaciones mantienen todos los protocolos de seguridad. Contamos con profesionales con certificación SEC, por lo que son seguras y eficientes.',
    },
    resumen:
      'Una red contra incendios es una de las inversiones más importantes que puede hacer en su casa u oficina.',
    imagen: 'img/red-incendios.jpg',
    imagenAlt: 'Red húmeda contra incendios instalada',
    intro:
      'Una red contra incendios es una de las inversiones más importantes que puede hacer en su casa u oficina, incluso si es solo una medida de precaución en lugar de una necesidad inmediata.',
    detalle: {
      etiqueta: 'Mejor prevenir',
      titulo: 'Solo se necesita una pequeña llama',
      parrafos: [
        'Puede que no esté pensando en ello ahora, pero ¿quién sabe lo que sucederá en el futuro? Es mejor prevenir que lamentar. Una pequeña llama basta para causar daños graves, y con la red de incendios adecuada puede evitar un gasto mayor en reparaciones, o vidas que lamentar.',
      ],
      chips: ['Casas', 'Oficinas', 'Empresas'],
    },
    sec: SEC,
    relacionados: ['portones-electricos', 'camaras-de-seguridad'],
    whatsapp: 'Hola, quisiera cotizar una red de incendios',
  },
  {
    slug: 'cortinas-metalicas',
    titulo: 'Cortinas metálicas',
    icono: 'cortina',
    menu: 'Protección para su local',
    tarjeta: {
      titulo: 'Cortinas metálicas',
      texto:
        'La mejor opción si desea proteger su negocio. Evite daños a su propiedad o saqueos: en Autocontrol Chile tenemos la experiencia.',
    },
    resumen:
      'Si está buscando asegurar su tienda y mantener alejados a los visitantes no deseados, las cortinas metálicas son la mejor opción.',
    imagen: 'img/cortina-metalica.jpg',
    imagenAlt: 'Cortina metálica instalada en un local comercial',
    intro:
      'Si está buscando asegurar su tienda, hay varias maneras de lograrlo. Pero si realmente desea mantener alejados a los visitantes no deseados, las cortinas metálicas son la mejor opción para usted.',
    detalle: {
      etiqueta: 'Protección para su negocio',
      titulo: 'Plegables, sin atascos y disuasivas',
      parrafos: [
        'Son fácilmente plegables, no como las antiguas que necesitaban mucha grasa y se atascaban. Se pueden colocar en cualquier puerta o ventana de vidrio y usarse como puertas o persianas de seguridad.',
        'Disuaden efectivamente a los ladrones, ya que no pueden ver a través de ellas. Proteja sus bienes de protestas, saqueos o delincuencia.',
      ],
      chips: ['Locales comerciales', 'Puertas y ventanas', 'Anti saqueos'],
    },
    sec: SEC,
    relacionados: ['portones-electricos', 'camaras-de-seguridad'],
    whatsapp: 'Hola, quisiera cotizar una cortina metálica',
  },
];

// Orden de la grilla de la portada (igual que la página original).
export const ordenPortada = [
  'camaras-de-seguridad',
  'red-de-incendios',
  'aire-acondicionado',
  'cortinas-metalicas',
  'portones-electricos',
  'cercos-electricos',
];

export const porSlug = (slug: string) => servicios.find((s) => s.slug === slug)!;
