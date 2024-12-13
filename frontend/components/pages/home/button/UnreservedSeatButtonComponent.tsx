export const UnreservedSeatButtonComponent = ({ language = 'ja' }: { language?: 'en' | 'ja' | 'zh' | 'ko' }) => {
  const getContent = () => {
    switch (language) {
      case 'en':
        return {
          title: 'UnReserved Seat',
          items: [
            'Shinkansen / Local Lines',
            'Purchase Shinkansen-Local Line Connections',
            'Change Date for Non-Reserved Seat Limited Express Tickets'
          ]
        };
      case 'zh':
        return {
          title: '自由席',
          items: [
            '新干线/普通线路',
            '新干线～普通线路换乘购票',
            '新干线自由席特快券的日期变更'
          ]
        };
      case 'ko':
        return {
          title: '自由석',
          items: [
            '신칸센/일반선',
            '신칸센~일반선 환승 구매',
            '신칸센 자유석 특급권의 날짜 변경'
          ]
        };
      default:
        return {
          title: '自由席',
          items: [
            '新幹線／在来線',
            '新幹線～在来線のりつぎ購入',
            '新幹線自由席特急券の日付変更'
          ]
        };
    }
  };

  const content = getContent();

  return (
    <div className="flex items-center justify-center bg-[#40413F] text-white rounded p-5 w-[800px] shadow-md h-[240px] box-border ml-auto">
      <div className={`font-bold mr-5 text-center ${language === 'en' ? 'text-[72px]' : 'text-[96px]'}`}>{content.title}</div>
      <div className="text-2xl h-full overflow-hidden flex flex-col justify-center text-center">
        <ul className="list-disc pl-5 m-0 leading-normal text-left">
          {content.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
