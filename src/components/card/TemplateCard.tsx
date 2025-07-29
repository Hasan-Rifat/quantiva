'use client';
// Chakra imports
import {
  Box,
  Button,
  Flex,
  useColorModeValue,
  Text,
  Icon,
} from '@chakra-ui/react';
import Card from '@/components/card/Card';
import { MdEdit } from 'react-icons/md';
import NavLink from '../link/NavLink';
import React from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { setPrompt } from '@/redux/slices/chatPromptSlice';

export default function TemplateCard(props: {
  illustration: string | JSX.Element | StaticImageData;
  name: string;
  description: string;
  link: string;
  edit?: string;
  action?: any;
  admin?: boolean;
}) {
  const { illustration, name, description, link, edit, admin } = props;
  const textColor = useColorModeValue('navy.700', 'white');
  const gray = useColorModeValue('gray.500', 'white');

  // prompt create and store
  const dispatch = useAppDispatch();

  return (
    <NavLink onClick={() => dispatch(setPrompt(name))} href={link}>
      <Card h="100%" py="24px" px="24px">
        <Flex
          my="auto"
          h="100%"
          direction={'column'}
          align={{ base: 'start', xl: 'start' }}
          justify={{ base: 'center', xl: 'center' }}
        >
          <Flex align="start" w="100%" mb="30px">
            {typeof illustration === 'string' ? (
              <Text fontSize="34px" lineHeight={'120%'}>
                {illustration}
              </Text>
            ) : React.isValidElement(illustration) ? (
              illustration
            ) : illustration &&
              typeof illustration === 'object' &&
              'src' in illustration ? (
              // If illustration is an image object, render it as an <img>
              <img
                src={
                  (
                    illustration as {
                      src: string;
                      height?: number;
                      width?: number;
                    }
                  ).src
                }
                height={(illustration as { height?: number }).height}
                width={(illustration as { width?: number }).width}
                style={{ maxHeight: 48, maxWidth: 48 }}
                alt={name + ' illustration'}
              />
            ) : null}
            {admin ? (
              <Flex ms="auto">
                {/* <NavLink href={edit ? edit : '/admin/edit-template'}> */}
                <Button
                  w="24px"
                  h="24px"
                  _hover={{}}
                  _focus={{}}
                  _active={{}}
                  bg="none"
                >
                  <Icon
                    w="24px"
                    h="24px"
                    as={MdEdit as React.ElementType}
                    color={gray}
                  />
                </Button>
                {/* </NavLink> */}
              </Flex>
            ) : null}
          </Flex>
          <Box>
            <Text fontSize="lg" color={textColor} fontWeight="700" mb="8px">
              {name}
            </Text>
            <Text fontSize="sm" color={gray} fontWeight="500">
              {description}
            </Text>
          </Box>
        </Flex>
      </Card>
    </NavLink>
  );
}
