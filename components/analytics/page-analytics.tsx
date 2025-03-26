'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview } from '@/lib/analytics';

// 创建一个内部组件来使用 useSearchParams
function AnalyticsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    try {
      // 使用 URL 对象处理 URL，避免编码问题
      const search = searchParams.toString();
      const fullPath = search ? `${pathname}?${search}` : pathname;
      // 确保 URL 正确编码
      const encodedUrl = encodeURI(fullPath);
      pageview(encodedUrl);
    } catch (error) {
      console.error('Analytics error:', error);
    }
  }, [pathname, searchParams]);

  return null;
}

export function PageAnalytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsContent />
    </Suspense>
  );
}