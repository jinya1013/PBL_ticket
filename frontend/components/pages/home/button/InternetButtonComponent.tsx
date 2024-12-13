export const InternetButtonComponent = ({ language = 'ja' }: { language?: 'en' | 'ja' | 'zh' | 'ko' }) => {
  const getContent = () => {
    switch (language) {
      case 'en':
        return {
          internet: 'Internet',
          reservation: 'Reservation Pickup'
        };
      case 'zh':
        return {
          internet: '互联网',
          reservation: '预约取票'
        };
      case 'ko':
        return {
          internet: '인터넷',
          reservation: '예약 수령'
        };
      default:
        return {
          internet: 'インターネット',
          reservation: '予約の受け取り'
        };
    }
  };

  const content = getContent();

  return (
    <div className="flex items-center justify-center gap-10 bg-[#429448] text-white rounded p-5 w-[400px] shadow-md h-[120px] box-border mr-auto">
      <div className="flex flex-col items-start text-left w-[65%]">
        <div className={`text-base font-bold ${language === 'ja' ? '[transform:scaleY(1.5)]' : ''} w-full break-keep whitespace-normal`}>
          {content.internet}
        </div>
        <div className={`text-base font-bold mt-2 ${language === 'ja' ? '[transform:scaleY(1.5)]' : ''} w-full break-keep`}>
          {content.reservation}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/internet.png"
          alt="internet Icon"
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    </div>
  );
};
