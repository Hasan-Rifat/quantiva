// /* 'use client';
// import React, { ReactNode, useEffect } from 'react';
// import '@/styles/App.css';
// import '@/styles/Contact.css';
// import '@/styles/Plugins.css';
// import '@/styles/MiniCalendar.css';
// import { ChakraProvider } from '@chakra-ui/react';
// import theme from '@/theme/theme';
// import { Provider } from 'react-redux';
// import { store } from '@/redux/store';
// import { Toaster } from 'react-hot-toast';
// import { useAppDispatch } from '@/redux/hooks';
// import { setUser } from '@/redux/slices/userSlice';
// import { useRouter } from 'next/navigation';

// // Child component to handle authentication check
// function AuthChecker() {
//   const dispatch = useAppDispatch();
//   const router = useRouter();

//   useEffect(() => {
//     const controller = new AbortController();

//     const checkAuth = async () => {
//       try {
//         const response = await fetch('/api/auth/me', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           signal: controller.signal,
//         });
//         const data = await response.json();
//         if (response.ok) {
//           console.log('User data:', data.user);
//           dispatch(
//             setUser({
//               username: data.user.name,
//               role: data.user.role,
//               email: data.user.email,
//             }),
//           );
//         } else {
//           console.log('Error fetching user data:', data);
//           // Optionally redirect to login if not authenticated
//           if (data.message === 'Not authenticated') {
//             router.push('/others/sign-in');
//           }
//         }
//       } catch (error) {
//         console.log('Error in checkAuth:', error);
//       }
//     };

//     // Run immediately on mount
//     checkAuth();

//     // Set up interval to run every 20 seconds
//     const intervalId = setInterval(() => {
//       checkAuth();
//     }, 10000); // 1 second in milliseconds

//     // Cleanup on unmount
//     return () => {
//       controller.abort(); // Abort fetch requests
//       clearInterval(intervalId); // Clear the interval
//     };
//   }, [dispatch, router]);
// }

// export default function AppWrappers({ children }: { children: ReactNode }) {
//   return (
//     <Provider store={store}>
//       <ChakraProvider theme={theme}>
//         <AuthChecker />
//         {children}
//         <Toaster reverseOrder={false} />
//       </ChakraProvider>
//     </Provider>
//   );
// }
//  */

// 'use client';
// import React, { ReactNode, useEffect, useCallback } from 'react';
// import '@/styles/App.css';
// import '@/styles/Contact.css';
// import '@/styles/Plugins.css';
// import '@/styles/MiniCalendar.css';
// import { ChakraProvider } from '@chakra-ui/react';
// import theme from '@/theme/theme';
// import { Provider } from 'react-redux';
// import { store } from '@/redux/store';
// import { Toaster } from 'react-hot-toast';
// import { useAppDispatch } from '@/redux/hooks';
// import { setUser } from '@/redux/slices/userSlice';
// import { useRouter } from 'next/navigation';
// import { useReports } from '@/hooks/useReports';
// import { addReport } from '@/redux/slices/reportSlice';

// // Child component to handle authentication check
// function AuthChecker() {
//   const dispatch = useAppDispatch();
//   const router = useRouter();

//   const checkAuth = useCallback(async () => {
//     try {
//       const response = await fetch('/api/auth/me', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         console.log('Error fetching user data:', data.message);
//         // Optionally redirect to login if not authenticated
//         if (data.message === 'Not authenticated') {
//           router.push('/others/sign-in');
//         }
//         return;
//       }

//       dispatch(
//         setUser({
//           username: data.user.name,
//           role: data.user.role,
//           email: data.user.email,
//         }),
//       );
//     } catch (error) {
//       console.error('Error in checkAuth:', error);
//       // Redirect to login if not authenticated
//       router.push('/others/sign-in');
//     }
//   }, [dispatch, router]);

//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const response = await fetch('/api/reports/get', {
//           credentials: 'include',
//         });

//         if (!response.ok) {
//           console.log(`Failed to fetch reports: ${response.status}`);
//         }

//         const data = await response.json();
//         // Make sure to dispatch the action with proper payload
//         if (data.reports && Array.isArray(data.reports)) {
//           data.reports.forEach((report: any) => {
//             dispatch(
//               addReport({
//                 id: report.id,
//                 name: report.name,
//                 reportType: report.reportType,
//                 date: report.date,
//                 url: report.url,
//               }),
//             );
//           });
//         }
//       } catch (err) {
//         console.error('Report fetch error:', err);
//       } finally {
//       }
//     };

//     fetchReports();
//   }, [dispatch]);

//   useEffect(() => {
//     // Run immediately on mount
//     checkAuth();

//     // Set up interval to run every 5 minutes
//     const intervalId = setInterval(checkAuth, 300000); // 5 minutes in milliseconds

//     // Cleanup on unmount
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [checkAuth]);

//   return null;
// }

// export default function AppWrappers({ children }: { children: ReactNode }) {
//   return (
//     <Provider store={store}>
//       <ChakraProvider theme={theme}>
//         <AuthChecker />
//         {children}
//         <Toaster
//           position="top-center"
//           reverseOrder={false}
//           toastOptions={{
//             duration: 5000,
//             style: {
//               borderRadius: '8px',
//               background: '#333',
//               color: '#fff',
//             },
//           }}
//         />
//       </ChakraProvider>
//     </Provider>
//   );
// }
'use client';
import React, { ReactNode, useEffect, useCallback } from 'react';
import '@/styles/App.css';
import '@/styles/Contact.css';
import '@/styles/Plugins.css';
import '@/styles/MiniCalendar.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme/theme';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { Toaster } from 'react-hot-toast';
import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/slices/userSlice';
import { useRouter } from 'next/navigation';
import { useReports } from '@/hooks/useReports';
import { addReport } from '@/redux/slices/reportSlice';

// Child component to handle authentication check
function AuthChecker() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const checkAuth = useCallback(async () => {
    try {
      const response = await fetch('/api/auth/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        console.log('Error fetching user data:', data.message);
        // Redirect to login if not authenticated
        if (data.message === 'Not authenticated') {
          router.push('/others/sign-in');
        }
        return;
      }

      dispatch(
        setUser({
          username: data.user.name,
          role: data.user.role,
          email: data.user.email,
        }),
      );
    } catch (error) {
      console.error('Error in checkAuth:', error);
      // Redirect to login if there's an error
      router.push('/others/sign-in');
    }
  }, [dispatch, router]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch('/api/reports/get', {
          credentials: 'include',
        });

        if (!response.ok) {
          console.log(`Failed to fetch reports: ${response.status}`);
        }

        const data = await response.json();
        if (data.reports && Array.isArray(data.reports)) {
          data.reports.forEach((report: any) => {
            dispatch(
              addReport({
                id: report.id,
                name: report.name,
                reportType: report.reportType,
                date: report.date,
                url: report.url,
              }),
            );
          });
        }
      } catch (err) {
        console.error('Report fetch error:', err);
      }
    };

    fetchReports();
  }, [dispatch]);

  useEffect(() => {
    // Run immediately on mount
    checkAuth();

    // Set up interval to run every 2 days (in milliseconds)
    const intervalId = setInterval(checkAuth, 2 * 24 * 60 * 60 * 1000); // 2 days

    // Cleanup on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [checkAuth]);

  return null;
}

export default function AppWrappers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <AuthChecker />
        {children}
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 5000,
            style: {
              borderRadius: '8px',
              background: '#333',
              color: '#fff',
            },
          }}
        />
      </ChakraProvider>
    </Provider>
  );
}
