import { store } from '@/redux/store';
import React from 'react';

export default function page() {
  const reportList = store.getState().reports;
  console.log('reportList:', reportList.reportList);
  return <div>page {JSON.stringify(reportList.reportList)}</div>;
}
