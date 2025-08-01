// 'use client';
// // Chakra imports
// import { Box, Flex, HStack, Img, SimpleGrid } from '@chakra-ui/react';

// import TemplateCard from '@/components/card/TemplateCard';
// import Bg from '../.../../../../public/img/inicio/bg.svg';
// export default function Settings() {
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
//       <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing="20px">
//         <TemplateCard
//           admin={true}
//           link="/essay"
//           illustration="📝"
//           name="Write an Essay"
//           description="Generate an Essay based on a type, subject and number of paragraphs."
//         />
//         <TemplateCard
//           admin={true}
//           link="/simplifier"
//           illustration="👶"
//           name="Content Simplifier"
//           description="Summarize text content for all age types of audience."
//         />
//         <TemplateCard
//           admin={true}
//           link="/product-description"
//           illustration="🎯"
//           name="Product Description"
//           description="Generate compelling & high converting descriptions for product listings."
//         />
//         <TemplateCard
//           admin={true}
//           link="/email-enhancer"
//           illustration="📧"
//           name="Email Enhancer"
//           description="Generate an incredibly clickable email from text content."
//         />
//         <TemplateCard
//           admin={true}
//           link="/linkedin-message"
//           illustration="💬"
//           name="LinkedIn Message"
//           description="Generate a LinkedIn high-converting message based on a type or subject."
//         />
//         <TemplateCard
//           admin={true}
//           link="/caption"
//           illustration="🌄"
//           name="Instagram Caption"
//           description="Generate a compelling and engaging caption for an Instagram post."
//         />
//         <TemplateCard
//           admin={true}
//           link="/faq"
//           illustration="❓"
//           name="FAQs Content"
//           description="Generate FAQs for a product, web app, or landing pages."
//         />
//         <TemplateCard
//           admin={true}
//           link="/name-generator"
//           illustration="🏷️"
//           name="Product Name Generator"
//           description="Generate product names from example words, topics, or work industries."
//         />
//         <TemplateCard
//           admin={true}
//           link="/seo-keywords"
//           illustration="📈"
//           name="SEO Keywords"
//           description="Generate high-converting SEO keywords from a subject, name, and so on."
//         />
//         <TemplateCard
//           admin={true}
//           link="/review-responder"
//           illustration="🌟"
//           name="Review Responder"
//           description="Generate an accurate & friendly response based on a customer review."
//         />
//         <TemplateCard
//           admin={true}
//           link="/business-generator"
//           illustration="💡"
//           name="Business Idea Generator"
//           description="Generate some business ideas based on topics, preferences, or budgets."
//         />
//         <TemplateCard
//           admin={true}
//           link="/article"
//           illustration="📄"
//           name="Article Generator"
//           description="Generate incredibly clickable and SEO Friendly article content."
//         />
//         <TemplateCard
//           admin={true}
//           link="/plagiarism-checker"
//           illustration="©️"
//           name="Plagiarism Checker"
//           description="Plagiarism checker for sentences and content."
//         />
//         <TemplateCard
//           admin={true}
//           link="/hashtags-generator"
//           illustration="#️⃣"
//           name="Hashtags Generator"
//           description="Generate outstanding hashtags for Instagram and social media."
//         />
//         <TemplateCard
//           admin={true}
//           link="/pet-name-generator"
//           illustration="🐶"
//           name="Pet Name Generator"
//           description="Generate a great name for your pet."
//         />
//         <TemplateCard
//           admin={true}
//           link="/translator"
//           illustration="🈳"
//           name="Content Translator"
//           description="Translate any type of content into your favorite language."
//         />
//         <TemplateCard
//           admin={true}
//           link="/domain-name-generator"
//           illustration="🔗"
//           name="Domain Name Generator"
//           description="Generate great domain names for your businesses."
//         />
//         <TemplateCard
//           admin={true}
//           link="/bootstrap-to-tailwind-converter"
//           illustration="💻"
//           name="Bootstrap to Tailwind Converter"
//           description="Convert any Bootstrap code to Tailwind CSS."
//         />
//       </SimpleGrid>
//     </Box>
//   );
// }
'use client';
// Chakra imports
import { Box, Flex, HStack, Img, SimpleGrid } from '@chakra-ui/react';

import TemplateCard from '@/components/card/TemplateCard';
import Bg from '../.../../../../public/img/inicio/bg.svg';
export default function Settings() {
  return (
    <Box mt={{ base: '70px', md: '0px', xl: '0px' }}>
      <Img
        src={Bg.src}
        position={'absolute'}
        w="25%"
        h={'20%'}
        right="0%"
        top="73%"
        // transform={'translate(-50%, -50%)'}
      />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing="20px">
        <TemplateCard
          admin={true}
          link="/admin/edit-template/1"
          illustration="📝"
          name="Write an Essay"
          description="Generate an Essay based on a type, subject and number of paragraphs."
        />
        <TemplateCard
          admin={true}
          link="/admin/edit-template/2"
          illustration="👶"
          name="Content Simplifier"
          description="Summarize text content for all age types of audience."
        />
        <TemplateCard
          admin={true}
          link="/admin/edit-template/3"
          illustration="🎯"
          name="Product Description"
          description="Generate compelling & high converting descriptions for product listings."
        />
        <TemplateCard
          admin={true}
          link="/admin/edit-template/4"
          illustration="📧"
          name="Email Enhancer"
          description="Generate an incredibly clickable email from text content."
        />
        <TemplateCard
          admin={true}
          link="/admin/edit-template/5"
          illustration="💬"
          name="LinkedIn Message"
          description="Generate a LinkedIn high-converting message based on a type or subject."
        />
        <TemplateCard
          admin={true}
          link="/admin/edit-template/6"
          illustration="🌄"
          name="Instagram Caption"
          description="Generate a compelling and engaging caption for an Instagram post."
        />
        <TemplateCard
          admin={true}
          link="/admin/edit-template/7"
          illustration="❓"
          name="FAQs Content"
          description="Generate FAQs for a product, web app, or landing pages."
        />
        <TemplateCard
          admin={true}
          link="/admin/edit-template/8"
          illustration="🏷️"
          name="Product Name Generator"
          description="Generate product names from example words, topics, or work industries."
        />
        <TemplateCard
          admin={true}
          link="/admin/edit-template/9"
          illustration="📈"
          name="SEO Keywords"
          description="Generate high-converting SEO keywords from a subject, name, and so on."
        />
        <TemplateCard
          admin={true}
          link="/admin/edit-template/10"
          illustration="🌟"
          name="Review Responder"
          description="Generate an accurate & friendly response based on a customer review."
        />
        <TemplateCard
          admin={true}
          link="/admin/edit-template/11"
          illustration="💡"
          name="Business Idea Generator"
          description="Generate some business ideas based on topics, preferences, or budgets."
        />
        <TemplateCard
          admin={true}
          link="/admin/edit-template/12"
          illustration="📄"
          name="Article Generator"
          description="Generate incredibly clickable and SEO Friendly article content."
        />
        <TemplateCard
          admin={true}
          link="/admin/edit-template/13"
          illustration="©️"
          name="Plagiarism Checker"
          description="Plagiarism checker for sentences and content."
        />
        <TemplateCard
          admin={true}
          link="/admin/edit-template/14"
          illustration="#️⃣"
          name="Hashtags Generator"
          description="Generate outstanding hashtags for Instagram and social media."
        />
        <TemplateCard
          admin={true}
          link="/admin/edit-template/15"
          illustration="🐶"
          name="Pet Name Generator"
          description="Generate a great name for your pet."
        />
        <TemplateCard
          admin={true}
          link="/admin/edit-template/16"
          illustration="🈳"
          name="Content Translator"
          description="Translate any type of content into your favorite language."
        />
        <TemplateCard
          admin={true}
          link="/admin/edit-template/17"
          illustration="🔗"
          name="Domain Name Generator"
          description="Generate great domain names for your businesses."
        />
        <TemplateCard
          admin={true}
          link="/admin/edit-template/18"
          illustration="💻"
          name="Bootstrap to Tailwind Converter"
          description="Convert any Bootstrap code to Tailwind CSS."
        />
      </SimpleGrid>
    </Box>
  );
}
