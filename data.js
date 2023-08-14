//import img´s home
import homeImg1 from '/img/imagen1.webp';
import homeImg2 from '/img/imagen2.png';
import homeImg3 from '/img/imagen3.jpg';
//import img's services
import anpr from '/img/anpr.svg'
import card from '/img/card.svg'
import rfid from '/img/rfid.svg'
import guidence from '/img/guidence.svg'
import gsystem from '/img/gsystem.svg'
import dispenser from '/img/dispenser.svg'
import automatic from '/img/automatic.svg'
import tdispenser from '/img/tdispenser.svg'

//exports templates
export const nav  = [
  {name: 'Home', href:'/'},
  {name: 'Acerca de', href:'/about'},
  {name: 'Contacto', href:'/contact'},
  {name: 'Servicios', href:'/services'},
]

// exports infoComponents
export const home = {
  title: '¡Bienvenido a ParkWise!',
  p1:[
    {
      text: 'Somos una empresa emergente apasionada por transformar la forma en que las personas interactúan con los estacionamientos.',
    },
    {
      text: 'Estamos comprometidos con la innovación y la tecnología para crear soluciones que hagan que el proceso de estacionamiento sea más eficiente, conveniente y amigable para todos.',
    },
    {
      text: 'Con una visión fresca y creativa, estamos listos para marcar la diferencia en la industria de la gestión de estacionamientos.',
    },
  ],
  p2: [
    {
      text: 'En ParkWise, diseñamos, desarrollamos y suministramos una amplia gama de soluciones tecnológicas para la gestión de estacionamientos.'
    },
    {
      text: ' Nuestros productos incluyen sistemas de control de acceso, sensores de ocupación en tiempo real, plataformas de reserva de espacios y aplicaciones móviles personalizadas. '
    },
    {
      text: 'Trabajamos estrechamente con nuestros clientes para implementar soluciones a medida que optimizan la eficiencia operativa y mejoran la comodidad de los usuarios.'
    }
  ],
  p3: [
    {
      text: 'Si eres propietario de un estacionamiento, nuestro equipo experto puede proporcionarte herramientas avanzadas para gestionar el flujo de vehículos, optimizar la asignación de espacios y aumentar tus ingresos.'
    },
    {
      text: ' Si eres un conductor, nuestras soluciones te brindarán una experiencia de estacionamiento más conveniente y sin estrés, permitiéndote encontrar fácilmente espacios disponibles y reservarlos con anticipación. '
    },
    {
      text: 'Ya sea que busques aumentar la eficiencia de tu estacionamiento o mejorar tu experiencia como usuario, estamos aquí para ayudarte a lograrlo con tecnología de vanguardia y servicio excepcional.'
    }
  ],
  images: [
    { 
      ruta: homeImg1
    },
    {
      ruta: homeImg2
    },
    {
      ruta: homeImg3
    }
  ]
}

export const about = {
  title: 'Acerca de ParkWise',
  intro:  
  {
    subTitle: 'Nuestro Compromiso con el Medio Ambiente',
    text: 'En ParkWise, también nos preocupamos por el medio ambiente. Creemos que una gestión más eficiente del estacionamiento puede reducir la congestión del tráfico y las emisiones de gases de efecto invernadero. Al ayudarte a encontrar estacionamiento rápidamente, contribuimos a crear una ciudad más sostenible y amigable con el medio ambiente.'
  },
  slider: [
    {
      subTitle: 'Más sobre Nosotros',
      text: 'En ParkWise, estamos comprometidos con mejorar tu experiencia diaria de estacionamiento. Nuestro sistema de estacionamiento inteligente utiliza tecnología de vanguardia, incluyendo sensores de largo alcance y lectores de placa, para ofrecerte una solución innovadora y eficiente.' 
    },
    {
      subTitle: 'Nuestra Misión',
      text: 'Nuestra misión en ParkWise es facilitar y optimizar el proceso de estacionamiento para conductores y empresas por igual. Queremos eliminar la incertidumbre y el estrés asociados con la búsqueda de estacionamiento, proporcionándote información en tiempo real sobre disponibilidad de espacios y ayudándote a encontrar la mejor opción para tus necesidades.'
    },
    {
      subTitle: 'Nuestra Visión',
      text: 'Ser líderes en la innovación y la excelencia en la industria de gestión de estacionamientos, brindando soluciones inteligentes y tecnológicas que transformen la experiencia de estacionamiento para nuestros clientes. Aspiramos a ser reconocidos como un socio confiable y visionario que redefine la eficiencia y la comodidad en la administración de espacios de estacionamiento en todo México.'
    } 
  ],
  info:
  {
    subTitle: 'Cómo Funciona',
    text: 'Nuestro sistema de estacionamiento inteligente utiliza sensores avanzados para detectar la disponibilidad de espacios en tiempo real. Con esta información, podemos ofrecerte una vista en tiempo real de los lugares de estacionamiento disponibles en tu ubicación, lo que te permite tomar decisiones informadas y encontrar rápidamente el espacio perfecto para aparcar tu vehículo.'
  },
  footer: 
  {
    subTitle: 'Únete a ParkWise hoy',
    text: 'Estamos emocionados de tener la oportunidad de transformar la forma en que te estacionas. Únete a ParkWise hoy y experimenta un enfoque más inteligente, conveniente y sostenible para el estacionamiento.'
  }

}

export const services = {
  service: [
    {
    title: 'ANPR/LPR System',
    svg: anpr
    },
    {
    title: 'Barcode Ticket/Card System',
    svg: card
    },
    {
    title: 'Long Range RFID System',
    svg: rfid
    },
    {
    title: 'Parking Guidance System',
    svg: guidence
    },
    {
    title: 'Parking Real-time Guidence',
    svg: gsystem
    },
    {
    title: 'Ticket Dispenser',
    svg: dispenser
    },
    {
    title: 'Automaic Barrier Gate',
    svg: automatic
    },
    {
    title: 'Automatic Payment Machine(APM)',
    svg: tdispenser
    },
  ],
  sections: [
    {
      title: "Parking Guidance System",
      text: 'La visualización en tiempo real del número de espacios desocupados para aparcamiento más cercano en un panel de información en la calle. Es útil para que los conductores puedan estacionar su automóvil en la calle sin ninguna confusión. Él reducirá el atasco de tráfico y también producirá menos CO2. Estos datos de ocupación se pueden mostrar en letreros dinámicos o directo en los teléfonos inteligentes de los usuarios. A medida que los vehículos se vuelven más conectados en los próximos años, esta información estará disponible directamente en el tablero',
    },
    {
      title: "Ticket/Card Parking System",
      text: 'El sistema de control de acceso al estacionamiento con tarjeta/código de barras normalmente funciona con una máquina de pago automático. Es una solución para comerciales.área o área pública con una gran cantidad de visitantes. Es compatible con una amplia función de pago: billetes de banco y monedas, banco pagos con tarjeta y móvil. Ahora podemos integrar a más de 120 países por solución de coma. El costo del código de barras marcado es el costo eficaz, puede dispensar hasta 2,500 piezas con cada rollo de boletos.',
    },
    {
      title: "Long-Range RFID System",
      text: 'El sistema de estacionamiento de automóviles RFID de largo alcance permite un control sin paradas y manual.acceso vehicular gratuito. El sistema funciona con una lectura de etiquetas bluetooth.Tecnología con distancia máxima de lectura de 40 m. Esta solución será adecuado para parker a largo plazo, y para el aparcamiento completo separará a los diferentes usuarios para una mejor gestión del acceso.',
    },
  ]
}