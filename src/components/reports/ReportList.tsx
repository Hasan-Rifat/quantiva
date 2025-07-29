'use client';
import React, { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Box,
  Heading,
  Stack,
  Input,
  useToast,
  Tfoot,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useReports } from '@/hooks/useReports';

interface Report {
  id: string;
  name: string;
  reportType: string;
  date: string;
  url: string;
}

export default function ReportList() {
  // const [reports, setReports] = useState<Report[]>([]);
  const { reports } = useReports();

  const toast = useToast();

  /*   useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    const response = await fetch('/api/reports/get', {
      credentials: 'include', // Include cookies for JWT
    });
    if (response.ok) {
      const data = await response.json();
      setReports(data.reports);
    } else {
      toast({
        title: 'Error',
        description: 'Failed to fetch reports',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }; */

  console.log('reports:', reports);

  return (
    <Box p={4}>
      <Heading mb={4} textAlign="center">
        Report List
      </Heading>

      <Table size="sm" variant="simple" border="1px" borderColor="gray.200">
        <Thead>
          <Tr>
            <Th
              border="1px"
              borderColor="gray.200"
              px={4}
              py={2}
              sx={{ padding: '12px' }}
            >
              name
            </Th>
            <Th
              border="1px"
              borderColor="gray.200"
              px={4}
              py={2}
              sx={{ padding: '12px' }}
            >
              Type report
            </Th>
            <Th
              border="1px"
              borderColor="gray.200"
              px={4}
              py={2}
              sx={{ padding: '12px' }}
            >
              date
            </Th>
            <Th
              border="1px"
              borderColor="gray.200"
              px={4}
              py={2}
              sx={{ padding: '12px' }}
            >
              URL Download
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {reports.map((report) => (
            <Tr key={report.id}>
              <Td border="1px" borderColor="gray.200" p={3}>
                {report.name}
              </Td>
              <Td border="1px" borderColor="gray.200" p={3}>
                {report.reportType}
              </Td>
              <Td border="1px" borderColor="gray.200" p={3}>
                {new Date(report.date).toLocaleDateString()}
              </Td>
              <Td border="1px" borderColor="gray.200" p={3}>
                <Link href={report.url}>
                  <Button colorScheme="blue" size="sm">
                    Download
                  </Button>
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
