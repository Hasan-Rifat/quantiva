/*eslint-disable*/
'use client';
import Card from '@/components/card/Card';
import MessageBox from '@/components/MessageBox';
import { EssayBody, OpenAIModel } from '@/types/types';
import {
  Button,
  Flex,
  FormLabel,
  Select,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

const info = {
  title: 'Estrategia de performance',
  description:
    'Distribuye tu presupuesto con inteligencia: un modelo predictivo analiza en tiempo real CTR, CPA y ROAS para asignar inversión al canal, audiencia y creatividad con mayor probabilidad de éxito. Ajusta pujas dinámicamente, prioriza formatos de alto impacto y maximiza clics y conversiones al menor costo posible. *Cada 12 horas se realizaba un scrapeo completo de las pautas de competidores y las tendencias en distintas categorías, la información generada aquí trabajara con esta información, más la información pública de la empresa.',
};

export default function Home() {
  // *** If you use .env.local variable for your API key, method which we recommend, use the apiKey variable commented below
  // Input States
  const [paragraphs, setParagraphs] = useState<3 | 4 | 5>(3);
  const [essayType, setEssayType] = useState<
    | ''
    | 'Argumentative'
    | 'Classic'
    | 'Persuasive'
    | 'Memoir'
    | 'Critique'
    | 'Compare/Contrast'
  >('');
  const [topic, setTopic] = useState<string>('');
  // Response message
  const [outputCode, setOutputCode] = useState<string>('');
  // ChatGPT model
  const [model, setModel] = useState<OpenAIModel>('gpt-3.5-turbo');
  // Loading state
  const [loading, setLoading] = useState<boolean>(false);
  // API Key
  // const [apiKey, setApiKey] = useState<string>();
  const textColor = useColorModeValue('navy.700', 'white');
  const placeholderColor = useColorModeValue(
    { color: 'gray.500' },
    { color: 'whiteAlpha.600' },
  );
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const toast = useToast();

  // -------------- Main API Handler --------------
  const handleTranslate = async () => {
    /*  const apiKey = localStorage.getItem('apiKey');
    const maxCodeLength = model === 'gpt-3.5-turbo' ? 700 : 700;

    // Chat post conditions(maximum number of characters, valid message etc.)

    if (!apiKey?.includes('sk-')) {
      alert('Please enter an API key.');
      return;
    }
 */
    if (!topic) {
      alert('Please enter your subject.');
      return;
    }
    /* if (!paragraphs) {
      alert('Please choose number of paragraphs.');
      return;
    }
    if (!essayType) {
      alert('Please choose a type of essay');
      return;
    }

    if (topic.length > maxCodeLength) {
      alert(
        `Please enter code less than ${maxCodeLength} characters. You are currently at ${topic.length} characters.`,
      );
      return;
    } */

    setLoading(true);
    setOutputCode('');

    const controller = new AbortController();

    /*   const body = {
      topic: topic,
      title: info.title,
      description: info.description,
    }; */

    // -------------- Fetch --------------

    // start

    const url =
      'https://n8n-n8n.nkzjik.easypanel.host/webhook/invoke-n8n-agent-QD';
    const headers = {
      Authorization: 'Bearer ...', // Replace with your token
      'Content-Type': 'application/json',
      Accept: '*/*',
      'User-Agent': 'python-requests/2.32.3',
    };

    const body = {
      sessionId: '9ff8f7e8-f1cb-44a2-bfd9-ed9d06fd7382',
      chatInput: `${topic} ${info.title} ${info.description}`,
    };

    const res = await axios.post(url, body, { headers });

    // end

    const response = await fetch('/api/essayAPI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      setLoading(false);
      if (response) {
        alert(
          'Something went wrong went fetching from the API. Make sure to use a valid API key.',
        );
      }
      return;
    }

    const data = response.body;

    if (!data) {
      setLoading(false);
      alert('Something went wrong');
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let code = '';

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);

      code += chunkValue;

      setOutputCode((prevCode) => prevCode + chunkValue);
    }

    setLoading(false);
    copyToClipboard(code);
  };

  // -------------- Copy Response --------------
  const copyToClipboard = (text: string) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  // -------------- Input Value Handler --------------
  const handleChange = (Event: any) => {
    setTopic(Event.target.value);
  };
  /*   const handleChangeParagraphs = (Event: any) => {
    setParagraphs(Event.target.value);
  };
  const handleChangeEssayType = (Event: any) => {
    setEssayType(Event.target.value);
  }; */
  return (
    <Flex
      w="100%"
      direction="column"
      position="relative"
      mt={{ base: '70px', md: '0px', xl: '0px' }}
    >
      <Flex
        mx="auto"
        w={{ base: '100%', md: '100%', xl: '100%' }}
        maxW="100%"
        justify="center"
        direction={{ base: 'column', md: 'row' }}
      >
        <Card
          minW={{ base: '100%', md: '40%', xl: '476px' }}
          maxW={{ base: '100%', md: '40%', xl: '476px' }}
          h="min-content"
          me={{ base: '0px', md: '20px' }}
          mb={{ base: '20px', md: '0px' }}
        >
          <Text fontSize={'30px'} color={textColor} fontWeight="800" mb="10px">
            {info.title}
          </Text>
          <Text fontSize={'16px'} color="gray.500" fontWeight="500" mb="30px">
            {info.description}
          </Text>
          <Textarea
            border="1px solid"
            borderRadius={'10px'}
            borderColor={borderColor}
            p="15px 20px"
            mb="28px"
            minH="324px"
            fontWeight="500"
            _focus={{ borderColor: 'none' }}
            color={textColor}
            placeholder="Añadir experiencia/contexto:"
            _placeholder={placeholderColor}
            onChange={handleChange}
          />

          <Button
            py="20px"
            px="16px"
            fontSize="md"
            variant="primary"
            borderRadius="45px"
            w={{ base: '100%' }}
            h="54px"
            onClick={handleTranslate}
            isLoading={loading ? true : false}
            _hover={{
              boxShadow:
                '0px 21px 27px -10px rgba(96, 60, 255, 0.48) !important',
              bg: 'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%) !important',
              _disabled: {
                bg: 'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)',
              },
            }}
          >
            Generar
          </Button>
        </Card>
        <Card maxW="100%" h="100%">
          <Text fontSize={'30px'} color={textColor} fontWeight="800" mb="10px">
            AI Output
          </Text>
          <Text fontSize={'16px'} color="gray.500" fontWeight="500" mb="30px">
            Enjoy your outstanding Hazme una campaña ganadora!
          </Text>
          <MessageBox output={outputCode} />
          <Button
            variant="transparent"
            border="1px solid"
            borderColor={borderColor}
            borderRadius="full"
            maxW="160px"
            ms="auto"
            fontSize="md"
            w={{ base: '300px', md: '420px' }}
            h="54px"
            onClick={() => {
              if (outputCode) navigator.clipboard.writeText(outputCode);
              toast({
                title: outputCode
                  ? `Essay succesfully copied!`
                  : `Generate an essay first!`,
                position: 'top',
                status: outputCode ? 'success' : `error`,
                isClosable: true,
              });
            }}
          >
            Copy text
          </Button>
        </Card>
      </Flex>
    </Flex>
  );
}
