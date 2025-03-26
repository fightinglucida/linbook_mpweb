'use client';

import { Suspense } from 'react';
import { PageAnalytics } from '@/components/analytics/page-analytics';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - 页面未找到</h1>
      <p className="text-lg mb-8">抱歉，您访问的页面不存在。</p>
      <a 
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        返回首页
      </a>
      <Suspense fallback={null}>
        <PageAnalytics />
      </Suspense>
    </div>
  );
}