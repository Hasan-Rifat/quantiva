'use client';

// Chakra imports
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';

import Info from '@/components/settings/Info';
import Password from '@/components/settings/Password';
import Profile from '@/components/settings/Profile';
import Socials from '@/components/settings/Socials';
import Delete from '@/components/settings/Delete';
import avatar1 from '../../public/img/avatars/avatar4.png';
import { useAppSelector } from '@/redux/hooks';
import { toast } from 'react-hot-toast';

export default function Settings() {
  const { role, username } = useAppSelector((state) => state.user);

  console.log(`User Role: ${role}`);
  console.log(`Username: ${username}`);

  toast.success(`Welcome back, ${username}!`, {
    duration: 3000,
    position: 'top-right',
    style: {
      background: '#1351ED',
      color: '#fff',
      fontSize: '16px',
      fontWeight: 'bold',
    },
  });

  return (
    <Box mt={{ base: '70px', md: '0px', xl: '0px' }}>
      <SimpleGrid columns={{ sm: 1, lg: 2 }} spacing="20px" mb="20px">
        {/* Column Left */}
        <Flex direction="column">
          <Profile name={username} avatar={avatar1} banner={'#1351ED'} />
          <Info />
        </Flex>
        {/* Column Right */}
        <Flex direction="column" gap="20px">
          <Socials />
          <Password />
        </Flex>
      </SimpleGrid>
      <Delete />
    </Box>
  );
}
