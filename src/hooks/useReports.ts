// hooks/useReports.ts
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useAppDispatch } from '@/redux/hooks';
import { addReport } from '@/redux/slices/reportSlice';

export function useReports() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const [reports, setReports] = useState<any[]>([]); // Adjust type as needed

  useEffect(() => {
    const fetchReports = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/reports/get', {
          credentials: 'include',
        });

        if (!response.ok) {
          console.log(`Failed to fetch reports: ${response.status}`);
        }

        const data = await response.json();
        setReports(data.reports || []);
        // Make sure to dispatch the action with proper payload
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
        setError(
          err instanceof Error ? err.message : 'Failed to fetch reports',
        );
        toast.error('Failed to load reports');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();
  }, [dispatch]);

  return {
    isLoading,
    error,
    reports,
    refetch: () => {
      setIsLoading(true);
      setError(null);
      fetchReports();
    },
  };
}
function fetchReports() {
  throw new Error('Function not implemented.');
}
