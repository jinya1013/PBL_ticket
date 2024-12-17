'use client';

import { TicketBody } from '@/components/pages/home/body/TicketBody';
import { TicketFooter } from '@/components/pages/home/footer/TicketFooter';
import { TicketHeader } from '@/components/pages/home/header/TicketHeader';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const searchParams = useSearchParams();
  const defaultLanguage = (searchParams?.get('lang') as 'en' | 'ja' | 'zh' | 'ko') || 'ja';
  const [language, setLanguage] = useState<'en' | 'ja' | 'zh' | 'ko'>(defaultLanguage);

  return (
    <div className="min-h-screen p-4 bg-[#DCDCDC]">
      <TicketHeader language={language} setLanguage={setLanguage} />
      <div className="mt-4">
        <TicketBody language={language} />
      </div>
      <TicketFooter language={language} />
    </div>
  );
}