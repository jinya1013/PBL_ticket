export const RefundButtonComponent = ({ language = 'ja' }: { language?: 'en' | 'ja' | 'zh' | 'ko' }) => {
  const getContent = () => {
    switch (language) {
      case 'en':
        return {
          refund: 'Ticket Refund'
        };
      case 'zh':
        return {
          refund: '车票退款'
        };
      case 'ko':
        return {
          refund: '승차권 환불'
        };
      default:
        return {
          refund: 'きっぷの払いもどし'
        };
    }
  };

  const content = getContent();

  return (
    <div className="flex items-center justify-center gap-5 bg-[#B425EE] text-white rounded p-5 w-[800px] shadow-md h-[120px] box-border ml-auto">
      <div className="text-[48px] font-bold mr-5 text-center flex flex-col items-center">
        {content.refund}
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/refund.png"
          alt="Refund Icon"
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    </div>
  );
};
