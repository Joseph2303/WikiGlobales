import React, { useState } from 'react';
import './App.css';  // Importar archivo de estilos

export interface Globalizacion {
  definicion: string;
  ventajas: string[];
  desventajas: string[];
  fenomenos: Fenomeno[];
  covidImpacto: string;
  economiaDigital: EconomiaDigital;
  computacionNube: ComputacionNube;
}

interface Fenomeno {
  tipo: string;
  descripcion: string;
  detalles: string[];
}

interface EconomiaDigital {
  definicion: string;
  actividadEconomica: string;
  ofertaYDemanda: string;
  caracteristicas: CaracteristicaEconomiaDigital[];
  modelosNegocios: ModeloNegocios;
}

interface CaracteristicaEconomiaDigital {
  nombre: string;
  descripcion: string;
}

interface ModeloNegocios {
  definicion: string;
  modeloVsEstrategia: ComparacionModeloEstrategia;
  canvas: string;
  rolInternet: string;
}

interface ComparacionModeloEstrategia {
  modeloNegocio: string[];
  estrategia: string[];
}

interface ComputacionNube {
  definicion: string;
  funciones: string[];
  beneficios: string[];
  tiposNube: TipoNube[];
}

interface TipoNube {
  tipo: string;
  ventajas: string[];
  desventajas: string[];
}

// Crear el objeto globalizacion con la información
const globalizacion: Globalizacion = {
  definicion: "La globalización es un proceso complejo y continuo que ha transformado profundamente la estructura de las economías, las culturas y las sociedades a nivel mundial. Este fenómeno se refiere a la creciente interdependencia y conexión entre los países, impulsada principalmente por los avances tecnológicos, las mejoras en las comunicaciones y el comercio internacional. A través de la globalización, los mercados, las ideas y las culturas se han integrado de manera más estrecha, permitiendo un flujo constante de bienes, servicios, información y personas entre diferentes partes del mundo. Esto ha resultado en una mayor accesibilidad a productos y servicios globales, un intercambio cultural más amplio y un crecimiento de las economías a través de la internacionalización del comercio y la inversión. Sin embargo, a pesar de los beneficios que la globalización puede aportar, también ha dado lugar a nuevos desafíos, tanto sociales como económicos y medioambientales. En el ámbito social, ha provocado una mayor desigualdad entre las naciones y dentro de ellas, ya que las economías más poderosas se benefician desproporcionadamente del proceso, mientras que los países en desarrollo a menudo quedan rezagados debido a la falta de infraestructura, educación y tecnología. Además, la globalización ha tenido un impacto significativo en el medio ambiente, ya que la expansión de la producción y el consumo a nivel global ha aumentado la explotación de recursos naturales y ha contribuido a problemas como el cambio climático. Las culturas también han experimentado una homogeneización, con la difusión de ideas, costumbres y comportamientos de las naciones más influyentes, lo que ha llevado a la pérdida de tradiciones locales en algunos lugares. En resumen, la globalización ha logrado conectar al mundo de una manera sin precedentes, pero también ha generado nuevos retos que requieren un enfoque equilibrado y sostenible para maximizar sus beneficios mientras se mitigan sus efectos negativos.",
  ventajas: [
      "Ofrece grandes oportunidades de desarrollo económico, especialmente en países en desarrollo.",
      "Promueve eficiencia mediante la competencia y especialización en mercados globales.",
      "Extensión de la comunicación, beneficiando a los mercados y la conectividad internacional.",
      "Impulsa el acceso a tecnología, educación y servicios avanzados.",
      "Fortalece la cooperación internacional en áreas críticas como salud pública, cambio climático y seguridad.",
      "Facilita la transferencia de conocimiento y cultura, enriqueciendo sociedades.",
      "Crea empleo, especialmente en sectores como tecnología, turismo y comercio internacional."
  ],
  desventajas: [
      "Los beneficios económicos de la globalización no siempre son distribuidos equitativamente, exacerbando la desigualdad social y económica.",
      "Los países deben adoptar políticas adecuadas (como TLCs o acuerdos internacionales) para proteger a sus sectores vulnerables.",
      "Pérdida de soberanía nacional, ya que las políticas internas pueden verse influenciadas por decisiones de organismos internacionales o actores transnacionales.",
      "Los países en desarrollo pueden sufrir de dependencia tecnológica y económica de naciones más avanzadas.",
      "El crecimiento económico acelerado a veces es insostenible y tiene un alto costo ambiental.",
      "Homogeneización cultural que puede llevar a la erosión de identidades y tradiciones locales.",
      "El trabajo en algunos países se ve precarizado, especialmente con la externalización y subcontratación."
  ],
  fenomenos: [
      {
          tipo: "Económico",
          descripcion: "Reconfigura la producción, distribución y consumo de bienes y servicios, aumentando la eficiencia económica global.",
          detalles: [
              "Nuevos modelos de negocio como el comercio electrónico y las finanzas digitales.",
              "Las multinacionales toman protagonismo en la globalización de las cadenas de suministro.",
              "El auge de las economías emergentes como China e India.",
              "La liberalización de los mercados, que facilita la inversión extranjera directa."
          ]
      },
      {
          tipo: "Cultural",
          descripcion: "La globalización ha impulsado un intercambio cultural sin precedentes, lo que genera tanto enriquecimiento cultural como tensiones.",
          detalles: [
              "El auge de la cultura pop globalizada: cine, música, y moda.",
              "Los jóvenes de diferentes partes del mundo se ven influenciados por una cultura global, especialmente a través de las redes sociales.",
              "Sin embargo, existen tensiones entre la preservación de tradiciones y la adopción de valores globales.",
              "La globalización puede diluir las lenguas y costumbres locales si no se toman medidas para preservarlas."
          ]
      },
      {
          tipo: "Tecnológico",
          descripcion: "La tecnología ha sido el motor principal de la globalización, facilitando la comunicación, el transporte y el acceso a información a una escala global.",
          detalles: [
              "El internet ha reducido las barreras geográficas, conectando a millones de personas alrededor del mundo.",
              "El crecimiento de la inteligencia artificial, el big data y la automatización está redefiniendo los modelos de negocio.",
              "Sin embargo, los avances tecnológicos también han generado una nueva brecha digital entre países desarrollados y en desarrollo.",
              "El aumento de la ciberseguridad y la privacidad digital se han convertido en desafíos globales."
          ]
      },
      {
          tipo: "Político",
          descripcion: "A nivel político, la globalización está fomentando la creación de organismos internacionales y la cooperación entre gobiernos, pero también puede generar tensiones geopolíticas.",
          detalles: [
              "Organismos como la ONU, la OMC y la UE trabajan para regular aspectos económicos, ambientales y derechos humanos a nivel global.",
              "El aumento de los movimientos nacionalistas y proteccionistas como reacción a la globalización.",
              "Desafíos en términos de migración, refugiados y políticas de integración.",
              "Riesgos de corrupción y manipulación política en un mundo interconectado."
          ]
      }
  ],
  covidImpacto: "La pandemia de COVID-19 ha tenido un impacto dramático en la globalización, interrumpiendo las cadenas de suministro, afectando los mercados globales y acelerando el trabajo remoto y el comercio electrónico. Además, la crisis sanitaria ha evidenciado la necesidad de cooperación global para enfrentar problemas comunes, como las crisis sanitarias y la distribución de vacunas, aunque también aumentó las desigualdades entre países.",
  economiaDigital: {
      definicion: "Es el mercado que se fundamenta en la creación, distribución, compra y venta de productos y servicios a través de plataformas digitales, utilizando el internet y nuevas tecnologías para realizar transacciones y generar valor.",
      actividadEconomica: "Se refiere a actividades económicas que se desarrollan mediante el uso de plataformas digitales, como el e-commerce, la publicidad digital, la banca en línea, el marketing de afiliados, entre otros.",
      ofertaYDemanda: "En la economía digital, la oferta y la demanda son inmediatas y globales. Las plataformas digitales permiten que los consumidores accedan a productos de cualquier parte del mundo, lo que incrementa la competencia y acelera la innovación.",
      caracteristicas: [
          { nombre: "Globalización de mercados", descripcion: "La digitalización ha derribado las fronteras tradicionales, permitiendo que los mercados sean accesibles globalmente, eliminando restricciones geográficas y operacionales." },
          { nombre: "Poder del cliente", descripcion: "Los consumidores tienen acceso a información masiva y controlan cada vez más sus decisiones de compra mediante reseñas, comparaciones y recomendaciones personalizadas." },
          { nombre: "Eficiencia operativa", descripcion: "Las empresas pueden optimizar sus operaciones mediante automatización, big data y análisis predictivos, lo que mejora la eficiencia y reduce costos." },
          { nombre: "Transparencia", descripcion: "La economía digital promueve una mayor transparencia en los procesos, ya que las plataformas digitales permiten un monitoreo y control en tiempo real de las transacciones." }
      ],
      modelosNegocios: {
          definicion: "Un modelo de negocio describe cómo una empresa genera valor para sus clientes y obtiene ingresos, mientras define sus estructuras operativas y estrategias a seguir.",
          modeloVsEstrategia: {
              modeloNegocio: [
                  "Es la forma en que una empresa organiza sus recursos para ofrecer productos o servicios.",
                  "Define las actividades clave, la propuesta de valor y la segmentación de clientes.",
                  "Establece las fuentes de ingresos y cómo la empresa se sostiene financieramente."
              ],
              estrategia: [
                  "La estrategia busca mejorar la competitividad a través de decisiones a largo plazo.",
                  "Incluye la elección de los mercados a abordar, la innovación y la mejora continua.",
                  "Está dirigida a la ventaja competitiva, diferenciación y expansión de mercado."
              ]
          },
          canvas: "El modelo de negocio Canvas es una herramienta estratégica visual que ayuda a las empresas a estructurar sus operaciones en nueve bloques: Propuesta de valor, Segmentos de clientes, Canales, Relación con los clientes, Fuentes de ingresos, Recursos clave, Actividades clave, Socios clave y Estructura de costos.",
          rolInternet: "El internet ha transformado la manera en que los negocios se comunican, operan y llegan a sus clientes. El alcance global ha democratizado las oportunidades empresariales, permitiendo que incluso las pequeñas empresas puedan competir a escala internacional."
      }
  },
  computacionNube: {
      definicion: "La computación en la nube es un modelo de entrega de servicios informáticos a través de internet, donde los usuarios pueden acceder y gestionar aplicaciones, almacenamiento de datos, y procesamiento sin necesidad de tener infraestructura física propia.",
      funciones: [
          "Almacenamiento de datos y servicios de respaldo.",
          "Procesamiento de grandes volúmenes de datos en tiempo real.",
          "Provisión de recursos de computación bajo demanda para empresas.",
          "Servicios de comunicación como correos electrónicos, videollamadas y colaboración en línea."
      ],
      beneficios: [
          "Bajos costos iniciales sin necesidad de inversión en infraestructura física.",
          "Recursos ilimitados que se pueden escalar según la demanda.",
          "Alta disponibilidad y fiabilidad, con servicios que garantizan mínimo tiempo de inactividad.",
          "Accesibilidad desde cualquier dispositivo con conexión a internet."
      ],
      tiposNube: [
          {
              tipo: "Privada",
              ventajas: [
                  "Mayor seguridad y control de los datos dentro de la infraestructura interna.",
                  "Cumplimiento de regulaciones y normativas de privacidad."
              ],
              desventajas: [
                  "Costos elevados de implementación y mantenimiento.",
                  "Requiere personal técnico especializado para gestionar y mantener la infraestructura."
              ]
          },
          {
              tipo: "Pública",
              ventajas: [
                  "Reducción de costos, ya que solo se paga por lo que se usa.",
                  "Escalabilidad y flexibilidad sin limitaciones físicas.",
                  "Acceso a la infraestructura de última generación sin necesidad de mantenerla."
              ],
              desventajas: [
                  "Menor control sobre los datos y la seguridad.",
                  "Posibles riesgos de privacidad debido a que los datos son gestionados por terceros."
              ]
          },
          {
              tipo: "Híbrida",
              ventajas: [
                  "Combinación de lo mejor de las nubes privadas y públicas.",
                  "Permite la flexibilidad de elegir entre ambos entornos según las necesidades del negocio."
              ],
              desventajas: [
                  "Puede ser compleja de gestionar y requerir soluciones especializadas."
              ]
          }
      ]
  }
};

function App() {
  // Estado para gestionar la sección visible
  const [activeSection, setActiveSection] = useState<string>('definicion');

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='Hola'>Globalización</h1>
        
        {/* Contenedor para los botones y la información */}
        <div className="content-container">
          
          {/* Menú de botones a la izquierda */}
          <nav className="button-nav">
            <ul>
              <li><button className="menu-btn" onClick={() => setActiveSection('definicion')}>Definición</button></li>
              <li><button className="menu-btn" onClick={() => setActiveSection('ventajas')}>Ventajas</button></li>
              <li><button className="menu-btn" onClick={() => setActiveSection('desventajas')}>Desventajas</button></li>
              <li><button className="menu-btn" onClick={() => setActiveSection('fenomenos')}>Fenómenos</button></li>
              <li><button className="menu-btn" onClick={() => setActiveSection('covidImpacto')}>Impacto COVID-19</button></li>
              <li><button className="menu-btn" onClick={() => setActiveSection('economiaDigital')}>Economía Digital</button></li>
              <li><button className="menu-btn" onClick={() => setActiveSection('computacionNube')}>Computación en la Nube</button></li>
            </ul>
          </nav>

          {/* Contenedor de la información a la derecha */}
          <div className="info-section">
            {/* Renderización condicional basada en la sección activa */}
            {activeSection === 'definicion' && <p><strong>Definición:</strong> {globalizacion.definicion}</p>}
            {activeSection === 'ventajas' && (
              <>
                <h2>Ventajas</h2>
                <ul>
                  {globalizacion.ventajas.map((ventaja, index) => (
                    <li key={index}>{ventaja}</li>
                  ))}
                </ul>
              </>
            )}
            {activeSection === 'desventajas' && (
              <>
                <h2>Desventajas</h2>
                <ul>
                  {globalizacion.desventajas.map((desventaja, index) => (
                    <li key={index}>{desventaja}</li>
                  ))}
                </ul>
              </>
            )}
            {activeSection === 'fenomenos' && (
              <>
                <h2>Fenómenos</h2>
                {globalizacion.fenomenos.map((fenomeno, index) => (
                  <div key={index}>
                    <h3>{fenomeno.tipo}</h3>
                    <p>{fenomeno.descripcion}</p>
                    <ul>
                      {fenomeno.detalles.map((detalle, i) => (
                        <li key={i}>{detalle}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </>
            )}
            {activeSection === 'covidImpacto' && <p>{globalizacion.covidImpacto}</p>}
            {activeSection === 'economiaDigital' && (
              <>
                <h2>Economía Digital</h2>
                <p><strong>Definición:</strong> {globalizacion.economiaDigital.definicion}</p>
                <p><strong>Actividad Económica:</strong> {globalizacion.economiaDigital.actividadEconomica}</p>
                <h3>Características de la Economía Digital</h3>
                <ul>
                  {globalizacion.economiaDigital.caracteristicas.map((caracteristica, index) => (
                    <li key={index}><strong>{caracteristica.nombre}:</strong> {caracteristica.descripcion}</li>
                  ))}
                </ul>
              </>
            )}
            {activeSection === 'computacionNube' && (
              <>
                <h2>Computación en la Nube</h2>
                <p>{globalizacion.computacionNube.definicion}</p>
                <ul>
                  {globalizacion.computacionNube.funciones.map((funcion, index) => (
                    <li key={index}>{funcion}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
