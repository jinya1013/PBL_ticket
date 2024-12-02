import { DiscountButtonComponent } from '../button/discount/DiscountButtonComponent';
import { HolidayButtonComponent } from '../button/holiday/HolidayButtonComponent';
import { InternetQRButtonComponent } from '../button/internet_qr/InternetQRButtonComponent';
import { PurchaseButtonComponent } from '../button/purchase/PurchaseButtonComponent';
import { RefundButtonComponent } from '../button/refund/RefundButtonComponent';
import { ReservedSeatButtonComponent } from '../button/seat/ReservedSeatButtonComponent';
import { UnreservedSeatButtonComponent } from '../button/seat/UnreservedSeatButtonComponent';
import { SubscriptionButtonComponent } from '../button/subscription/SubscriptionButtonComponent';
export const TicketBody = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 bg-[#DCDCDC]">
        <ReservedSeatButtonComponent />
        <PurchaseButtonComponent />
        <UnreservedSeatButtonComponent />
        <DiscountButtonComponent />
        <SubscriptionButtonComponent />
        <HolidayButtonComponent />
        <RefundButtonComponent />
        <InternetQRButtonComponent />
      </div>
    </>
  );
}; 