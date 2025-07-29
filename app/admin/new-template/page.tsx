// 'use client';
// /*eslint-disable*/

// import Card from '@/components/card/Card';
// import {
//   Box,
//   Button,
//   Flex,
//   FormLabel,
//   Img,
//   Input,
//   Textarea,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import TagsField from '@/components/fields/TagsField';
// import Bg from '../.././../public/img/inicio/bg.svg';

// export default function NewTemplate() {
//   const textColor = useColorModeValue('navy.700', 'white');
//   const placeholderColor = useColorModeValue(
//     { color: 'gray.500' },
//     { color: 'whiteAlpha.600' },
//   );
//   const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');

//   return (
//     <Box mt={{ base: '70px', md: '0px', xl: '0px' }}>
//       <Img
//         src={Bg.src}
//         position={'absolute'}
//         w="25%"
//         h={'20%'}
//         right="0%"
//         top="73%"
//         // transform={'translate(-50%, -50%)'}
//       />

//       <Card
//         maxW="100%"
//         w="716px"
//         mt={{ base: '70px', md: '0px', xl: '0px' }}
//         h="100%"
//         mx="auto"
//       >
//         <FormLabel
//           display="flex"
//           htmlFor={'Emoji'}
//           fontSize="md"
//           color={textColor}
//           letterSpacing="0px"
//           fontWeight="bold"
//           _hover={{ cursor: 'pointer' }}
//         >
//           Emoji
//         </FormLabel>
//         <Input
//           color={textColor}
//           border="1px solid"
//           borderRadius={'14px'}
//           borderColor={borderColor}
//           h="60px"
//           w="60px"
//           id="Emoji"
//           fontSize="24px"
//           fontWeight="500"
//           placeholder="😁"
//           maxLength={5}
//           _placeholder={placeholderColor}
//           _focus={{ borderColor: 'none' }}
//           mb="22px"
//         />
//         <FormLabel
//           display="flex"
//           htmlFor={'title'}
//           fontSize="md"
//           color={textColor}
//           letterSpacing="0px"
//           fontWeight="bold"
//           _hover={{ cursor: 'pointer' }}
//         >
//           Título
//         </FormLabel>
//         <Input
//           color={textColor}
//           border="1px solid"
//           borderRadius={'14px'}
//           borderColor={borderColor}
//           h="60px"
//           w="100%"
//           id="title"
//           fontSize="sm"
//           fontWeight="500"
//           placeholder="Título de plantilla"
//           _placeholder={placeholderColor}
//           _focus={{ borderColor: 'none' }}
//           mb="22px"
//         />
//         <FormLabel
//           display="flex"
//           htmlFor={'description'}
//           fontSize="md"
//           color={textColor}
//           letterSpacing="0px"
//           fontWeight="bold"
//           _hover={{ cursor: 'pointer' }}
//         >
//           Descripción
//         </FormLabel>
//         <Input
//           color={textColor}
//           border="1px solid"
//           borderRadius={'14px'}
//           borderColor={borderColor}
//           h="60px"
//           w="100%"
//           id="description"
//           fontSize="sm"
//           fontWeight="500"
//           placeholder="Descripción de la plantilla"
//           _placeholder={placeholderColor}
//           _focus={{ borderColor: 'none' }}
//           mb="22px"
//         />
//         <FormLabel
//           display="flex"
//           htmlFor={'prompt'}
//           fontSize="md"
//           color={textColor}
//           letterSpacing="0px"
//           fontWeight="bold"
//           _hover={{ cursor: 'pointer' }}
//         >
//           Promp
//         </FormLabel>
//         <Textarea
//           border="1px solid"
//           borderRadius={'14px'}
//           borderColor={borderColor}
//           p="15px 20px"
//           mb="28px"
//           minH="180px"
//           fontWeight="500"
//           fontSize="sm"
//           _focus={{ borderColor: 'none' }}
//           color={textColor}
//           placeholder="Aviso de plantilla"
//           _placeholder={placeholderColor}
//         />
//         <TagsField label="Campos" mb="60px" placeholderTags={[]} />
//         <Flex
//           flexDirection={{ base: 'column', md: 'row' }}
//           justifyContent="space-between"
//           alignItems="right"
//         >
//           <Button
//             variant="red"
//             py="20px"
//             px="16px"
//             fontSize="sm"
//             borderRadius="45px"
//             w={{ base: '100%', md: '130px' }}
//             h="54px"
//           >
//             Cancelar
//           </Button>
//           <Button
//             variant="primary"
//             py="20px"
//             bg="#252529"
//             px="16px"
//             fontSize="sm"
//             borderRadius="45px"
//             mt={{ base: '20px', md: '0px' }}
//             w={{ base: '100%', md: '200px' }}
//             h="54px"
//           >
//             Guardar cambios
//           </Button>
//         </Flex>
//       </Card>
//     </Box>
//   );
// }
// 0;
'use client';
/*eslint-disable*/

import Card from '@/components/card/Card';
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Img,
  Input,
  Textarea,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import TagsField from '@/components/fields/TagsField';
import Bg from '../.././../public/img/inicio/bg.svg';
import { useState } from 'react';

export default function NewTemplate() {
  const textColor = useColorModeValue('navy.700', 'white');
  const placeholderColor = useColorModeValue(
    { color: 'gray.500' },
    { color: 'whiteAlpha.600' },
  );
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const toast = useToast();

  const [formData, setFormData] = useState({
    emoji: '',
    title: '',
    description: '',
    link: '',
    fields: [] as string[],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleTagsChange = (tags: string[]) => {
    setFormData((prev) => ({
      ...prev,
      fields: tags,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Log the form data to console
      console.log('Form data:', formData);

      // Send data to API
      const response = await fetch('/api/use-cases/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.title,
          description: formData.description,
          illustration: formData.emoji,
          link: formData.link,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('API response:', result);

      toast({
        title: 'Success',
        description: 'Template created successfully',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error',
        description: 'Failed to create template',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    // Reset form or navigate away
    setFormData({
      emoji: '',
      title: '',
      description: '',
      link: '',
      fields: [],
    });
  };

  return (
    <Box mt={{ base: '70px', md: '0px', xl: '0px' }}>
      <Img
        src={Bg.src}
        position={'absolute'}
        w="25%"
        h={'20%'}
        right="0%"
        top="73%"
      />

      <Card
        maxW="100%"
        w="716px"
        mt={{ base: '70px', md: '0px', xl: '0px' }}
        h="100%"
        mx="auto"
      >
        <form onSubmit={handleSubmit}>
          <FormLabel
            display="flex"
            htmlFor={'emoji'}
            fontSize="md"
            color={textColor}
            letterSpacing="0px"
            fontWeight="bold"
            _hover={{ cursor: 'pointer' }}
          >
            Emoji
          </FormLabel>
          <Input
            color={textColor}
            border="1px solid"
            borderRadius={'14px'}
            borderColor={borderColor}
            h="60px"
            w="60px"
            id="emoji"
            fontSize="24px"
            fontWeight="500"
            placeholder="😁"
            maxLength={5}
            _placeholder={placeholderColor}
            _focus={{ borderColor: 'none' }}
            mb="22px"
            value={formData.emoji}
            onChange={handleInputChange}
          />
          <FormLabel
            display="flex"
            htmlFor={'title'}
            fontSize="md"
            color={textColor}
            letterSpacing="0px"
            fontWeight="bold"
            _hover={{ cursor: 'pointer' }}
          >
            Título
          </FormLabel>
          <Input
            color={textColor}
            border="1px solid"
            borderRadius={'14px'}
            borderColor={borderColor}
            h="60px"
            w="100%"
            id="title"
            fontSize="sm"
            fontWeight="500"
            placeholder="Título de plantilla"
            _placeholder={placeholderColor}
            _focus={{ borderColor: 'none' }}
            mb="22px"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          <FormLabel
            display="flex"
            htmlFor={'description'}
            fontSize="md"
            color={textColor}
            letterSpacing="0px"
            fontWeight="bold"
            _hover={{ cursor: 'pointer' }}
          >
            Descripción
          </FormLabel>
          <Input
            color={textColor}
            border="1px solid"
            borderRadius={'14px'}
            borderColor={borderColor}
            h="60px"
            w="100%"
            id="description"
            fontSize="sm"
            fontWeight="500"
            placeholder="Descripción de la plantilla"
            _placeholder={placeholderColor}
            _focus={{ borderColor: 'none' }}
            mb="22px"
            value={formData.description}
            onChange={handleInputChange}
            required
          />

          <FormLabel
            display="flex"
            htmlFor={'link'}
            fontSize="md"
            color={textColor}
            letterSpacing="0px"
            fontWeight="bold"
            _hover={{ cursor: 'pointer' }}
          >
            Prompt link
          </FormLabel>
          <Input
            color={textColor}
            border="1px solid"
            borderRadius={'14px'}
            borderColor={borderColor}
            h="60px"
            w="100%"
            id="link"
            fontSize="sm"
            fontWeight="500"
            placeholder="Prompt de la plantilla"
            _placeholder={placeholderColor}
            _focus={{ borderColor: 'none' }}
            mb="22px"
            value={formData.link}
            onChange={handleInputChange}
            required
          />

          {/*  <FormLabel
            display="flex"
            htmlFor={'link'}
            fontSize="md"
            color={textColor}
            letterSpacing="0px"
            fontWeight="bold"
            _hover={{ cursor: 'pointer' }}
          >
            Prompt
          </FormLabel>
          <Textarea
            border="1px solid"
            borderRadius={'14px'}
            borderColor={borderColor}
            p="15px 20px"
            mb="28px"
            minH="180px"
            fontWeight="500"
            fontSize="sm"
            _focus={{ borderColor: 'none' }}
            color={textColor}
            id="link"
            placeholder="Aviso de plantilla"
            _placeholder={placeholderColor}
            value={formData.link}
            onChange={handleInputChange}
            required
          /> */}
          {/*    <TagsField
            label="Campos"
            mb="60px"
            placeholderTags={[]}
            onTagsChange={handleTagsChange}
          /> */}
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems="right"
          >
            <Button
              variant="red"
              py="20px"
              px="16px"
              fontSize="sm"
              borderRadius="45px"
              w={{ base: '100%', md: '130px' }}
              h="54px"
              onClick={handleCancel}
              type="button"
            >
              Cancelar
            </Button>
            <Button
              variant="primary"
              py="20px"
              bg="#252529"
              px="16px"
              fontSize="sm"
              borderRadius="45px"
              mt={{ base: '20px', md: '0px' }}
              w={{ base: '100%', md: '200px' }}
              h="54px"
              type="submit"
              isLoading={isSubmitting}
              loadingText="Guardando..."
            >
              Guardar cambios
            </Button>
          </Flex>
        </form>
      </Card>
    </Box>
  );
}
