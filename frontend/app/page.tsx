'use client';

import { TicketBody } from '@/components/pages/home/body/TicketBody';
import { TicketFooter } from '@/components/pages/home/footer/TicketFooter';
import { TicketHeader } from '@/components/pages/home/header/TicketHeader';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

function SearchParamsWrapper({ onLanguageChange }: { 
  onLanguageChange: (lang: 'en' | 'ja' | 'zh' | 'ko') => void 
}) {
  const searchParams = useSearchParams();
  const language = (searchParams?.get('lang') as 'en' | 'ja' | 'zh' | 'ko') || 'ja';

  useEffect(() => {
    onLanguageChange(language);
  }, [language, onLanguageChange]);

  return null;
}

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'ja' | 'zh' | 'ko'>('ja');

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsWrapper onLanguageChange={setLanguage} />
      </Suspense>

      <div className="min-h-screen p-4 bg-[#DCDCDC]">
        <TicketHeader language={language} setLanguage={setLanguage} />
        <div className="mt-4">
          <TicketBody language={language} />
        </div>
        <TicketFooter language={language} />
      </div>
    </div>
  );
}
