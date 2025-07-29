// 'use client';

// // Chakra imports
// import {
//   Box,
//   Button,
//   Checkbox,
//   Flex,
//   FormControl,
//   FormLabel,
//   Icon,
//   Link,
//   Input,
//   InputGroup,
//   InputRightElement,
//   Text,
//   useColorModeValue,
//   useToast,
// } from '@chakra-ui/react';
// import illustration from '/public/img/auth/bg.svg';
// import { HSeparator } from '@/components/separator/Separator';
// import DefaultAuth from '@/components/auth';
// import React, { useState } from 'react';
// import { FcGoogle } from 'react-icons/fc';
// import { MdOutlineRemoveRedEye } from 'react-icons/md';
// import { RiEyeCloseLine } from 'react-icons/ri';
// import NavLink from '@/components/link/NavLink';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';

// function SignUp() {
//   // Chakra color mode
//   const textColor = useColorModeValue('navy.700', 'white');
//   const textColorSecondary = 'gray.500';
//   const textColorDetails = useColorModeValue('navy.700', 'gray.500');
//   const textColorBrand = useColorModeValue('brand.500', 'white');
//   const brandStars = useColorModeValue('brand.500', 'brand.400');
//   const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
//   const placeholderColor = useColorModeValue(
//     { color: 'gray.500', fontWeight: '500' },
//     { color: 'whiteAlpha.600', fontWeight: '500' },
//   );
//   const [show, setShow] = React.useState(false);
//   const handleClick = () => setShow(!show);
//   const router = useRouter();
//   const toast = useToast();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     /* const res = await fetch('/api/auth/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });
//     const data = await res.json();
//     if (res.ok) {
//       router.push('/dashboard');
//     } else {
//       alert(data.message);
//     } */

//     // toastify
//     /* setLoading(true);
//     if (!email || !password) {
//       toast({
//         title: 'Error',
//         description: 'Please fill in all fields',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//       setLoading(false);
//     } */

//     console.log('Email:', email);
//   };

//   return (
//     <DefaultAuth illustrationBackground={illustration?.src}>
//       <Flex
//         w="100%"
//         maxW="max-content"
//         mx={{ base: 'auto', lg: '0px' }}
//         me="auto"
//         h="100%"
//         justifyContent="center"
//         mb={{ base: '30px', md: '60px' }}
//         px={{ base: '25px', md: '0px' }}
//         mt={{ base: '40px', md: '12vh' }}
//         flexDirection="column"
//       >
//         <Box me="auto">
//           <Text
//             color={textColor}
//             fontSize={{ base: '34px', lg: '36px' }}
//             mb="10px"
//             fontWeight={'700'}
//           >
//             Sign In
//           </Text>
//           <Text
//             mb="36px"
//             ms="4px"
//             color={textColorSecondary}
//             fontWeight="500"
//             fontSize="sm"
//           >
//             Enter your email and password to sign in!
//           </Text>
//         </Box>
//         <Flex
//           zIndex="2"
//           direction="column"
//           w={{ base: '100%', md: '420px' }}
//           maxW="100%"
//           background="transparent"
//           borderRadius="15px"
//           mx={{ base: 'auto', lg: 'unset' }}
//           me="auto"
//           mb={{ base: '20px', md: 'auto' }}
//         >
//           <Button
//             variant="transparent"
//             border="1px solid"
//             borderColor={borderColor}
//             borderRadius="14px"
//             ms="auto"
//             mb="30px"
//             fontSize="md"
//             w={{ base: '100%' }}
//             h="54px"
//           >
//             <Icon as={FcGoogle as any} w="20px" h="20px" me="10px" />
//             Sign in with Google
//           </Button>
//           <Flex align="center" mb="25px">
//             <HSeparator />
//             <Text
//               color={textColorSecondary}
//               fontWeight="500"
//               fontSize="sm"
//               mx="14px"
//             >
//               or
//             </Text>
//             <HSeparator />
//           </Flex>
//           <FormControl onSubmit={handleSubmit} isRequired>
//             <FormLabel
//               cursor="pointer"
//               display="flex"
//               ms="4px"
//               htmlFor="email"
//               fontSize="sm"
//               fontWeight="500"
//               color={textColor}
//               mb="8px"
//             >
//               Email<Text color={brandStars}>*</Text>
//             </FormLabel>
//             <Input
//               isRequired={true}
//               id="email"
//               variant="auth"
//               fontSize="sm"
//               type="email"
//               placeholder="Enter your email address"
//               mb="24px"
//               size="lg"
//               onChange={(e) => setEmail(e.target.value)}
//               borderColor={borderColor}
//               h="54px"
//               fontWeight="500"
//               _placeholder={{ placeholderColor }}
//             />
//             {/* PASSWORD */}
//             <FormLabel
//               cursor="pointer"
//               ms="4px"
//               fontSize="sm"
//               fontWeight="500"
//               htmlFor="pass"
//               color={textColor}
//               display="flex"
//             >
//               Password<Text color={brandStars}>*</Text>
//             </FormLabel>
//             <InputGroup size="md">
//               <Input
//                 isRequired={true}
//                 variant="auth"
//                 id="pass"
//                 fontSize="sm"
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 mb="24px"
//                 size="lg"
//                 borderColor={borderColor}
//                 h="54px"
//                 fontWeight="500"
//                 _placeholder={{ placeholderColor }}
//                 type={show ? 'text' : 'password'}
//               />
//               <InputRightElement display="flex" alignItems="center" mt="4px">
//                 <Icon
//                   color={textColorSecondary}
//                   _hover={{ cursor: 'pointer' }}
//                   as={
//                     show
//                       ? (RiEyeCloseLine as React.ElementType)
//                       : (MdOutlineRemoveRedEye as React.ElementType)
//                   }
//                   onClick={handleClick}
//                 />
//               </InputRightElement>
//             </InputGroup>
//             <Flex justifyContent="space-between" align="center" mb="24px">
//               <FormControl display="flex" alignItems="center">
//                 <Checkbox
//                   id="remember-login"
//                   colorScheme="brandScheme"
//                   me="10px"
//                 />
//                 <FormLabel
//                   htmlFor="remember-login"
//                   mb="0"
//                   color={textColor}
//                   fontWeight="600"
//                   fontSize="sm"
//                 >
//                   Keep me logged in
//                 </FormLabel>
//               </FormControl>
//               <NavLink href="#">
//                 <Text
//                   color={textColorBrand}
//                   w="124px"
//                   fontWeight="600"
//                   fontSize="sm"
//                 >
//                   Forgot password?
//                 </Text>
//               </NavLink>
//             </Flex>
//             {/* CONFIRM */}
//             <Button
//               variant="primary"
//               py="20px"
//               px="16px"
//               fontSize="sm"
//               borderRadius="45px"
//               mt={{ base: '20px', md: '0px' }}
//               w="100%"
//               h="54px"
//               mb="24px"
//               bg="#252529"
//               type="submit"
//             >
//               Sign In
//             </Button>
//           </FormControl>
//           <Flex justifyContent="center" alignItems="start" maxW="100%" mt="0px">
//             <Text color={textColorDetails} fontWeight="500" fontSize="sm">
//               Not registered yet?
//             </Text>
//             <Link href="/others/register" py="0px" lineHeight={'120%'}>
//               <Text
//                 color={textColorBrand}
//                 fontSize="sm"
//                 as="span"
//                 ms="5px"
//                 fontWeight="600"
//               >
//                 Create an Account
//               </Text>
//             </Link>
//           </Flex>
//         </Flex>
//       </Flex>
//     </DefaultAuth>
//   );
// }

// export default SignUp;
'use client';

// Chakra imports
import {
  Box,
  Button,
  Checkbox,
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
import illustration from '/public/img/auth/bg.svg';
import { HSeparator } from '@/components/separator/Separator';
import DefaultAuth from '@/components/auth';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import NavLink from '@/components/link/NavLink';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/slices/userSlice';
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
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all fields.');
      return;
    }
    setLoading(true);
    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
      // const res = await fetch(`${baseUrl}/api/reports/get`, {
      //   credentials: 'include',
      // });

      const { data } = await axios.post(`${baseUrl}/api/auth/login`, {
        email: email.toLowerCase(),
        password,
      });
      console.log('Response data:', data);
      if (data?.message) {
        dispatch(
          setUser({
            username: data.name,
            role: data.role,
            email: data.email,
          }),
        );
        toast.success(data.message || 'Signed in successfully!');
        router.push('/');
      } else {
        toast.error(data?.message || 'Invalid credentials.');
      }
    } catch (error: any) {
      console.log('Error during sign in:', error);
      toast.error(
        error?.response?.data?.message ||
          'An error occurred while signing in. Please try again.',
      );
    } finally {
      setLoading(false);
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
        mt={{ base: '40px', md: '12vh' }}
        flexDirection="column"
      >
        <Box me="auto">
          <Text
            color={textColor}
            fontSize={{ base: '34px', lg: '36px' }}
            mb="10px"
            fontWeight={'700'}
          >
            Iniciar sesión
          </Text>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="500"
            fontSize="sm"
          >
            Ingresa tu correo electrónico y contraseña para iniciar sesión.
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
          {/*  <Button
            variant="transparent"
            border="1px solid"
            borderColor={borderColor}
            borderRadius="14px"
            ms="auto"
            mb="30px"
            fontSize="md"
            w={{ base: '100%' }}
            h="54px"
          >
            <Icon as={FcGoogle as any} w="20px" h="20px" me="10px" />
            Sign in with Google
          </Button> */}
          {/*    <Flex align="center" mb="25px">
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
          </Flex> */}
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
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
                Correo electrónico<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                isRequired={true}
                id="email"
                variant="auth"
                fontSize="sm"
                type="email"
                placeholder="Introduzca su dirección de correo electrónico"
                mb="24px"
                size="lg"
                onChange={(e) => setEmail(e.target.value)}
                borderColor={borderColor}
                h="54px"
                fontWeight="500"
                _placeholder={{ placeholderColor }}
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
                Contraseña<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size="md">
                <Input
                  isRequired={true}
                  variant="auth"
                  id="pass"
                  fontSize="sm"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Introduzca su contraseña"
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
              <Flex justifyContent="space-between" align="center" mb="24px">
                <FormControl display="flex" alignItems="center">
                  <Checkbox
                    id="remember-login"
                    colorScheme="brandScheme"
                    me="10px"
                  />
                  <FormLabel
                    htmlFor="remember-login"
                    mb="0"
                    color={textColor}
                    fontWeight="600"
                    fontSize="sm"
                  >
                    Mantenme conectado
                  </FormLabel>
                </FormControl>
                {/*   <NavLink href="#">
                  <Text
                    color={textColorBrand}
                    w="124px"
                    fontWeight="600"
                    fontSize="sm"
                  >
                    ¿Olvidaste tu contraseña?
                  </Text>
                </NavLink> */}
              </Flex>
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
                isLoading={loading}
                loadingText="Iniciando sesión..."
              >
                Iniciar sesión
              </Button>
            </FormControl>
          </form>
          {/*  <Flex justifyContent="center" alignItems="start" maxW="100%" mt="0px">
            <Text color={textColorDetails} fontWeight="500" fontSize="sm">
              ¿No estás registrado aún?
            </Text>
            <Link href="/others/register" py="0px" lineHeight={'120%'}>
              <Text
                color={textColorBrand}
                fontSize="sm"
                as="span"
                ms="5px"
                fontWeight="600"
              >
                Crear una cuenta
              </Text>
            </Link>
          </Flex> */}
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignUp;
