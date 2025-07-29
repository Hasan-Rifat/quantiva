'use client';
// Chakra imports
import {
  Flex,
  FormControl,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Card from '@/components/card/Card';
import InputField from '@/components/fields/InputField';
import TextField from '@/components/fields/TextField';

export default function Settings() {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.500';
  return (
    <FormControl>
      <Card>
        <Flex direction="column" mb="40px">
          <Text
            fontSize="xl"
            color={textColorPrimary}
            mb="6px"
            fontWeight="bold"
          >
            Configuraciones de la cuenta
          </Text>
          <Text fontSize="md" fontWeight="500" color={textColorSecondary}>
            Aquí puedes cambiar la información de tu cuenta
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          spacing={{ base: '20px', xl: '20px' }}
        >
          <InputField
            mb="10px"
            me="30px"
            id="username"
            label="Nombre de usuario"
            placeholder="@parkson.adela"
          />
          <InputField
            mb="10px"
            id="email"
            label="Dirección de correo electrónico"
            placeholder="hello@horizon-ui.com"
          />
          <InputField
            mb="10px"
            me="30px"
            id="first_name"
            label="Nombre de pila"
            placeholder="Adela"
          />
          <InputField
            mb="20px"
            id="last_name"
            label="Apellido"
            placeholder="Parkson"
          />
        </SimpleGrid>
        <InputField id="job" label="Trabajo" placeholder="¿A qué te dedicas?" />
        <TextField
          id="about"
          label="Acerca de mí"
          minH="150px"
          placeholder="¡Cuéntanos algo sobre ti en 150 caracteres!"
        />
      </Card>
    </FormControl>
  );
}
