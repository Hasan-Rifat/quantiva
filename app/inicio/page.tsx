'use client';

import { Box, Img, SimpleGrid } from '@chakra-ui/react';
import TemplateCard from '@/components/card/TemplateCard';
import Bg from '../../public/img/inicio/bg.svg';
import title from '../../public/img/inicio/title.svg';

import img1 from '../../public/img/inicio/locatel.png';
import img2 from '../../public/img/inicio/promt-icons/2.svg';
import img3 from '../../public/img/inicio/promt-icons/3.svg';
import img4 from '../../public/img/inicio/promt-icons/4.svg';
import img5 from '../../public/img/inicio/promt-icons/5.svg';
import img6 from '../../public/img/inicio/promt-icons/6.svg';
import img7 from '../../public/img/inicio/promt-icons/7.svg';
import img8 from '../../public/img/inicio/promt-icons/8.svg';
import img9 from '../../public/img/inicio/promt-icons/9.svg';
import img10 from '../../public/img/inicio/promt-icons/10.svg';
import img11 from '../../public/img/inicio/promt-icons/1.svg';
import img12 from '../../public/img/inicio/promt-icons/1.svg';
import { useAppSelector } from '@/redux/hooks';

const cardData = [
  {
    id: 1,
    // link: '/seo-keywords',
    // link: '/fechas-clave-del-mercado',
    illustration: img1,
    name: 'Google Ads en tiempo real',
    description: 'Optimiza y analiza en tiempo real campañas de Google Ads',
  },
  {
    id: 2,
    // link: '/email-enhancer',
    // link: '/qué-publico-deberíamos-conquistar-ahora',
    illustration: img1,
    name: 'Google Analytics',
    description: 'Habla en tiempo real con Google Analytics',
  },
  {
    id: 3,
    // link: '/caption',
    // link: '/cómo-enganchamos-a-esta-audiencia',
    illustration: img1,
    name: 'Vtex Locatel',
    description: 'Analiza en tiempo real las órdenes de Vtex',
  },
  {
    id: 4,
    // link: '/product-description',
    // link: '/qué-tarjeta-usan-mas-los-jovenes',
    illustration: img1,
    name: 'Icomm Locatel',
    description: 'Gestion en tiempo real del CRM Icomm',
  },

  /*  {
    id: 5,
    // link: '/linkedin-message',
    // link: '/necesito-algo-que-conecte',
    illustration: img5,
    name: 'Generación de cursos optimizados',
    description:
      'Analiza tendencias del mercado laboral y datos históricos de inscripción para sugerir ideas de nuevos programas académicos con alto potencial de demanda.',
  },
  {
    id: 6,
    // link: '/linkedin-message',
    // link: '/necesito-algo-que-conecte',
    illustration: img3,
    name: 'Radar de la competencia',
    description:
      'Analiza en tiempo real los anuncios, copies y creatividades de tus principales competidores.',
  },
  {
    id: 7,
    // link: '/linkedin-message',
    // link: '/necesito-algo-que-conecte',
    illustration: img1,
    name: 'Análisis de campañas publicitarias',
    description:
      'Consulta en tiempo real el rendimiento de pauta académica usando datos de Google Ads.',
  }, */
  /* {
    id: 1,
    // link: '/chat-response/',
    // link: '/hazme-una-campana-ganadora',
    illustration: img1,
    name: 'Campaña de captación de estudiantes',
    description:
      'Genera estrategia y copy optimizado usando datos de tendencias e históricos de inscripciones.',
  },
  {
    id: 2,
    // link: '/simplifier',
    // link: 'content-simplifier',
    illustration: img2,
    name: 'SEO Digital Académico',
    description:
      'Sugiére keywords y metadescripciones basadas en análisis de búsquedas y tráfico web.',
  },

  {
    id: 7,
    // link: '/faq',
    // link: '/cómo-impulsamos-más-uso-de-las-tarjetas-de-crédito',
    illustration: img7,
    name: 'Fechas clave del calendario académico',
    description:
      'Detecta momentos óptimos (feriados, inscripciones, eventos) y recomienda ventanas de comunicación.',
  },
  {
    id: 8,
    // link: '/name-generator',
    // link: '/guión-de-beneficios',
    illustration: img8,
    name: 'SMS y notificaciones para inscripciones',
    description:
      'Redacta y programa SMS con llamada a la acción clara para recordatorios de matrícula.',
  },

  {
    id: 10,
    // link: '/review-responder',
    // link: '/redáctame-un-sms-para-clientes-q1',
    illustration: img10,
    name: 'Venta cruzada de programas y diplomados',
    description:
      'Sugiere cursos o diplomados complementarios según historial académico del estudiante.',
  }, */
  /*   {
    id: 11,
    // link: '/review-responder',
    // link: '/redáctame-un-sms-para-clientes-q1',
    illustration: img11,
    name: 'Generación automática de contenido de marketing',
    description:
      'Produce textos para landing pages, posts y newsletters con datos frescos y plantillas predefinidas.',
  },
  {
    id: 10,
    // link: '/review-responder',
    // link: '/redáctame-un-sms-para-clientes-q1',
    illustration: img12,
    name: 'Asistente de consultas académicas',
    description:
      'Responde en tiempo real dudas de estudiantes (programas, requisitos, fechas) usando datos institucionales.',
  }, */
];

export default function Settings() {
  return (
    <Box mt={{ base: '70px', md: '0px', xl: '0px' }}>
      <Img
        src={Bg.src}
        position={'absolute'}
        w="25%"
        h={'20%'}
        right="0%"
        top="63%"
        // transform={'translate(-50%, -50%)'}
      />

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing="20px">
        {cardData.map((card, index) => (
          <TemplateCard
            key={index}
            link={`/chat-response/${card.id.toString()}`}
            illustration={card.illustration}
            name={card.name}
            description={card.description}
          />
        ))}
        {/* <TemplateCard
          key={cardData.length + 1}
          link={'/chat-history'}
          illustration="🗃️"
          name={'Chat History'}
          description={'View and manage your chat history.'}
        /> */}
      </SimpleGrid>
    </Box>
  );
}
