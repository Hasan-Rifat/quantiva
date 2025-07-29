// // components/MarkdownRenderer.tsx
// 'use client';

// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import {
//   Box,
//   Heading,
//   Text,
//   Link,
//   UnorderedList,
//   OrderedList,
//   ListItem,
//   Code,
//   Divider,
//   useColorModeValue,
// } from '@chakra-ui/react';

// const MarkdownRenderer = ({ content }: { content: string }) => {
//   const headingColor = useColorModeValue('purple.600', 'purple.300');
//   const textColor = useColorModeValue('gray.700', 'gray.300');
//   const borderColor = useColorModeValue('gray.200', 'gray.600');
//   const codeBg = useColorModeValue('gray.100', 'gray.700');
//   const tableBg = useColorModeValue('gray.50', 'gray.700');

//   return (
//     <Box
//       color={textColor}
//       className="markdown-content"
//       fontSize="md"
//       lineHeight="tall"
//     >
//       <ReactMarkdown
//         remarkPlugins={[remarkGfm]}
//         components={{
//           h1: ({ node, ...props }) => (
//             <Heading
//               as="h1"
//               size="xl"
//               color={headingColor}
//               my={6}
//               pb={2}
//               borderBottom="1px solid"
//               borderColor={borderColor}
//               {...props}
//             />
//           ),
//           h2: ({ node, ...props }) => (
//             <Heading as="h2" size="lg" color={headingColor} my={5} {...props} />
//           ),
//           h3: ({ node, ...props }) => (
//             <Heading as="h3" size="md" color={headingColor} my={4} {...props} />
//           ),
//           h4: ({ node, ...props }) => (
//             <Heading as="h4" size="sm" color={headingColor} my={3} {...props} />
//           ),
//           p: ({ node, ...props }) => <Text mb={4} {...props} />,
//           ul: ({ node, ...props }) => (
//             <UnorderedList pl={5} mb={4} spacing={1} {...props} />
//           ),
//           ol: ({ node, ...props }) => (
//             <OrderedList pl={5} mb={4} spacing={1} {...props} />
//           ),
//           li: ({ node, ...props }) => <ListItem mb={2} {...props} />,
//           a: ({ node, ...props }) => (
//             <Link color="blue.500" isExternal {...props} />
//           ),
//           code: ({ node, inline, ...props }) => (
//             <Code
//               bg={codeBg}
//               p={inline ? 1 : 2}
//               borderRadius="md"
//               fontSize={inline ? 'inherit' : 'sm'}
//               {...props}
//             />
//           ),
//           hr: ({ node, ...props }) => (
//             <Divider my={4} borderColor={borderColor} {...props} />
//           ),
//           blockquote: ({ node, ...props }) => (
//             <Box
//               as="blockquote"
//               pl={4}
//               borderLeft="4px solid"
//               borderColor="purple.300"
//               my={4}
//               fontStyle="italic"
//               color={textColor}
//               {...props}
//             />
//           ),
//           table: ({ node, ...props }) => (
//             <Box
//               as="table"
//               width="full"
//               my={4}
//               borderWidth="1px"
//               borderColor={borderColor}
//               borderRadius="md"
//               overflow="hidden"
//               {...props}
//             />
//           ),
//           thead: ({ node, ...props }) => (
//             <Box as="thead" bg={tableBg} {...props} />
//           ),
//           tr: ({ node, ...props }) => (
//             <Box
//               as="tr"
//               borderBottomWidth="1px"
//               borderColor={borderColor}
//               _last={{ borderBottom: 'none' }}
//               {...props}
//             />
//           ),
//           th: ({ node, ...props }) => (
//             <Box
//               as="th"
//               px={4}
//               py={2}
//               textAlign="left"
//               fontWeight="semibold"
//               {...props}
//             />
//           ),
//           td: ({ node, ...props }) => (
//             <Box
//               as="td"
//               px={4}
//               py={2}
//               borderBottomWidth="1px"
//               borderColor={borderColor}
//               {...props}
//             />
//           ),
//         }}
//       >
//         {content}
//       </ReactMarkdown>
//     </Box>
//   );
// };

// export default MarkdownRenderer;
