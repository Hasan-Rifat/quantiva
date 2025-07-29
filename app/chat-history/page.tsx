'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  Text,
  useColorModeValue,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Img,
  IconButton,
  Tooltip,
} from '@chakra-ui/react';
import {
  MdAutoAwesome,
  MdBolt,
  MdEdit,
  MdPerson,
  MdRefresh,
} from 'react-icons/md';
import Bg from '../../public/img/chat/bg.svg';
import { useAppSelector } from '@/redux/hooks';
import ReportList from '@/components/reports/ReportList';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

interface ApiResponse {
  output: string;
}

const ChatApiComponent: React.FC = () => {
  const { prompt } = useAppSelector((state) => state.chatPrompt);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [model, setModel] = useState<'gpt-3.5-turbo' | 'gpt-4-1106-preview'>(
    'gpt-3.5-turbo',
  );

  // Color mode values
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const inputColor = useColorModeValue('navy.700', 'white');
  const iconColor = useColorModeValue('brand.500', 'white');
  const bgIcon = useColorModeValue(
    'linear-gradient(180deg, #FBFBFF 0%, #CACAFF 100%)',
    'whiteAlpha.200',
  );
  const brandColor = useColorModeValue('brand.500', 'white');
  const buttonBg = useColorModeValue('white', 'whiteAlpha.100');
  const gray = useColorModeValue('gray.500', 'white');
  const buttonShadow = useColorModeValue(
    '14px 27px 45px rgba(112, 144, 176, 0.2)',
    'none',
  );
  const textColor = useColorModeValue('navy.700', 'white');
  const placeholderColor = useColorModeValue(
    { color: 'gray.500' },
    { color: 'whiteAlpha.600' },
  );

  // Effect to automatically send prompt when it's available
  useEffect(() => {
    if (prompt) {
      sendMessage(prompt);
    }
  }, [prompt]);

  const sendMessage = async (messageContent: string, isRegenerate = false) => {
    // If regenerating, remove the last AI message
    if (isRegenerate) {
      setMessages((prev) => {
        const lastMessage = prev[prev.length - 1];
        if (lastMessage && !lastMessage.isUser) {
          return prev.slice(0, -1);
        }
        return prev;
      });
    }

    // Add user message to the chat if not regenerating
    if (!isRegenerate) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: messageContent,
        isUser: true,
      };
      setMessages((prev) => [...prev, userMessage]);
    }

    setLoading(true);
    setError(null);
    if (!isRegenerate) {
      setInput('');
    }

    try {
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
        chatInput: isRegenerate
          ? messages.length > 1
            ? messages[messages.length - 2].text
            : messageContent
          : messageContent,
      };

      const res = await axios.post<ApiResponse>(url, body, { headers });

      // Add AI response to the chat
      const aiMessage: Message = {
        id: Date.now().toString(),
        text: res.data.output,
        isUser: false,
      };

      setMessages((prev) => [...prev, aiMessage]);

      //  if res.data.output is successfully received,

      const response = await fetch('/api/reports/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Include cookies for JWT
        body: JSON.stringify({
          name: isRegenerate
            ? messages.length > 1
              ? messages[messages.length - 2].text
              : messageContent
            : messageContent,
          reportType: 'chat',
          date: new Date().toISOString(),
          url: res.data.output,
        }),
      });
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const callNewApi = async () => {
    if (!input.trim()) {
      setError('Please enter a question or message.');
      return;
    }
    await sendMessage(input);
  };

  const regenerateResponse = async () => {
    if (messages.length === 0) return;
    const lastUserMessage = messages
      .slice()
      .reverse()
      .find((msg) => msg.isUser);
    if (lastUserMessage) {
      await sendMessage(lastUserMessage.text, true);
    }
  };

  const canRegenerate =
    messages.length > 0 && !messages[messages.length - 1].isUser;

  return (
    <Flex
      w="100%"
      pt={{ base: '70px', md: '0px' }}
      direction="column"
      position="relative"
    >
      <Img
        src={Bg.src}
        position={'absolute'}
        w="100%"
        left="50%"
        top="25%"
        transform={'translate(-50%, -50%)'}
        zIndex={'-1'}
      />
      <Flex
        direction="column"
        mx="auto"
        w={{ base: '100%', md: '100%', xl: '100%' }}
        minH={{ base: '75vh', '2xl': '85vh' }}
        maxW="1000px"
      >
        {/* Model Change */}
        <Flex
          direction={'column'}
          w="100%"
          mb={messages.length ? '20px' : 'auto'}
        >
          <Flex
            mx="auto"
            zIndex="2"
            w="max-content"
            mb="20px"
            borderRadius="60px"
          ></Flex>

          <Accordion color={gray} allowToggle w="100%" my="0px" mx="auto">
            <AccordionItem border="none">
              <AccordionButton
                borderBottom="0px solid"
                maxW="max-content"
                mx="auto"
                _hover={{ border: '0px solid', bg: 'none' }}
                _focus={{ border: '0px solid', bg: 'none' }}
              >
                <AccordionIcon color={gray} />
              </AccordionButton>
              <AccordionPanel mx="auto" w="max-content" p="0px 0px 10px 0px">
                <Text
                  color={gray}
                  fontWeight="500"
                  fontSize="sm"
                  textAlign={'center'}
                >
                  This is a cool text example.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>

        <ReportList />

        {/* Main Box - Messages */}
        <Flex direction="column" w="100%" mx="auto" mb={'auto'}>
          {messages.map((message) => (
            <Flex
              key={message.id}
              w="100%"
              align={'center'}
              mb="10px"
              direction="column"
            >
              <Flex w="100%" align={'center'} mb="10px">
                <Flex
                  borderRadius="full"
                  justify="center"
                  align="center"
                  bg={message.isUser ? 'transparent' : '#00D19D'}
                  border="1px solid"
                  borderColor={borderColor}
                  me="20px"
                  h="40px"
                  minH="40px"
                  minW="40px"
                >
                  <Icon
                    as={
                      (message.isUser
                        ? MdPerson
                        : MdAutoAwesome) as React.ElementType
                    }
                    width="20px"
                    height="20px"
                    color={message.isUser ? brandColor : 'white'}
                  />
                </Flex>
                <Flex
                  p="22px"
                  border="1px solid"
                  borderColor={borderColor}
                  borderRadius="14px"
                  w="100%"
                  zIndex={'2'}
                  // bg={message.isUser ? 'transparent' : buttonBg}
                  boxShadow={!message.isUser ? buttonShadow : 'none'}
                  position="relative"
                >
                  <Text
                    color={textColor}
                    fontWeight="600"
                    fontSize={{ base: 'sm', md: 'md' }}
                    lineHeight={{ base: '24px', md: '26px' }}
                    whiteSpace="pre-wrap"
                  >
                    {message.text}
                  </Text>
                  {message.isUser ? (
                    <Icon
                      cursor="pointer"
                      as={MdEdit as React.ElementType}
                      ms="auto"
                      width="20px"
                      height="20px"
                      color={gray}
                      // bg={'#00D19D'}
                    />
                  ) : (
                    <Tooltip label="Regenerate response" placement="top">
                      <IconButton
                        aria-label="Regenerate response"
                        icon={MdRefresh as any}
                        position="absolute"
                        right="10px"
                        top="10px"
                        size="sm"
                        variant="ghost"
                        onClick={regenerateResponse}
                        isDisabled={loading}
                      />
                    </Tooltip>
                  )}
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>

        {/* Regenerate button for mobile or when not hovering */}
        {canRegenerate && (
          <Flex justify="center" mt={2} mb={4}>
            <Button
              leftIcon={<Icon as={MdRefresh as any} />}
              variant="outline"
              size="sm"
              onClick={regenerateResponse}
              isDisabled={loading}
            >
              Regenerate response
            </Button>
          </Flex>
        )}

        {/* Chat Input */}
        <Flex
          ms={{ base: '0px', xl: '60px' }}
          mt="20px"
          justifySelf={'flex-end'}
        >
          <Input
            minH="54px"
            h="100%"
            border="1px solid"
            borderColor={borderColor}
            borderRadius="45px"
            p="15px 20px"
            me="10px"
            fontSize="sm"
            fontWeight="500"
            _focus={{ borderColor: 'none' }}
            color={inputColor}
            _placeholder={placeholderColor}
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && callNewApi()}
          />
          <Button
            variant="primary"
            py="20px"
            px="16px"
            fontSize="sm"
            borderRadius="45px"
            ms="auto"
            w={{ base: '160px', md: '210px' }}
            h="54px"
            boxShadow="0px 21px 27px -10px rgba(96, 60, 255, 0.48)"
            bg="#252529"
            _hover={{
              _disabled: {
                bg: 'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)',
              },
            }}
            onClick={callNewApi}
            isLoading={loading}
          >
            Submit
          </Button>
        </Flex>

        {error && (
          <Flex justify="center" mt="10px" color="red.400">
            <Text fontSize="sm">{error}</Text>
          </Flex>
        )}

        <Flex
          justify="center"
          mt="20px"
          direction={{ base: 'column', md: 'row' }}
          alignItems="center"
        >
          <Text fontSize="xs" textAlign="center" color={gray}>
            Free Research Preview. Responses may produce inaccurate information
            about people, places, or facts.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ChatApiComponent;
