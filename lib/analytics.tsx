'use client';

import Script from 'next/script';
import { Fragment } from 'react';

// Google Analytics 测量 ID
export const GA_MEASUREMENT_ID = 'G-B2KTKL2C8F'; // 替换为你的 Google Analytics 测量 ID

// 初始化 Google Analytics
export const GoogleAnalytics = () => {
  return (
    <Fragment>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </Fragment>
  );
};

// 页面浏览跟踪
export const pageview = (url: string) => {
  try {
    if (typeof window.gtag !== 'undefined') {
      // 确保 URL 是安全的，不包含可能导致编码问题的字符
      // 使用 encodeURI 而不是直接传递可能包含中文的 URL
      const encodedUrl = encodeURI(url);
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: encodedUrl,
      });
    }
  } catch (error) {
    console.error('Google Analytics pageview error:', error);
    // 出错时静默失败，不影响用户体验
  }
};

// 事件跟踪
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  try {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  } catch (error) {
    console.error('Google Analytics event error:', error);
    // 出错时静默失败，不影响用户体验
  }
};

// 类型声明
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}