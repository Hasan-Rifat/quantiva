'use client';
// Chakra imports
import { Flex, FormControl, Text, useColorModeValue } from '@chakra-ui/react';
import Card from '@/components/card/Card';
import InputField from '@/components/fields/InputField';

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
            Cambiar la contraseña
          </Text>
          <Text fontSize="md" fontWeight="500" color={textColorSecondary}>
            Cambiar la contraseña
          </Text>
        </Flex>
        <FormControl>
          <Flex flexDirection="column">
            <InputField
              mb="25px"
              id="old"
              label="Contraseña anterior"
              placeholder="Contraseña anterior"
            />
            <InputField
              mb="25px"
              id="new"
              label="Nueva contraseña"
              placeholder="Nueva contraseña"
            />
            <InputField
              mb="25px"
              id="confirm"
              label="Nueva confirmación de contraseña"
              placeholder="Nueva confirmación de contraseña"
            />
          </Flex>
        </FormControl>
      </Card>
    </FormControl>
  );
}
