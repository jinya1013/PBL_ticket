export const DiscountButtonComponent = ({ language = 'ja' }: { language?: 'en' | 'ja' | 'zh' | 'ko' }) => {
  const getContent = () => {
    switch (language) {
      case 'en':
        return {
          discountTicket: '・Discount Tickets',
          ticketAndShareholder: '・Train Tickets ・Shareholder Benefits'
        };
      case 'zh':
        return {
          discountTicket: '・优惠车票',
          ticketAndShareholder: '・乘车券 ・股东优惠'
        };
      case 'ko':
        return {
          discountTicket: '・할인 승차권',
          ticketAndShareholder: '・승차권 ・주주우대'
        };
      default:
        return {
          discountTicket: '・おトクなきっぷ',
          ticketAndShareholder: '・乗車券 ・株主優待'
        };
    }
  };

  const content = getContent();

  return (
    <div className="flex flex-col items-center justify-center bg-[#40413F] text-white rounded p-5 w-[800px] shadow-md h-[240px] box-border mr-auto">
      <div className={`font-bold mb-5 text-center ${language === 'en' ? 'text-[48px]' : 'text-[64px]'}`}>{content.discountTicket}</div>
      <div className={`font-bold text-center ${language === 'en' ? 'text-[48px]' : 'text-[64px]'}`}>
        {content.ticketAndShareholder}
      </div>
    </div>
  );
};
