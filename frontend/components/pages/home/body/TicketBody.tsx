import { DiscountButtonComponent } from '../button/DiscountButtonComponent';
import { HolidayButtonComponent } from '../button/HolidayButtonComponent';
import { InternetQRButtonComponent } from '../button/InternetQRButtonComponent';
import { PurchaseButtonComponent } from '../button/PurchaseButtonComponent';
import { RefundButtonComponent } from '../button/RefundButtonComponent';
import { ReservedSeatButtonComponent } from '../button/ReservedSeatButtonComponent';
import { SubscriptionButtonComponent } from '../button/SubscriptionButtonComponent';
import { UnreservedSeatButtonComponent } from '../button/UnreservedSeatButtonComponent';
export const TicketBody =  ({ language = 'ja' }: { language?: 'en' | 'ja' | 'zh' | 'ko' }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 bg-[#DCDCDC]">
        <ReservedSeatButtonComponent  language={language}/>
        <PurchaseButtonComponent language={language}  />
        <UnreservedSeatButtonComponent language={language}/>
        <DiscountButtonComponent language={language}/>
        <SubscriptionButtonComponent language={language}/>
        <HolidayButtonComponent language={language}/>
        <RefundButtonComponent language={language}/>
        <InternetQRButtonComponent language={language}/>
      </div>
    </>
  );
}; 