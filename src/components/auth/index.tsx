'use client';
// Chakra imports
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import Footer from '@/components/footer/FooterAuthDefault';
import FixedPlugin from '@/components/fixedPlugin/FixedPlugin';
import { FaChevronLeft } from 'react-icons/fa';
import NavLink from '@/components/link/NavLink';
import { PropsWithChildren } from 'react';

interface DefaultAuthLayoutProps extends PropsWithChildren {
  children: JSX.Element;
  illustrationBackground: string;
}

export default function DefaultAuthLayout(props: DefaultAuthLayoutProps) {
  const { children, illustrationBackground } = props;
  // Chakra color mode
  return (
    <Flex position="relative" h="max-content">
      <Flex
        h={{
          sm: 'initial',
          md: 'unset',
          lg: '100vh',
          xl: '97vh',
        }}
        w="100%"
        maxW={{ md: '66%', lg: '1313px' }}
        mx="auto"
        pt={{ sm: '50px', md: '0px' }}
        px={{ lg: '30px', xl: '0px' }}
        ps={{ xl: '70px' }}
        justifyContent="start"
        direction="column"
      >
        <NavLink
          href="/inicio"
          styles={{
            width: 'fit-content',
            marginTop: '40px',
          }}
        >
          {/* <Flex
            align="center"
            ps={{ base: '25px', lg: '0px' }}
            pt={{ lg: '0px', xl: '0px' }}
            w="fit-content"
          >
            <Icon
              as={FaChevronLeft as React.ElementType}
              me="12px"
              h="13px"
              w="8px"
              color="gray.500"
            />
            <Text ms="0px" fontSize="sm" color="gray.500">
              Back to the dashboard
            </Text>
          </Flex> */}
        </NavLink>
        {children}
        <Box
          display={{ base: 'none', md: 'block' }}
          position="absolute"
          top="0"
          right="0"
          h="100vh"
          w="50%"
          zIndex={-1}
        >
          <Flex
            bg={`url(${illustrationBackground})`}
            justify="center"
            align="end"
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="center"
          />
        </Box>
      </Flex>
      <FixedPlugin />
    </Flex>
  );
}
