// 'use client';
// import React, { ReactNode } from 'react';
// import type { AppProps } from 'next/app';
// import { ChakraProvider, Box, Portal, useDisclosure } from '@chakra-ui/react';
// import theme from '@/theme/theme';
// import routes from '@/routes';
// import Sidebar from '@/components/sidebar/Sidebar';
// import Footer from '@/components/footer/FooterAdmin';
// import Navbar from '@/components/navbar/NavbarAdmin';
// import { getActiveRoute, getActiveNavbar } from '@/utils/navigation';
// import { usePathname } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import '@/styles/App.css';
// import '@/styles/Contact.css';
// import '@/styles/Plugins.css';
// import '@/styles/MiniCalendar.css';
// import AppWrappers from './AppWrappers';
// import { useAppDispatch } from '@/redux/hooks';
// import { setUser } from '@/redux/slices/userSlice';

// export default function RootLayout({ children }: { children: ReactNode }) {
//   const pathname = usePathname();
//   const [apiKey, setApiKey] = useState('');
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   useEffect(() => {
//     const initialKey = localStorage.getItem('apiKey');
//     console.log(initialKey);
//     if (initialKey?.includes('sk-') && apiKey !== initialKey) {
//       setApiKey(initialKey);
//     }
//   }, [apiKey]);
//   const controller = new AbortController();

//   /*  useEffect(() => {
//     const checkAuth = async () => {
//       const response = await fetch('/api/auth/me', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         signal: controller.signal,
//       });
//       const data = await response.json();
//       if (response.ok) {
//         console.log('User data:', data.user);
//         dispatch(
//           setUser({
//             username: data.user.name,
//             role: data.user.role,
//             email: data.user.email,
//           }),
//         );
//       } else {
//         console.error('Error fetching user data:', data);
//       }
//     };

//     checkAuth();
//   }, []); */

//   return (
//     <html lang="en">
//       <body id={'root'}>
//         <AppWrappers>
//           {/* <ChakraProvider theme={theme}> */}
//           {pathname?.includes('register') || pathname?.includes('sign-in') ? (
//             children
//           ) : (
//             <Box>
//               <Sidebar setApiKey={setApiKey} routes={routes} />
//               <Box
//                 pt={{ base: '60px', md: '100px' }}
//                 float="right"
//                 minHeight="100vh"
//                 height="100%"
//                 overflow="auto"
//                 position="relative"
//                 maxHeight="100%"
//                 w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
//                 maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
//                 transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
//                 transitionDuration=".2s, .2s, .35s"
//                 transitionProperty="top, bottom, width"
//                 transitionTimingFunction="linear, linear, ease"
//               >
//                 <Portal>
//                   <Box>
//                     <Navbar
//                       setApiKey={setApiKey}
//                       onOpen={onOpen}
//                       logoText={'Horizon UI Dashboard PRO'}
//                       brandText={getActiveRoute(routes, pathname)}
//                       secondary={getActiveNavbar(routes, pathname)}
//                     />
//                   </Box>
//                 </Portal>
//                 <Box
//                   mx="auto"
//                   p={{ base: '20px', md: '30px' }}
//                   pe="20px"
//                   minH="100vh"
//                   pt="50px"
//                 >
//                   {children}
//                   {/* <Component apiKeyApp={apiKey} {...pageProps} /> */}
//                 </Box>
//                 <Box>
//                   <Footer />
//                 </Box>
//               </Box>
//             </Box>
//           )}
//           {/* </ChakraProvider> */}
//         </AppWrappers>
//       </body>
//     </html>
//   );
// }
'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import { ChakraProvider, Box, Portal, useDisclosure } from '@chakra-ui/react';
import theme from '@/theme/theme';
import routes from '@/routes';
import Sidebar from '@/components/sidebar/Sidebar';
import Footer from '@/components/footer/FooterAdmin';
import Navbar from '@/components/navbar/NavbarAdmin';
import { getActiveRoute, getActiveNavbar } from '@/utils/navigation';
import { usePathname } from 'next/navigation';
import '@/styles/App.css';
import '@/styles/Contact.css';
import '@/styles/Plugins.css';
import '@/styles/MiniCalendar.css';
import AppWrappers from './AppWrappers';
import { useReports } from '@/hooks/useReports';
import { useAppSelector } from '@/redux/hooks';
import NavigationRoutes from '@/routes';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Only access localStorage after component mounts (client-side)
    const initialKey = localStorage.getItem('apiKey');
    if (initialKey?.includes('sk-')) {
      setApiKey(initialKey);
    }
  }, []);

  // Check if current route is auth page
  const isAuthPage =
    pathname?.includes('register') || pathname?.includes('sign-in');

  if (!isClient) {
    // Return simplified layout during SSR
    return (
      <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning>
          <AppWrappers>{children}</AppWrappers>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning id="root">
        <Provider store={store}>
          <InnerRootLayout
            apiKey={apiKey}
            setApiKey={setApiKey}
            pathname={pathname}
            isAuthPage={isAuthPage}
          >
            {children}
          </InnerRootLayout>
        </Provider>
      </body>
    </html>
  );
}

// Move Redux hooks inside this component, which is rendered inside <Provider>
function InnerRootLayout({
  children,
  apiKey,
  setApiKey,
  pathname,
  isAuthPage,
}: {
  children: ReactNode;
  apiKey: string | null;
  setApiKey: React.Dispatch<React.SetStateAction<string | null>>;
  pathname: string | null;
  isAuthPage: boolean;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userRole = useAppSelector((state: any) => state.user.role);
  const routes = NavigationRoutes({ userRole });

  return (
    <AppWrappers>
      {isAuthPage ? (
        children
      ) : (
        <Box>
          <Sidebar setApiKey={setApiKey} routes={routes} />
          <Box
            pt={{ base: '60px', md: '100px' }}
            float="right"
            minHeight="100vh"
            height="100%"
            overflow="auto"
            position="relative"
            maxHeight="100%"
            w={{ base: '100%', xl: 'calc(100% - 290px)' }}
            maxWidth={{ base: '100%', xl: 'calc(100% - 290px)' }}
            transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
            transitionDuration=".2s, .2s, .35s"
            transitionProperty="top, bottom, width"
            transitionTimingFunction="linear, linear, ease"
          >
            <Portal>
              <Box>
                <Navbar
                  setApiKey={setApiKey}
                  onOpen={onOpen}
                  logoText={'Horizon UI Dashboard PRO'}
                  brandText={getActiveRoute(routes, pathname || '')}
                  secondary={getActiveNavbar(routes, pathname || '')}
                />
              </Box>
            </Portal>
            <Box
              mx="auto"
              p={{ base: '20px', md: '30px' }}
              pe="20px"
              minH="100vh"
              pt="50px"
            >
              {children}
            </Box>
            <Box>
              <Footer />
            </Box>
          </Box>
        </Box>
      )}
    </AppWrappers>
  );
}
