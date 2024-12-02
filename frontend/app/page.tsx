'use client';

import { TicketBody } from '@/components/pages/home/body/TicketBody';
import { TicketFooter } from '@/components/pages/home/footer/TicketFooter';
import { TicketHeader } from '@/components/pages/home/header/TicketHeader';

export default function Home() {
  return (
    <div className="min-h-screen p-4 bg-[#1a1a1a]">
      <TicketHeader />
      <TicketBody />
      <TicketFooter />
    </div>
  );
}
