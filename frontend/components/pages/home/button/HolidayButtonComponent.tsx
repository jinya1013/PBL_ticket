export const HolidayButtonComponent = ({ language = 'ja' }: { language?: 'en' | 'ja' | 'zh' | 'ko' }) => {
  const getContent = () => {
    switch (language) {
      case 'en':
        return {
          club: 'Adult Holiday Club',
          ticket: 'Discount Ticket'
        };
      case 'zh':
        return {
          club: '成人假日俱乐部',
          ticket: '优惠车票'
        };
      case 'ko':
        return {
          club: '어른의 휴일 클럽',
          ticket: '할인 승차권'
        };
      default:
        return {
          club: '大人の休日倶楽部',
          ticket: '割引きっぷ'
        };
    }
  };

  const content = getContent();

  return (
    <div className="flex items-center justify-center gap-5 bg-[#1301F5] text-white rounded p-5 w-[800px] shadow-md h-[120px] box-border mr-auto">
      <div className="flex flex-col items-center text-center">
        <div className={`font-bold ${language === 'en' ? 'text-[24px]' : 'text-[32px]'}`}>{content.club}</div>
        <div className={`font-bold mt-2 ${language === 'en' ? 'text-[24px]' : 'text-[32px]'}`}>{content.ticket}</div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/club.png"
          alt="Club Icon"
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    </div>
  );
};
