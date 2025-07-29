'use client';
// Chakra imports
import { Flex, Image, useColorModeValue } from '@chakra-ui/react';
import brand from '../../../../public/img/sidebar/brand/brand.svg';
import { HorizonLogo } from '@/components/icons/Icons';
import { HSeparator } from '@/components/separator/Separator';

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex alignItems="center" flexDirection="column">
      {/* <HorizonLogo h="26px" w="146px" my="30px" color={logoColor} /> */}
      <Image src={brand.src} alt="Horizon Logo" w="206px" my="30px" />

      <HSeparator mb="20px" w="284px" />
    </Flex>
  );
}

export default SidebarBrand;
