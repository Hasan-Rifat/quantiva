'use client';
/*eslint-disable*/

import Card from '@/components/card/Card';
import {
  Box,
  Button,
  Icon,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  MdBarChart,
  MdOutlinePaid,
  MdMemory,
  MdApi,
  MdInsights,
} from 'react-icons/md';
import MiniStatistics from '@/components/card/MiniStatistics';
import IconBox from '@/components/icons/IconBox';
import LineChart from '@/components/charts/LineChart';
import { lineChartDataUsage, lineChartOptionsUsage } from '@/variables/charts';

export default function NewTemplate() {
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = '#1351ED';
  const placeholderColor = useColorModeValue(
    { color: 'gray.500' },
    { color: 'whiteAlpha.600' },
  );
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

  return (
    <Box mt={{ base: '70px', md: '0px', xl: '0px' }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="20px" mb="20px">
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon
                  w="24px"
                  h="24px"
                  as={MdBarChart as React.ElementType}
                  color={brandColor}
                />
              }
            />
          }
          name="Créditos utilizados en el último mes"
          value="46,042"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon
                  w="24px"
                  h="24px"
                  as={MdApi as React.ElementType}
                  color={brandColor}
                />
              }
            />
          }
          name="Créditos totales"
          value="149,758"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon
                  w="28px"
                  h="28px"
                  as={MdMemory as React.ElementType}
                  color={brandColor}
                />
              }
            />
          }
          name="Planear créditos"
          value="100,000"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon
                  w="24px"
                  h="24px"
                  as={MdOutlinePaid as React.ElementType}
                  color={brandColor}
                />
              }
            />
          }
          endContent={
            <Button
              variant="transparent"
              border="1px solid"
              borderColor={borderColor}
              borderRadius="full"
              maxW="100px"
              ms="auto"
              fontSize="md"
              h="44px"
            >
              Manage
            </Button>
          }
          name="Plan actual"
          value="Experto+"
        />
      </SimpleGrid>

      <Card>
        <Flex
          my="auto"
          h="100%"
          align={{ base: 'center', xl: 'start' }}
          justify={{ base: 'center', xl: 'center' }}
        >
          <IconBox
            w="56px"
            h="56px"
            bg={boxBg}
            icon={
              <Icon
                w="24px"
                h="24px"
                as={MdInsights as React.ElementType}
                color={brandColor}
              />
            }
          />
          <Stat my="auto" ms={'18px'}>
            <StatLabel
              lineHeight="100%"
              color={textColorSecondary}
              fontSize="sm"
              mb="4px"
            >
              Uso de los créditos en el último año
            </StatLabel>
            <StatNumber color={textColor} fontWeight="700" fontSize="lg">
              149,758
            </StatNumber>
          </Stat>
        </Flex>
        <Box h="500px">
          <LineChart
            chartData={lineChartDataUsage}
            chartOptions={lineChartOptionsUsage}
          />
        </Box>
      </Card>
    </Box>
  );
}
0;
