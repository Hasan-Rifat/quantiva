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
//           defaultValue={'📝'}
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
//           defaultValue={'Escribe un ensayo'}
//           placeholder="Escribe un ensayo"
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
//           defaultValue={
//             'Genere un ensayo basado en un tipo, sujeto y número de párrafos .'
//           }
//           placeholder="Template Description"
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
//           Inmediato
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
//           defaultValue={'Escriba un ensayo formal basado en lo siguiente:'}
//           placeholder="Escriba un ensayo formal basado en lo siguiente:"
//           _placeholder={placeholderColor}
//         />
//         <TagsField label="Campos" mb="60px" />
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
//             w={{ base: '100%', md: '200px' }}
//             h="54px"
//           >
//             Eliminar el aviso
//           </Button>
//           <Button
//             variant="primary"
//             py="20px"
//             px="16px"
//             bg="#252529"
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
// # 2
// 'use client';

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
//   useToast,
// } from '@chakra-ui/react';
// import TagsField from '@/components/fields/TagsField';
// import Bg from '../.././../../public/img/inicio/bg.svg';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function EditTemplate({ params }: { params: { id: string } }) {
//   const textColor = useColorModeValue('navy.700', 'white');
//   const placeholderColor = useColorModeValue(
//     { color: 'gray.500' },
//     { color: 'whiteAlpha.600' },
//   );
//   const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
//   const toast = useToast();
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     emoji: '📝',
//     title: '',
//     description: '',
//     prompt: '',
//     fields: [] as string[],
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   // Fetch template data on component mount
//   useEffect(() => {
//     const fetchTemplate = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/api/use-cases/get/${id}`,
//         );

//         if (!response.ok) {
//           throw new Error('Failed to fetch template');
//         }

//         const data = await response.json();

//         setFormData({
//           emoji: data.emoji || '📝',
//           title: data.title || '',
//           description: data.description || '',
//           prompt: data.prompt || '',
//           fields: data.fields || [],
//         });
//       } catch (error) {
//         console.error('Error fetching template:', error);
//         toast({
//           title: 'Error',
//           description: 'Failed to load template data',
//           status: 'error',
//           duration: 5000,
//           isClosable: true,
//         });
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchTemplate();
//   }, [params.id, toast]);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [id.toLowerCase()]: value,
//     }));
//   };

//   const handleTagsChange = (tags: string[]) => {
//     setFormData((prev) => ({
//       ...prev,
//       fields: tags,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/use-cases/update/${params.id}`,
//         {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             emoji: formData.emoji,
//             title: formData.title,
//             description: formData.description,
//             prompt: formData.prompt,
//             fields: formData.fields,
//           }),
//         },
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();

//       toast({
//         title: 'Éxito',
//         description: 'Plantilla actualizada correctamente',
//         status: 'success',
//         duration: 5000,
//         isClosable: true,
//       });

//       // Optionally redirect after successful update
//       // router.push('/templates');
//     } catch (error) {
//       console.error('Error updating template:', error);
//       toast({
//         title: 'Error',
//         description: 'No se pudo actualizar la plantilla',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/use-cases/delete/${params.id}`,
//         {
//           method: 'DELETE',
//         },
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       toast({
//         title: 'Éxito',
//         description: 'Plantilla eliminada correctamente',
//         status: 'success',
//         duration: 5000,
//         isClosable: true,
//       });

//       // Redirect after deletion
//       router.push('/templates');
//     } catch (error) {
//       console.error('Error deleting template:', error);
//       toast({
//         title: 'Error',
//         description: 'No se pudo eliminar la plantilla',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   if (isLoading) {
//     return (
//       <Box mt={{ base: '70px', md: '0px', xl: '0px' }}>
//         <Card maxW="100%" w="716px" h="100%" mx="auto" p="4">
//           Cargando plantilla...
//         </Card>
//       </Box>
//     );
//   }

//   return (
//     <Box mt={{ base: '70px', md: '0px', xl: '0px' }}>
//       <Img
//         src={Bg.src}
//         position={'absolute'}
//         w="25%"
//         h={'20%'}
//         right="0%"
//         top="73%"
//       />

//       <Card
//         maxW="100%"
//         w="716px"
//         mt={{ base: '70px', md: '0px', xl: '0px' }}
//         h="100%"
//         mx="auto"
//       >
//         <form onSubmit={handleSubmit}>
//           <FormLabel
//             display="flex"
//             htmlFor={'emoji'}
//             fontSize="md"
//             color={textColor}
//             letterSpacing="0px"
//             fontWeight="bold"
//             _hover={{ cursor: 'pointer' }}
//           >
//             Emoji
//           </FormLabel>
//           <Input
//             color={textColor}
//             border="1px solid"
//             borderRadius={'14px'}
//             borderColor={borderColor}
//             h="60px"
//             w="60px"
//             id="emoji"
//             fontSize="24px"
//             fontWeight="500"
//             placeholder="😁"
//             maxLength={5}
//             _placeholder={placeholderColor}
//             _focus={{ borderColor: 'none' }}
//             mb="22px"
//             value={formData.emoji}
//             onChange={handleInputChange}
//           />
//           <FormLabel
//             display="flex"
//             htmlFor={'title'}
//             fontSize="md"
//             color={textColor}
//             letterSpacing="0px"
//             fontWeight="bold"
//             _hover={{ cursor: 'pointer' }}
//           >
//             Título
//           </FormLabel>
//           <Input
//             color={textColor}
//             border="1px solid"
//             borderRadius={'14px'}
//             borderColor={borderColor}
//             h="60px"
//             w="100%"
//             id="title"
//             fontSize="sm"
//             fontWeight="500"
//             placeholder="Escribe un ensayo"
//             _placeholder={placeholderColor}
//             _focus={{ borderColor: 'none' }}
//             mb="22px"
//             value={formData.title}
//             onChange={handleInputChange}
//             required
//           />
//           <FormLabel
//             display="flex"
//             htmlFor={'description'}
//             fontSize="md"
//             color={textColor}
//             letterSpacing="0px"
//             fontWeight="bold"
//             _hover={{ cursor: 'pointer' }}
//           >
//             Descripción
//           </FormLabel>
//           <Input
//             color={textColor}
//             border="1px solid"
//             borderRadius={'14px'}
//             borderColor={borderColor}
//             h="60px"
//             w="100%"
//             id="description"
//             fontSize="sm"
//             fontWeight="500"
//             placeholder="Template Description"
//             _placeholder={placeholderColor}
//             _focus={{ borderColor: 'none' }}
//             mb="22px"
//             value={formData.description}
//             onChange={handleInputChange}
//             required
//           />
//           <FormLabel
//             display="flex"
//             htmlFor={'prompt'}
//             fontSize="md"
//             color={textColor}
//             letterSpacing="0px"
//             fontWeight="bold"
//             _hover={{ cursor: 'pointer' }}
//           >
//             Inmediato
//           </FormLabel>
//           <Textarea
//             border="1px solid"
//             borderRadius={'14px'}
//             borderColor={borderColor}
//             p="15px 20px"
//             mb="28px"
//             minH="180px"
//             fontWeight="500"
//             fontSize="sm"
//             _focus={{ borderColor: 'none' }}
//             color={textColor}
//             id="prompt"
//             placeholder="Escriba un ensayo formal basado en lo siguiente:"
//             _placeholder={placeholderColor}
//             value={formData.prompt}
//             onChange={handleInputChange}
//             required
//           />
//           <TagsField
//             label="Campos"
//             mb="60px"
//             initialTags={formData.fields}
//             onTagsChange={handleTagsChange}
//           />
//           <Flex
//             flexDirection={{ base: 'column', md: 'row' }}
//             justifyContent="space-between"
//             alignItems="right"
//           >
//             <Button
//               variant="red"
//               py="20px"
//               px="16px"
//               fontSize="sm"
//               borderRadius="45px"
//               w={{ base: '100%', md: '200px' }}
//               h="54px"
//               onClick={handleDelete}
//               type="button"
//               isLoading={isSubmitting}
//             >
//               Eliminar el aviso
//             </Button>
//             <Button
//               variant="primary"
//               py="20px"
//               px="16px"
//               bg="#252529"
//               fontSize="sm"
//               borderRadius="45px"
//               mt={{ base: '20px', md: '0px' }}
//               w={{ base: '100%', md: '200px' }}
//               h="54px"
//               type="submit"
//               isLoading={isSubmitting}
//               loadingText="Guardando..."
//             >
//               Guardar cambios
//             </Button>
//           </Flex>
//         </form>
//       </Card>
//     </Box>
//   );
// }

'use client';

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
import Bg from '../../../../public/img/inicio/bg.svg';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

const EditTemplate = () => {
  const params = useParams();
  const id = params.id as string;
  const textColor = useColorModeValue('navy.700', 'white');
  const placeholderColor = useColorModeValue(
    { color: 'gray.500' },
    { color: 'whiteAlpha.600' },
  );
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const toast = useToast();
  const router = useRouter();

  const [formData, setFormData] = useState({
    emoji: '📝',
    title: '',
    description: '',
    prompt: '',
    fields: [] as string[],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch template data on component mount
  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const response = await fetch(`/api/use-cases/get/${id}`);

        if (!response.ok) {
          throw new Error('Failed to fetch template');
        }

        const data = await response.json();

        setFormData({
          emoji: data.emoji || '📝',
          title: data.title || '',
          description: data.description || '',
          prompt: data.prompt || '',
          fields: data.fields || [],
        });
      } catch (error) {
        console.error('Error fetching template:', error);
        toast({
          title: 'Error',
          description: 'Failed to load template data',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchTemplate();
  }, [id, toast]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id.toLowerCase()]: value,
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
      const response = await fetch(`/api/use-cases/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emoji: formData.emoji,
          title: formData.title,
          description: formData.description,
          prompt: formData.prompt,
          fields: formData.fields,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      toast({
        title: 'Éxito',
        description: 'Plantilla actualizada correctamente',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      router.push('/admin/templates');
    } catch (error) {
      console.error('Error updating template:', error);
      toast({
        title: 'Error',
        description: 'No se pudo actualizar la plantilla',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/use-cases/delete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast({
        title: 'Éxito',
        description: 'Plantilla eliminada correctamente',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      router.push('/admin/templates');
    } catch (error) {
      console.error('Error deleting template:', error);
      toast({
        title: 'Error',
        description: 'No se pudo eliminar la plantilla',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  if (isLoading) {
    return (
      <Box mt={{ base: '70px', md: '0px', xl: '0px' }}>
        <Card maxW="100%" w="716px" h="100%" mx="auto" p="4">
          Cargando plantilla...
        </Card>
      </Box>
    );
  }

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
            placeholder="Escribe un ensayo"
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
            placeholder="Template Description"
            _placeholder={placeholderColor}
            _focus={{ borderColor: 'none' }}
            mb="22px"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
          <FormLabel
            display="flex"
            htmlFor={'prompt'}
            fontSize="md"
            color={textColor}
            letterSpacing="0px"
            fontWeight="bold"
            _hover={{ cursor: 'pointer' }}
          >
            Inmediato
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
            id="prompt"
            placeholder="Escriba un ensayo formal basado en lo siguiente:"
            _placeholder={placeholderColor}
            value={formData.prompt}
            onChange={handleInputChange}
            required
          />
          <TagsField
            label="Campos"
            mb="60px"
            initialTags={formData.fields}
            onTagsChange={handleTagsChange}
          />
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
              w={{ base: '100%', md: '200px' }}
              h="54px"
              onClick={handleDelete}
              type="button"
              isLoading={isSubmitting}
            >
              Eliminar el aviso
            </Button>
            <Button
              variant="primary"
              py="20px"
              px="16px"
              bg="#252529"
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
};

export default EditTemplate;
