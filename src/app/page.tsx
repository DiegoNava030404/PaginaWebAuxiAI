// src/app/page.tsx
import Image from 'next/image';
// Importamos los íconos que estamos usando
import { FiDatabase, FiSmartphone, FiServer, FiCloud } from 'react-icons/fi';

export default function HomePage() {
  return (
    // Contenedor principal con fondo oscuro
    <main className="bg-gray-900 text-white">

      {/* SECCIÓN 1: HERO (CON IMAGEN 2.JPG) */}
      <section className="relative flex min-h-screen flex-col items-center justify-center text-center">
        
        {/* Fondo de Imagen (Añadido) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/2.png" // <-- Tu imagen 2.jpg 
            alt="Fondo de tecnología AuxiAI"
            layout="fill"
            objectFit="cover"
            quality={80}
            priority // Carga esta imagen primero
          />
          {/* Overlay Oscuro (Añadido) */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        </div>

        {/* Contenido (Añadimos z-20 para ponerlo al frente) */}
        <div className="container relative z-20 mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            AuxiAI – La IA que te cuida cuando más lo necesitas
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-400 md:text-xl">
            Recibe orientación de primeros auxilios en tiempo real. Porque en una emergencia, cada segundo cuenta.
          </p>
          <a
            href="#servicios"
            className="transform rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition-transform duration-200 hover:scale-105 hover:bg-blue-700"
          >
            Conoce Más
          </a>
        </div>
      </section>

      {/* SECCIÓN 2: SERVICIOS DE LA APLICACIÓN (Fondo sólido) */}
      <section id="servicios" className="bg-gray-800 py-20 md:py-32">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
          
          <div className="text-center">
            <Image
            src="/5.png" // <-- ¡Aquí está tu imagen!
            alt="Ilustración de servicios de AuxiAI"
            width={240}  // w-60 es 240px
            height={384} // h-96 es 384px
            className="inline-block rounded-lg object-cover"
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Servicios de la Aplicación
            </h2>
            <p className="mb-4 text-gray-300">
              AuxiAI te ofrece información y orientación confiable para enfrentar situaciones de riesgo menores. Ofrecemos una experiencia única al utilizar inteligencia artificial para interactuar contigo y darte la información necesaria para atender alguna emergencia.
            </p>
            <p className="text-gray-300">
              Nuestra aplicación proporciona consejos claros y prácticos, mientras un sistema de colores te ayuda a identificar la gravedad de cada situación.
            </p>
          </div>

        </div>
      </section>

      {/* SECCIÓN 3: NUESTRAS TECNOLOGÍAS (Fondo sólido) */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold">Nuestras Tecnologías</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              En AuxiAI, utilizamos un stack tecnológico moderno y robusto para ofrecer soluciones de software de buena calidad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gray-800 p-6">
              <FiDatabase className="mb-4 text-4xl text-blue-400" />
              <h3 className="mb-2 text-xl font-semibold">Bases de Datos</h3>
              <p className="text-gray-400"><span className="font-bold text-white">MySQL:</span> Para almacenamiento estructurado y relaciones complejas.</p>
              <p className="text-gray-400 mt-2"><span className="font-bold text-white">MongoDB:</span> Para flexibilidad en datos no estructurados y escalabilidad.</p>
            </div>
            
            <div className="rounded-lg bg-gray-800 p-6">
              <FiServer className="mb-4 text-4xl text-blue-400" />
              <h3 className="mb-2 text-xl font-semibold">Backend</h3>
              <p className="text-gray-400"><span className="font-bold text-white">NestJS:</span> Para una arquitectura modular y escalable.</p>
              <p className="text-gray-400 mt-2"><span className="font-bold text-white">NodeJS:</span> Para manejar procesos eficientes en tiempo real.</p>
              <p className="text-gray-400 mt-2"><span className="font-bold text-white">Python:</span> Para procesamiento de datos y lógica avanzada de IA.</p>
            </div>
            
            <div className="rounded-lg bg-gray-800 p-6">
              <FiSmartphone className="mb-4 text-4xl text-blue-400" />
              <h3 className="mb-2 text-xl font-semibold">Frontend & Mobile</h3>
              <p className="text-gray-400"><span className="font-bold text-white">React Native:</span> Para aplicaciones móviles multiplataforma fluidas.</p>
              <p className="text-gray-400 mt-2"><span className="font-bold text-white">React / Next.js:</span> Para crear nuestra aplicación web dinámica y moderna.</p>
            </div>

            <div className="rounded-lg bg-gray-800 p-6">
              <FiCloud className="mb-4 text-4xl text-blue-400" />
              <h3 className="mb-2 text-xl font-semibold">DevOps</h3>
              <p className="text-gray-400"><span className="font-bold text-white">Azure:</span> Para gestionar despliegues y recursos en la nube.</p>
              <p className="text-gray-400 mt-2"><span className="font-bold text-white">Docker:</span> Para empaquetar aplicaciones en contenedores portables.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: ACERCA DE NOSOTROS (Fondo sólido) */}
      <section className="bg-gray-800 py-20 md:py-32">
        <div className="container mx-auto px-4">
          
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold">Nuestra Historia</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              AuxiAI comenzó en abril del 2025 como un proyecto universitario en la Universidad Tecnológica del Valle de Toluca. La idea surgió después de que Sebastián Mancilla Alba notara que, aunque existían apps para el estrés o la depresión, no había aplicaciones que usaran IA para enseñar primeros auxilios. El proyecto fue adoptado y al día de hoy se sigue trabajando en él.
            </p>
          </div>

          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold">Un Equipo de Personas Reales</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300 mb-12">
              Conoce al equipo que da vida a nuestra aplicación y crea experiencias que transforman la forma en que recibimos ayuda en momentos importantes.
            </p>
            
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="flex flex-col items-center">
                <Image
                  src="/jaret.png" // <-- ¡Pon el nombre real de tu archivo!
                  alt="Foto de Jaret Inocente Arzate Zavala"
                  width={128}
                  height={128}
                  className="mb-4 rounded-full object-cover"
                />
                <h3 className="mb-2 text-xl font-semibold">Jaret Inocente Arzate Zavala</h3>
                <p className="text-gray-400">Dirección & Desarrollo IA</p>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/sebastian.png" // <-- ¡Pon el nombre real de tu archivo!
                  alt="Foto de Jaret Inocente Arzate Zavala"
                  width={128}
                  height={128}
                  className="mb-4 rounded-full object-cover"
                />
                <h3 className="mb-2 text-xl font-semibold">Sebastian Mancilla Alba</h3>
                <p className="text-gray-400">Documentación & Testing</p>
              </div>

              <div className="flex flex-col items-center">
                 <Image
                  src="/diego.png" // <-- ¡Pon el nombre real de tu archivo!
                  alt="Foto de Jaret Inocente Arzate Zavala"
                  width={128}
                  height={128}
                  className="mb-4 rounded-full object-cover"
                />
                <h3 className="mb-2 text-xl font-semibold">Diego David Nava Cabrera</h3>
                <p className="text-gray-400">Diseño Web & Manuales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: PROYECTO EN DESARROLLO (Fondo sólido) */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Proyecto en Desarrollo</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Actualmente el proyecto se sigue desarrollando y lleva un 80% de progreso. En unos cuantos meses, el proyecto será entregado al menos con las funciones básicas como el chatbot, interacción con la IA y la API de voz.
          </p>
        </div>
      </section>

      {/* SECCIÓN 6: CONTACTO (CON IMAGEN 1.JPG) */}
      <section className="relative py-20 md:py-32">
        
        {/* Fondo de Imagen (Añadido) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/1.png" // <-- Tu imagen 1.jpg 
            alt="Fondo de ondas AuxiAI"
            layout="fill"
            objectFit="cover"
            quality={80}
          />
          {/* Overlay Oscuro (Añadido) */}
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        </div>

        {/* Contenido (Añadimos z-20 para ponerlo al frente) */}
        <div className="container relative z-20 mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ponte en Contacto</h2>
          <p className="mx-auto max-w-xl text-lg text-gray-300 mb-8">
            Si tienes preguntas, comentarios o te gustaría colaborar, nos encantaría saber de ti.
          </p>
          <a
            href="mailto:al222210745@utvtol.edu.mx"
            className="transform rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition-transform duration-200 hover:scale-105 hover:bg-blue-700"
          >
            Escríbenos a al222210745@utvtol.edu.mx
          </a>
        </div>
      </section>

      {/* SECCIÓN 7: FOOTER (Fondo sólido) */}
      <footer className="bg-gray-950 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <a 
              href="https://drive.google.com/drive/u/1/folders/152rT0r6B_blzRie88W_I8YAVDb8s47V5" // <-- Pega aquí el link de Términos y Condiciones
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white"
            >
              Términos y Condiciones
            </a>
          </div>
          <p className="text-gray-500">
            © 2025 AuxiAI. Todos los derechos reservados.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Un proyecto de la Incubadora de Proyectos de la Universidad Tecnológica del Valle de Toluca.
          </p>
        </div>
      </footer>

    </main>
  );
}