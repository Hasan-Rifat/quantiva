// import { Icon } from './lib/chakra';
// import {
//   MdFileCopy,
//   MdHome,
//   MdLock,
//   MdLayers,
//   MdAutoAwesome,
//   MdOutlineManageAccounts,
//   MdAssistant,
// } from 'react-icons/md';
// import { IoMdPerson } from 'react-icons/io';
// import { LuHistory } from 'react-icons/lu';
// import { RoundedChart } from '@/components/icons/Icons';

// // Auth Imports
// import { IRoute } from './types/navigation';
// import { useAppSelector } from './redux/hooks';
// const { role: roleL, username: usernameL } = JSON.parse(
//   localStorage.getItem('user') || '{}',
// );

// const routes: IRoute[] = [
//   {
//     name: 'Casos de uso',
//     path: '/inicio',
//     icon: (
//       <Icon as={MdHome as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     collapse: false,
//     rightElement: true,
//   },
//   {
//     name: 'Mis proyectos',
//     path: '/mis-proyectos',
//     icon: (
//       <Icon as={MdLayers as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     collapse: false,
//   },
//   {
//     name: 'Chat with your data',
//     path: '/chat',
//     icon: (
//       <Icon
//         as={MdAutoAwesome as any as any}
//         width="20px"
//         height="20px"
//         color="inherit"
//       />
//     ),
//     collapse: false,
//   },
//   /*  {
//     name: 'AI Assistant',
//     path: '/ai-assistant',
//     icon: <MdAssistant className="-mt-[7px] h-5 w-5 text-inherit" />,
//     collapse: false,
//   }, */
//   // --- Others ---
//   {
//     name: 'Otras páginas',
//     path: '/others',
//     icon: (
//       <Icon as={MdFileCopy as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     collapse: true,
//     items: [
//       {
//         name: 'Registro',
//         layout: '/others',
//         path: '/register',
//       },
//       {
//         name: 'Iniciar sesión',
//         layout: '/others',
//         path: '/sign-in',
//       },
//     ],
//   },
//   // --- Admin Pages ---
//   {
//     name: 'Página administrador',
//     path: '/admin',
//     icon: (
//       <Icon as={MdLock as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     collapse: true,
//     items: [
//       {
//         name: 'Prompt page',
//         layout: '/others',
//         path: '/prompt',
//       },
//       {
//         name: 'Todas las plantillas',
//         layout: '/admin',
//         path: '/all-admin-templates',
//       },
//       {
//         name: 'Nueva plantilla',
//         layout: '/admin',
//         path: '/new-template',
//       },
//       {
//         name: 'Plantilla de edición',
//         layout: '/admin',
//         path: '/edit-template',
//       },
//       {
//         name: 'Descripción general de los usuarios',
//         layout: '/admin',
//         path: '/overview',
//       },
//     ],
//   },
//   {
//     name: 'Profile Settings',
//     path: '/settings',
//     icon: (
//       <Icon
//         as={MdOutlineManageAccounts as any as any}
//         width="20px"
//         height="20px"
//         color="inherit"
//       />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   {
//     name: 'History',
//     path: '/history',
//     icon: (
//       <Icon as={LuHistory as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   {
//     name: 'Usage',
//     path: '/usage',
//     icon: (
//       <Icon
//         as={RoundedChart as any as any}
//         width="20px"
//         height="20px"
//         color="inherit"
//       />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   {
//     name: 'My plan',
//     path: '/my-plan',
//     icon: (
//       <Icon
//         as={RoundedChart as any as any}
//         width="20px"
//         height="20px"
//         color="inherit"
//       />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   // -------------- Prompt Pages --------------
//   {
//     name: 'Essay Generator',
//     path: '/essay',
//     icon: (
//       <Icon as={IoMdPerson as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   {
//     name: 'Content Simplifier',
//     path: '/simplifier',
//     icon: (
//       <Icon as={IoMdPerson as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   {
//     name: 'Product Description',
//     path: '/product-description',
//     icon: (
//       <Icon as={IoMdPerson as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   {
//     name: 'Email Enhancer',
//     path: '/email-enhancer',
//     icon: (
//       <Icon as={IoMdPerson as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   {
//     name: 'LinkedIn Message',
//     path: '/linkedin-message',
//     icon: (
//       <Icon as={IoMdPerson as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   {
//     name: 'Instagram Caption',
//     path: '/caption',
//     icon: (
//       <Icon as={IoMdPerson as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   {
//     name: 'FAQs Content',
//     path: '/faq',
//     icon: (
//       <Icon as={IoMdPerson as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   {
//     name: 'Product Name Generator',
//     path: '/name-generator',
//     icon: (
//       <Icon as={IoMdPerson as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   {
//     name: 'SEO Keywords',
//     path: '/seo-keywords',
//     icon: (
//       <Icon as={IoMdPerson as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   {
//     name: 'Review Responder',
//     path: '/review-responder',
//     icon: (
//       <Icon as={IoMdPerson as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   {
//     name: 'Business Idea Generator',
//     path: '/business-generator',
//     icon: (
//       <Icon as={IoMdPerson as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   {
//     name: 'Article Generator',
//     path: '/article',
//     icon: (
//       <Icon as={IoMdPerson as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   {
//     name: 'Plagiarism Checker',
//     path: '/plagiarism-checker',
//     icon: (
//       <Icon as={IoMdPerson as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   {
//     name: 'Hashtags Generator',
//     path: '/hashtags-generator',
//     icon: (
//       <Icon as={IoMdPerson as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   {
//     name: 'Pet Name Generator',
//     path: '/pet-name-generator',
//     icon: (
//       <Icon as={IoMdPerson as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   {
//     name: 'Translator',
//     path: '/translator',
//     icon: (
//       <Icon as={IoMdPerson as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   {
//     name: 'Domain Name Generator',
//     path: '/domain-name-generator',
//     icon: (
//       <Icon as={IoMdPerson as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     invisible: true,
//     collapse: false,
//   },
//   {
//     name: 'Bootstrap to Tailwind Converter',
//     path: '/bootstrap-to-tailwind-converter',
//     icon: (
//       <Icon as={IoMdPerson as any as any} width="20px" height="20px" color="inherit" />
//     ),
//     invisible: true,
//     collapse: false,
//   },
// ];

// export default routes;

// #2
/* 
import { Icon } from './lib/chakra';
import {
  MdFileCopy,
  MdHome,
  MdLock,
  MdLayers,
  MdAutoAwesome,
  MdOutlineManageAccounts,
} from 'react-icons/md';
import { IoMdPerson } from 'react-icons/io';
import { LuHistory } from 'react-icons/lu';
import { RoundedChart } from '@/components/icons/Icons';
import { IRoute } from './types/navigation';
import { store } from '../src/redux/store';
import { useState } from 'react';
// Define the ReportItem type according to your reportList structure
type ReportItem = {
  name: string;
  id: string;
  reportType: string;
  date: Date;
  url: string;
  userId: string;
  createdAt: Date;
};
// import { Report } from '@prisma/client';

// Get user role from Redux store

const role = store.getState().user.role;
console.log('User role:', role);
// all reports
const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'; // Use environment variable or fallback
const res = await fetch(`${baseUrl}/api/reports/get`, {
  credentials: 'include', // Include cookies for JWT
});
const data = await res.json();
const reportList: ReportItem[] = data.reports || [];

// Icon component factory to reduce repetition
const createIcon = (IconComponent: any) => (
  <Icon as={IconComponent} width="20px" height="20px" color="inherit" />
);

// Base routes visible to all users
const baseRoutes: IRoute[] = [
  {
    name: 'Casos de uso',
    path: '/inicio',
    icon: createIcon(MdHome),
    collapse: false,
    rightElement: true,
  },

  {
    name: 'historial de chat',
    path: '/chat-history',
    icon: createIcon(MdLayers),
    collapse: true,
    items:
      Array.isArray(reportList) && reportList.length > 0
        ? reportList.map((report) => ({
            name: report.name,
            path: `/chat-history/${report.id}`,
          }))
        : [],
  },
  {
    name: 'Chat with your data',
    path: '/chat',
    icon: createIcon(MdAutoAwesome),
    collapse: false,
  },
  {
    name: 'Otras páginas',
    path: '/others',
    icon: createIcon(MdFileCopy),
    collapse: true,
    items: [
      {
        name: 'Registro',
        layout: '/others',
        path: '/register',
      },
      {
        name: 'Iniciar sesión',
        layout: '/others',
        path: '/sign-in',
      },
    ],
  },
];

// Admin-only routes
const adminRoutes: IRoute[] = [
  {
    name: 'Página administrador',
    path: '/admin',
    icon: createIcon(MdLock),
    collapse: true,
    items: [
      {
        name: 'Prompt page',
        layout: '/others',
        path: '/prompt',
      },
      {
        name: 'Todas las plantillas',
        layout: '/admin',
        path: '/all-admin-templates',
      },
      {
        name: 'Nueva plantilla',
        layout: '/admin',
        path: '/new-template',
      },
      {
        name: 'Plantilla de edición',
        layout: '/admin',
        path: '/edit-template',
      },
      {
        name: 'Descripción general de los usuarios',
        layout: '/admin',
        path: '/overview',
      },
    ],
  },
];

// Common properties for hidden routes
const hiddenRouteProps = {
  invisible: true,
  collapse: false,
  icon: createIcon(IoMdPerson), // Default icon for hidden routes
};

// Hidden routes (invisible in sidebar but accessible directly)
const hiddenRoutes: IRoute[] = [
  {
    name: 'Profile Settings',
    path: '/settings',
    ...hiddenRouteProps,
    icon: createIcon(MdOutlineManageAccounts),
  },
  {
    name: 'History',
    path: '/history',
    ...hiddenRouteProps,
    icon: createIcon(LuHistory),
  },
  {
    name: 'Usage',
    path: '/usage',
    ...hiddenRouteProps,
    icon: createIcon(MdPieChart),
  },
  {
    name: 'My plan',
    path: '/my-plan',
    ...hiddenRouteProps,
    icon: createIcon(MdPieChart),
  },
  // Prompt Pages - using spread operator for common properties
  ...[
    'essay',
    'simplifier',
    'product-description',
    'email-enhancer',
    'linkedin-message',
    'caption',
    'faq',
    'name-generator',
    'seo-keywords',
    'review-responder',
    'business-generator',
    'article',
    'plagiarism-checker',
    'hashtags-generator',
    'pet-name-generator',
    'translator',
    'domain-name-generator',
    'bootstrap-to-tailwind-converter',
  ].map((path) => ({
    name: path
      .split('-')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' '),
    path: `/${path}`,
    ...hiddenRouteProps,
  })),
];

// Combine routes based on user role
const routes: IRoute[] = [
  ...baseRoutes,
  ...(role === 'admin' ? adminRoutes : []),
  ...hiddenRoutes,
];

export default routes;
 */
// #3
// components/NavigationRoutes.tsx
// Update the import path below to the correct location of your Icon component.
// For example, if Icon is exported from Chakra UI, use:
import { Icon } from '@chakra-ui/react';
// Or, if you have a local component, update the path accordingly:
// import { Icon } from './components/Icon';
import {
  MdFileCopy,
  MdHome,
  MdLock,
  MdLayers,
  MdAutoAwesome,
  MdOutlineManageAccounts,
} from 'react-icons/md';
import { IoMdPerson } from 'react-icons/io';
import { LuHistory } from 'react-icons/lu';
// import { RoundedChart } from './icons/Icons';
import { MdPieChart } from 'react-icons/md'; // Use a similar icon as a replacement
import { useEffect, useState } from 'react';
import { IRoute } from './types/navigation';
import { RoundedChart } from './components/icons/Icons';

interface NavigationRoutesProps {
  userRole: string;
}

const NavigationRoutes = ({ userRole }: NavigationRoutesProps) => {
  const [reportList, setReportList] = useState<ReportItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
        const res = await fetch(`${baseUrl}/api/reports/get`, {
          credentials: 'include',
        });
        const data = await res.json();
        setReportList(data.reports || []);
      } catch (error) {
        console.error('Error fetching reports:', error);
        setReportList([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();
  }, []);

  // Icon component factory to reduce repetition
  const createIcon = (IconComponent: any) => (
    <Icon as={IconComponent} width="20px" height="20px" color="inherit" />
  );

  // Base routes visible to all users
  const baseRoutes: IRoute[] = [
    {
      name: 'Casos de uso',
      path: '/inicio',
      icon: createIcon(MdHome),
      collapse: false,
      rightElement: true,
    },
    // {
    //   name: 'historial de chat',
    //   path: '/chat-history',
    //   icon: createIcon(MdLayers),
    //   collapse: true,
    //   items: isLoading
    //     ? [{ name: 'Loading...', path: '#' }]
    //     : reportList.length > 0
    //     ? reportList.map((report) => ({
    //         name: report.name,
    //         path: `/chat-history/${report.id}`,
    //       }))
    //     : [{ name: 'No reports yet', path: '#' }],
    // },
    {
      name: 'Chat with your data',
      path: '/chat',
      icon: createIcon(MdAutoAwesome),
      collapse: false,
    },
    // {
    //   name: 'Otras páginas',
    //   path: '/others',
    //   icon: createIcon(MdFileCopy),
    //   collapse: true,
    //   items: [
    //     /* {
    //       name: 'Registro',
    //       layout: '/others',
    //       path: '/register',
    //     }, */
    //     {
    //       name: 'Iniciar sesión',
    //       layout: '/others',
    //       path: '/sign-in',
    //     },
    //   ],
    // },
  ];

  // Admin-only routes
  const adminRoutes: IRoute[] = [
    /*  {
      name: 'Página administrador',
      path: '/admin',
      icon: createIcon(MdLock),
      collapse: true,
      items: [
        {
          name: 'Prompt page',
          layout: '/others',
          path: '/prompt',
        },
        {
          name: 'All Templates',
          layout: '/admin',
          path: '/all-admin-templates',
        },
        {
          name: 'New Template',
          layout: '/admin',
          path: '/new-template',
        },
        {
          name: 'Edit Template',
          layout: '/admin',
          path: '/edit-template',
        },
        {
          name: 'Users Overview',
          layout: '/admin',
          path: '/overview',
        },
      ],
    }, */
  ];

  // Common properties for hidden routes
  const hiddenRouteProps = {
    invisible: true,
    collapse: false,
    icon: createIcon(IoMdPerson),
  };

  // Hidden routes (invisible in sidebar but accessible directly)
  const hiddenRoutes: IRoute[] = [
    {
      name: 'Profile Settings',
      path: '/settings',
      ...hiddenRouteProps,
      icon: createIcon(MdOutlineManageAccounts),
    },
    {
      name: 'History',
      path: '/history',
      ...hiddenRouteProps,
      icon: createIcon(LuHistory),
    },
    {
      name: 'Usage',
      path: '/usage',
      ...hiddenRouteProps,
      icon: createIcon(RoundedChart),
    },
    {
      name: 'My plan',
      path: '/my-plan',
      ...hiddenRouteProps,
      icon: createIcon(RoundedChart),
    },
    // Prompt Pages
    ...[
      'essay',
      'simplifier',
      'product-description',
      'email-enhancer',
      'linkedin-message',
      'caption',
      'faq',
      'name-generator',
      'seo-keywords',
      'review-responder',
      'business-generator',
      'article',
      'plagiarism-checker',
      'hashtags-generator',
      'pet-name-generator',
      'translator',
      'domain-name-generator',
      'bootstrap-to-tailwind-converter',
    ].map((path) => ({
      name: path
        .split('-')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' '),
      path: `/${path}`,
      ...hiddenRouteProps,
    })),
  ];

  // Combine routes based on user role
  return [
    ...baseRoutes,
    ...(userRole === 'admin' ? adminRoutes : []),
    ...hiddenRoutes,
  ];
};

export default NavigationRoutes;

// Type definition for ReportItem
type ReportItem = {
  name: string;
  id: string;
  reportType: string;
  date: Date;
  url: string;
  userId: string;
  createdAt: Date;
};
