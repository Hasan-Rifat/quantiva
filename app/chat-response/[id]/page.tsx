'use client';
import React from 'react';

import {
  Button,
  Flex,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
  Box,
  Heading,
  Spinner,
  IconButton,
  Avatar,
  Divider,
  Badge,
  Tag,
  TagLabel,
  Collapse,
  useDisclosure,
  Tooltip,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  List,
  ListItem,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import {
  FiSend,
  FiCopy,
  FiChevronDown,
  FiChevronUp,
  FiTrash2,
  FiClock,
} from 'react-icons/fi';

const info: (
  | {
      id: string;
      title: string;
      description: string;
      url: string;
      inputFields: boolean;
      extra?: undefined;
    }
  | {
      id: string;
      title: string;
      description: string;
      url: string;
      extra: string[];
      inputFields: boolean;
    }
)[] = [
  {
    id: '1',
    title: 'Google Ads en tiempo real',
    description: 'Optimiza y analiza en tiempo real campañas de Google Ads',
    url: 'https://n8n-n8n.nkzjik.easypanel.host/webhook/CU1L',
    inputFields: true,
  },
  {
    id: '2',
    title: 'Google Analytics',
    description: 'Habla en tiempo real con Google Analytics',
    url: 'https://n8n-n8n.nkzjik.easypanel.host/webhook/CU2L',
    inputFields: true,
  },
  {
    id: '3',
    title: 'Vtex Locatel',
    description: 'Analiza en tiempo real las órdenes de Vtex',
    url: 'https://n8n-n8n.nkzjik.easypanel.host/webhook/CU3L',
    inputFields: true,
  },
  {
    id: '4',
    title: 'Icomm Locatel',
    description: 'Gestion en tiempo real del CRM Icomm',
    url: 'https://n8n-n8n.nkzjik.easypanel.host/webhook/CU4L',
    inputFields: true,
  },
  /*  {
    id: '1',
    title: 'Insights de tendencias académicas',
    description:
      ' Explora de forma automática las tendencias del mercado laboral para alinear la oferta académica con las demandas reales del entorno profesional. Este flujo analiza datos de portales de empleo, redes profesionales y encuestas de egresados para identificar habilidades en demanda, sectores en crecimiento y perfiles más buscados. Úsalo para tomar decisiones estratégicas sobre nuevos programas, ajustar contenidos y enfocar la comunicación en lo que realmente busca el mercado.',
    url: 'https://n8n-n8n.nkzjik.easypanel.host/webhook/CU1S',
    inputFields: true,
  },
  {
    id: '2',
    title: 'Segmentación de público académico objetivo',
    description:
      'Identifica y agrupa automáticamente a los posibles aspirantes según su perfil académico, intereses y comportamiento. Este flujo te permite conocer mejor a tu audiencia para diseñar campañas más efectivas, personalizar la comunicación y enfocar esfuerzos en los perfiles con mayor probabilidad de inscripción. Ideal para equipos que desean optimizar la captación de estudiantes y tomar decisiones basadas en datos reales.',
    url: 'https://n8n-n8n.nkzjik.easypanel.host/webhook/CU2S',
    inputFields: true,
  },
  {
    id: '3',
    title: 'Tendencias laborales',
    description:
      'Analiza datos del mercado laboral para identificar habilidades, sectores y perfiles profesionales en alta demanda. Te ayuda a tomar decisiones estratégicas sobre nuevos programas, ajustar contenidos y enfocar tu oferta académica según lo que hoy busca el mundo laboral.',
    url: 'https://n8n-n8n.nkzjik.easypanel.host/webhook/CU3S',
    inputFields: true,
  },
  {
    id: '4',
    title: 'Análisis de rendimiento web académico',
    description:
      'Analiza el tráfico de tu sitio web académico usando datos de Google Analytics. Te muestra qué páginas de programas funcionan mejor, cuáles necesitan mejoras y dónde los usuarios pierden interés, para que puedas optimizar la experiencia y aumentar la conversión.',
    url: 'https://n8n-n8n.nkzjik.easypanel.host/webhook/CU4S',
    inputFields: true,
  },
  {
    id: '5',
    title: 'Ideación de nuevos programas académico',
    description:
      'Analiza tendencias del mercado laboral y datos históricos de inscripción para sugerir ideas de nuevos programas académicos con alto potencial de demanda. Te ayuda a detectar oportunidades temáticas, áreas emergentes y vacíos en la oferta actual, facilitando decisiones estratégicas para el desarrollo de nuevos posgrados.',
    url: 'https://n8n-n8n.nkzjik.easypanel.host/webhook/CU5S',
    inputFields: true,
  },
  {
    id: '6',
    title: 'Radar del competidor',
    description:
      'Consolida automáticamente los datos de tendencias de RRSS y las creatividades ya extraídas de bibliotecas de anuncios publicas para revelar qué, cuándo y cómo invierten tu competencia. Competidores rastreados en profundidad',
    url: 'https://n8n-n8n.nkzjik.easypanel.host/webhook/CU6S',
    extra: [
      'Universidad de los Andes (co)',
      'Pontificia Universidad Javeriana (co)',
      'Universidad del Rosario (co)',
      'Tecnológico de Monterrey (mx)',
      'Universidad de Navarra (sp)',
    ],
    inputFields: true,
  },
  {
    id: '7',
    title: 'Análisis de campañas publicitarias',
    description:
      'Consulta en tiempo real el rendimiento de pauta académica usando datos de Google Ads.',
    url: 'https://n8n-n8n.nkzjik.easypanel.host/webhook/CU7S',
    inputFields: true,
  },
  {
    id: '8',
    title: 'Integrador CANVA / FIGMA. ( En desarrollo )',
    description:
      'Conecta tu pipeline de IA con Canva y Figma para que cada copy, imagen o layout generado se inserte automáticamente en tus archivos de diseño.',
    url: 'https://n8n-n8n.nkzjik.easypanel.host/webhook/UC8',
    inputFields: true,
  },
  {
    id: '9',
    title: ' Impulso de uso de la tarjeta',
    description:
      'Un motor de IA segmenta a tus clientes en tiempo real, identifica patrones de gasto y detecta momentos clave —salario, fechas especiales, viajes— para proponer incentivos hiper-relevantes: cashbacks, cuotas sin interés o recompensas exclusivas.',
    url: 'https://n8n-n8n.nkzjik.easypanel.host/webhook/UC9',
    inputFields: true,
  },
  {
    id: '10',
    title: ' Impulso de uso de la tarjeta',
    description:
      'Un motor de IA segmenta a tus clientes en tiempo real, identifica patrones de gasto y detecta momentos clave —salario, fechas especiales, viajes— para proponer incentivos hiper-relevantes: cashbacks, cuotas sin interés o recompensas exclusivas.',
    url: 'https://n8n-n8n.nkzjik.easypanel.host/webhook/UC10',
    inputFields: true,
  }, */
];

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<Message[][]>(
    [],
  );
  const { isOpen: isHistoryOpen, onToggle: toggleHistory } = useDisclosure();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Theme colors
  const textColor = useColorModeValue('gray.800', 'white');
  const cardBg = useColorModeValue('white', 'gray.800');
  const userBg = useColorModeValue('blue.50', 'blue.900');
  const assistantBg = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const toast = useToast();

  const [currentService, setCurrentService] = useState<(typeof info)[0]>();

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Load service info and history
  useEffect(() => {
    const loadData = async () => {
      const resolvedParams = await params;
      setCurrentService(info.find((s) => s.id === resolvedParams.id));

      const savedHistory = localStorage.getItem('chatHistory');
      if (savedHistory) {
        try {
          const parsed = JSON.parse(savedHistory).map((conv: any[]) =>
            conv.map((msg) => ({ ...msg, timestamp: new Date(msg.timestamp) })),
          );
          setConversationHistory(parsed);
        } catch (e) {
          console.error('Failed to load history', e);
        }
      }
    };
    loadData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !currentService) return;

    // Add user message (without clearing previous messages)
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post(currentService.url, {
        sessionId: 'chat-session-' + Date.now(),
        chatInput: input,
        previousMessages: updatedMessages
          .filter((m) => m.role === 'user')
          .map((m) => m.content),
      });

      if (response.data?.[0]?.output) {
        const assistantMsg: Message = {
          id: Date.now().toString(),
          role: 'assistant',
          content: response.data[0].output,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMsg]);
      } else {
        throw new Error('No response content');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Request failed',
        status: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const saveConversation = () => {
    if (messages.length > 0) {
      const updatedHistory = [messages, ...conversationHistory].slice(0, 10);
      setConversationHistory(updatedHistory);
      localStorage.setItem('chatHistory', JSON.stringify(updatedHistory));
      toast({ title: 'Conversation saved!', status: 'success' });
    }
  };

  const loadConversation = (conversation: Message[]) => {
    setMessages(conversation);
    toggleHistory();
  };

  const deleteConversation = (index: number) => {
    const updated = [...conversationHistory];
    updated.splice(index, 1);
    setConversationHistory(updated);
    localStorage.setItem('chatHistory', JSON.stringify(updated));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: 'Copied!', status: 'success' });
  };

  const clearCurrentConversation = () => {
    if (messages.length > 0) {
      setMessages([]);
      toast({ title: 'Conversation cleared', status: 'info' });
    }
  };

  if (!currentService) {
    return (
      <Flex justify="center" align="center" h="100vh">
        <Text>Loading service...</Text>
      </Flex>
    );
  }

  return (
    <Flex direction={{ base: 'column', md: 'row' }} h="88vh" p={4} gap={4}>
      {/* Service Info Panel */}
      <Card w={{ base: '100%', md: '400px' }} bg={cardBg}>
        <CardHeader>
          <Flex align="center" justify="space-between">
            <Heading size="md">{currentService.title}</Heading>
            <Tag colorScheme="blue">{currentService.id}</Tag>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text mb={4}>{currentService.description}</Text>

          {currentService.extra && (
            <>
              <Text fontWeight="bold" mb={2}>
                Data Sources:
              </Text>
              <Flex wrap="wrap" gap={2}>
                {currentService.extra.map((source, i) => (
                  <Badge key={i} colorScheme="blue" variant="subtle">
                    {source}
                  </Badge>
                ))}
              </Flex>
            </>
          )}
        </CardBody>
        <CardFooter>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              mb={3}
              isDisabled={loading}
            />
            <Flex gap={2} wrap="wrap">
              <Button
                type="submit"
                colorScheme="blue"
                // leftIcon={<FiSend />}
                isLoading={loading}
                flex={1}
              >
                Generar
              </Button>
              {messages.length > 0 && (
                <>
                  <Button
                    onClick={saveConversation}
                    variant="outline"
                    // leftIcon={<FiClock />}
                    flex={1}
                  >
                    Save
                  </Button>
                  <Button
                    onClick={clearCurrentConversation}
                    variant="outline"
                    colorScheme="red"
                    flex={1}
                  >
                    Clear
                  </Button>
                </>
              )}
            </Flex>
          </form>
        </CardFooter>
      </Card>

      {/* Chat Panel */}
      <Card flex={1} bg={cardBg}>
        <CardHeader>
          <Flex justify="space-between" align="end">
            <Box>
              <Heading size="md">Respuesta</Heading>
              <p>
                Analizaremos en tiempo real múltiples fuentes de información
                como tendencias, competidores, librerías de anuncios, eso puede
                tomar un tiempo para responder.
              </p>
            </Box>
            <Flex gap={2}>
              <Button
                onClick={toggleHistory}
                // rightIcon={isHistoryOpen ? <FiChevronUp /> : <FiChevronDown />}
                // leftIcon={<FiClock />}
                size="sm"
                variant="outline"
              >
                History ({conversationHistory.length})
              </Button>
            </Flex>
          </Flex>
        </CardHeader>

        <CardBody overflowY="auto" position="relative">
          <Collapse in={isHistoryOpen} animateOpacity>
            <Card mb={4} maxH="200px" overflowY="auto">
              {conversationHistory.length === 0 ? (
                <Text p={4} color="gray.500" textAlign="center">
                  No saved conversations
                </Text>
              ) : (
                conversationHistory.map((conversation, i) => (
                  <Box
                    key={i}
                    borderBottom="1px solid"
                    borderColor={borderColor}
                    p={3}
                  >
                    <Flex justify="space-between" align="center">
                      <Text
                        fontWeight="medium"
                        isTruncated
                        onClick={() => loadConversation(conversation)}
                        cursor="pointer"
                        _hover={{ textDecoration: 'underline' }}
                      >
                        {conversation[0]?.content.substring(0, 50)}...
                      </Text>
                      <IconButton
                        // icon={<FiTrash2 />}
                        aria-label="Delete conversation"
                        size="sm"
                        variant="ghost"
                        colorScheme="red"
                        onClick={() => deleteConversation(i)}
                      />
                    </Flex>
                    <Text fontSize="sm" color="gray.500">
                      {conversation.length} messages •{' '}
                      {conversation[0]?.timestamp.toLocaleString()}
                    </Text>
                  </Box>
                ))
              )}
            </Card>
          </Collapse>

          {messages.length === 0 ? (
            <Flex
              direction="column"
              align="center"
              justify="center"
              h="100%"
              color="gray.500"
            >
              <Text fontSize="xl" mb={4}>
                {conversationHistory.length > 0
                  ? 'Select a conversation or start a new one'
                  : 'STu respuesta aparecerá aquí después de dar clic en generar...'}
              </Text>
            </Flex>
          ) : (
            <Flex direction="column" gap={4}>
              {messages.map((message) => (
                <Flex
                  key={message.id}
                  alignSelf={
                    message.role === 'user' ? 'flex-end' : 'flex-start'
                  }
                  maxW="90%"
                >
                  <Box
                    bg={message.role === 'user' ? userBg : assistantBg}
                    p={4}
                    borderRadius="lg"
                    boxShadow="sm"
                  >
                    <Flex align="center" mb={2} gap={2}>
                      <Avatar
                        size="sm"
                        name={
                          message.role === 'user' ? 'You' : currentService.title
                        }
                        bg={message.role === 'user' ? 'blue.500' : 'gray.500'}
                      />
                      <Text fontWeight="bold">
                        {message.role === 'user' ? 'You' : currentService.title}
                      </Text>
                      <Text fontSize="sm" color="gray.500" ml="auto">
                        {message.timestamp.toLocaleTimeString()}
                      </Text>
                    </Flex>
                    <MarkdownRenderer content={message.content} />
                    <Flex justify="flex-end" mt={2}>
                      <Tooltip label="Copy">
                        <IconButton
                          //   icon={<FiCopy />}
                          aria-label="Copy message"
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(message.content)}
                        />
                      </Tooltip>
                    </Flex>
                  </Box>
                </Flex>
              ))}
              {loading && (
                <Flex alignSelf="flex-start">
                  <Box bg={assistantBg} p={4} borderRadius="lg">
                    <Spinner size="sm" mr={2} />
                    Generating response...
                  </Box>
                </Flex>
              )}
              <div ref={messagesEndRef} />
            </Flex>
          )}
        </CardBody>
      </Card>
    </Flex>
  );
}

const MarkdownRenderer = ({ content }: { content: string }) => {
  // Remove triple dashes if present
  const cleanedContent = content.replace(/^---$/gm, '');

  // Enhanced markdown parsing
  const parseMarkdown = (text: string) => {
    const elements: JSX.Element[] = [];
    const lines = text.split('\n');

    lines.forEach((line, i) => {
      if (line.match(/^#+\s/)) {
        // Headers
        const level = line.match(/^#+/)?.[0].length || 1;
        const headerText = line.replace(/^#+\s/, '');
        elements.push(
          <Heading
            key={i}
            as={`h${Math.min(level, 6)}` as any}
            size={level === 1 ? 'xl' : level === 2 ? 'lg' : 'md'}
            mt={4}
            mb={2}
          >
            {headerText}
          </Heading>,
        );
      } else if (line.match(/^-\s/)) {
        // List items
        if (
          !elements.length ||
          elements[elements.length - 1].type !== UnorderedList
        ) {
          elements.push(
            <UnorderedList key={i} mb={2} pl={5}>
              <ListItem>{line.replace(/^-\s/, '')}</ListItem>
            </UnorderedList>,
          );
        } else {
          const lastList = elements[elements.length - 1];
          elements[elements.length - 1] = (
            <UnorderedList key={i} mb={2} pl={5}>
              {React.Children.toArray(lastList.props.children)}
              <ListItem>{line.replace(/^-\s/, '')}</ListItem>
            </UnorderedList>
          );
        }
      } else if (line.match(/^\d+\.\s/)) {
        // Ordered list items
        if (
          !elements.length ||
          elements[elements.length - 1].type !== OrderedList
        ) {
          elements.push(
            <OrderedList key={i} mb={2} pl={5}>
              <ListItem>{line.replace(/^\d+\.\s/, '')}</ListItem>
            </OrderedList>,
          );
        } else {
          const lastList = elements[elements.length - 1];
          elements[elements.length - 1] = (
            <OrderedList key={i} mb={2} pl={5}>
              {React.Children.toArray(lastList.props.children)}
              <ListItem>{line.replace(/^\d+\.\s/, '')}</ListItem>
            </OrderedList>
          );
        }
      } else if (line.trim() === '') {
        // Skip empty lines
      } else {
        // Regular text
        const processedLine = line
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          .replace(/`(.*?)`/g, '<code>$1</code>')
          .replace(
            /\[(.*?)\]\((.*?)\)/g,
            '<a href="$2" target="_blank" style="color: #3182ce; text-decoration: underline;">$1</a>',
          );

        elements.push(
          <Text key={i} mb={2} lineHeight="tall">
            <span dangerouslySetInnerHTML={{ __html: processedLine }} />
          </Text>,
        );
      }
    });

    return elements;
  };

  return <Box>{parseMarkdown(cleanedContent)}</Box>;
};
