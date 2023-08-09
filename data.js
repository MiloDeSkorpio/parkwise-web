//import img´s
import homeImg1 from '/img/imagen1.webp';
import homeImg2 from '/img/imagen2.png';
import homeImg3 from '/img/imagen3.jpg';

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
  text: 'Una innovadora empresa de tecnología de estacionamiento inteligente que está transformando la forma en que las personas experimentan el aparcamiento en las ciudades. Nuestro objetivo es brindar soluciones eficientes y sin complicaciones para encontrar estacionamiento, aliviando el estrés y el tiempo perdido al buscar un lugar para estacionar. Con la combinación de sensores de largo alcance y lectores de placas avanzados, ParkWise está a la vanguardia de la movilidad urbana, mejorando la experiencia diaria de los conductores y promoviendo una forma más sostenible de moverse por la ciudad.',
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
  section: [
    {
      subTitle: 'Más sobre Nosotros',
      text: 'En ParkWise, estamos comprometidos con mejorar tu experiencia diaria de estacionamiento. Nuestro sistema de estacionamiento inteligente utiliza tecnología de vanguardia, incluyendo sensores de largo alcance y lectores de placa, para ofrecerte una solución innovadora y eficiente.' 
    },
    {
      subTitle: 'Nuestra Misión',
      text: 'Nuestra misión en ParkWise es facilitar y optimizar el proceso de estacionamiento para conductores y empresas por igual. Queremos eliminar la incertidumbre y el estrés asociados con la búsqueda de estacionamiento, proporcionándote información en tiempo real sobre disponibilidad de espacios y ayudándote a encontrar la mejor opción para tus necesidades.'
    },
    {
      subTitle: 'Cómo Funciona',
      text: 'Nuestro sistema de estacionamiento inteligente utiliza sensores avanzados para detectar la disponibilidad de espacios en tiempo real. Con esta información, podemos ofrecerte una vista en tiempo real de los lugares de estacionamiento disponibles en tu ubicación, lo que te permite tomar decisiones informadas y encontrar rápidamente el espacio perfecto para aparcar tu vehículo.'
    },
    {
      subTitle: 'Nuestro Compromiso con el Medio Ambiente',
      text: 'En ParkWise, también nos preocupamos por el medio ambiente. Creemos que una gestión más eficiente del estacionamiento puede reducir la congestión del tráfico y las emisiones de gases de efecto invernadero. Al ayudarte a encontrar estacionamiento rápidamente, contribuimos a crear una ciudad más sostenible y amigable con el medio ambiente.'
    },
    {
      subTitle: 'Únete a ParkWise hoy',
      text: 'Estamos emocionados de tener la oportunidad de transformar la forma en que te estacionas. Únete a ParkWise hoy y experimenta un enfoque más inteligente, conveniente y sostenible para el estacionamiento.'
    }
  ]
}

export const services = {
  service: [
    {
    title: 'ANPR/LPR System',
    svg: ''
    }
  ],
  sections: [
    {
      title: "",
      img: '',
    }
  ]
}