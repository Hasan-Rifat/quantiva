'use client';

// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Link,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Footer from '@/components/footer/FooterAuthDefault';
import illustration from '/public/img/auth/bg.svg';
import { HSeparator } from '@/components/separator/Separator';
import DefaultAuth from '@/components/auth';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import { useRouter } from 'next/navigation';

/* const menu: [string] = [
  'Terms & Conditions',
  'Privacy Policy',
  'License',
  'Refund Policy',
]; */

function SignUp() {
  // Chakra color mode
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.500';
  const textColorDetails = useColorModeValue('navy.700', 'gray.500');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  const brandStars = useColorModeValue('brand.500', 'brand.400');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const placeholderColor = useColorModeValue(
    { color: 'gray.500', fontWeight: '500' },
    { color: 'whiteAlpha.600', fontWeight: '500' },
  );
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log('Submitting form with:', {
      email,
      password,
      name,
      confirmPassword,
    });

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (!email || !password || !name) {
      alert('Please fill in all fields');
      return;
    }

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name }),
    });
    const data = await res.json();

    console.log(data);
    if (res.ok) {
      router.push('/login');
    } else {
      alert(data.message);
    }
  };

  return (
    <DefaultAuth illustrationBackground={illustration?.src}>
      <Flex
        w="100%"
        maxW="max-content"
        mx={{ base: 'auto', lg: '0px' }}
        me="auto"
        h="100%"
        justifyContent="center"
        mb={{ base: '30px', md: '60px' }}
        px={{ base: '25px', md: '0px' }}
        mt={{ base: '40px', md: '8vh' }}
        flexDirection="column"
      >
        <Box me="auto">
          <Text
            fontWeight={'700'}
            color={textColor}
            fontSize={{ base: '34px', lg: '36px' }}
            mb="10px"
          >
            Create account
          </Text>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="500"
            fontSize="sm"
          >
            Enter your credentials to create your account!
          </Text>
        </Box>

        <Flex
          zIndex="2"
          direction="column"
          w={{ base: '100%', md: '420px' }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: 'auto', lg: 'unset' }}
          me="auto"
          mb={{ base: '20px', md: 'auto' }}
        >
          <Button
            variant="transparent"
            border="1px solid"
            borderColor={borderColor}
            borderRadius="14px"
            ms="auto"
            mb="30px"
            fontSize="sm"
            w={{ base: '100%' }}
            h="54px"
          >
            <Icon
              as={FcGoogle as React.ElementType}
              w="20px"
              h="20px"
              me="10px"
            />
            Continue with Google
          </Button>
          <Flex align="center" mb="25px">
            <HSeparator />
            <Text
              color={textColorSecondary}
              fontWeight="500"
              fontSize="sm"
              mx="14px"
            >
              or
            </Text>
            <HSeparator />
          </Flex>
          <FormControl onSubmit={handleSubmit} as="form">
            <FormLabel
              cursor="pointer"
              htmlFor="name"
              display="flex"
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              mb="8px"
            >
              Name<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant="auth"
              id="name"
              fontSize="sm"
              type="text"
              placeholder="Enter your name"
              mb="24px"
              size="lg"
              borderColor={borderColor}
              h="54px"
              _placeholder={{ placeholderColor }}
              onChange={(e) => setName(e.target.value)}
              value={name}
              fontWeight="500"
            />
            <FormLabel
              cursor="pointer"
              display="flex"
              ms="4px"
              htmlFor="email"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              mb="8px"
            >
              Email<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              id="email"
              variant="auth"
              fontSize="sm"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              borderColor={borderColor}
              placeholder="Enter your email address"
              mb="24px"
              size="lg"
              _placeholder={{ placeholderColor }}
              h="54px"
              fontWeight="500"
            />
            {/* PASSWORD */}
            <FormLabel
              cursor="pointer"
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              htmlFor="pass"
              color={textColor}
              display="flex"
            >
              Password<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                isRequired={true}
                variant="auth"
                id="pass"
                fontSize="sm"
                placeholder="Enter your password"
                mb="24px"
                size="lg"
                h="54px"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                borderColor={borderColor}
                fontWeight="500"
                _placeholder={{ placeholderColor }}
                type={show ? 'text' : 'password'}
              />
              <InputRightElement display="flex" alignItems="center" mt="4px">
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: 'pointer' }}
                  as={
                    show
                      ? (RiEyeCloseLine as React.ElementType)
                      : (MdOutlineRemoveRedEye as React.ElementType)
                  }
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            {/* CONFIRM */}
            <FormLabel
              cursor="pointer"
              htmlFor="confirm"
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              borderColor={borderColor}
              color={textColor}
              display="flex"
            >
              Confirm Password<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                isRequired={true}
                variant="auth"
                fontSize="sm"
                placeholder="Enter your password again"
                id="confirm"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                mb="24px"
                size="lg"
                borderColor={borderColor}
                h="54px"
                fontWeight="500"
                _placeholder={{ placeholderColor }}
                type={show ? 'text' : 'password'}
              />
              <InputRightElement display="flex" alignItems="center" mt="4px">
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: 'pointer' }}
                  as={
                    show
                      ? (RiEyeCloseLine as React.ElementType)
                      : (MdOutlineRemoveRedEye as React.ElementType)
                  }
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <Button
              variant="primary"
              py="20px"
              px="16px"
              fontSize="sm"
              borderRadius="45px"
              mt={{ base: '20px', md: '0px' }}
              w="100%"
              h="54px"
              mb="24px"
              bg="#252529"
              type="submit"
            >
              Create your Account
            </Button>
          </FormControl>

          <Flex justifyContent="center" alignItems="start" maxW="100%" mt="0px">
            <Text color={textColorDetails} fontWeight="500" fontSize="sm">
              Already have an account?
            </Text>
            <Link href="/others/sign-in" py="0px" lineHeight={'120%'}>
              <Text
                color={textColorBrand}
                fontSize="sm"
                as="span"
                ms="5px"
                fontWeight="600"
              >
                Login here
              </Text>
            </Link>
          </Flex>
          {/*    <Flex >
            {menu.map((item, index) => (
              <Link
                key={index}
                href="#"
                fontSize="sm"
                color={textColorDetails}
                fontWeight="500"
                _hover={{ textDecoration: 'none', color: textColorBrand }}
                ms={index === 0 ? '0px' : '20px'}
              >
                {item}
              </Link>
            ))}
          </Flex> */}

          {/* <Footer /> */}
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignUp;
