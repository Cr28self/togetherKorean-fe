import { Suspense } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../libs/react-query/queryClient.js';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { LoadingIndicator } from '../components/indicator/index.js';

// 다른 언어로 번역하기 위한 소스들..
import enUsMsg from '../lang/en-US.json';
import koMsg from '../lang/ko.json';
import zhMsg from '../lang/zh.json';
import { IntlProvider } from 'react-intl';

const locale = localStorage.getItem('locale') ?? 'ko';
const messages = { 'en-US': enUsMsg, ko: koMsg, zh: zhMsg }[locale];

export default function AppProvider({ children }) {
  return (
    //  나중에 다른 언어로 번역이 필요할때 IntlProvider 사용해야함 ( 지금은 안해도 될듯? )
    <IntlProvider locale={locale} messages={messages}>
      {/*  Suspense 관리*/}
      <Suspense fallback={<LoadingIndicator />}>
        {/*  ReactQuery 적용하기 위한 Provider*/}
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>{children}</BrowserRouter>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Suspense>
    </IntlProvider>
  );
}
