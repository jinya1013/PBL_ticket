export const ReservedSeatButtonComponent = ({ language = 'ja' }: { language?: 'en' | 'ja' | 'zh' | 'ko' }) => {
  const getContent = () => {
    switch (language) {
      case 'en':
        return {
          title: 'Reserved Seat',
          items: [
            'Shinkansen / Local Lines',
            'Purchase Shinkansen-Local Line Connections',
            'Seat Reservations for Multiple Journey Tickets',
            'Change Reserved Seats'
          ]
        };
      case 'zh':
        return {
          title: '指定座席',
          items: [
            '新干线/普通线路',
            '新干线～普通线路换乘购票', 
            '多次乘车券等的座位指定',
            '指定座席变更\n（未指定座席车票的座位指定）'
          ]
        };
      case 'ko':
        return {
          title: '지정석',
          items: [
            '신칸센/일반선',
            '신칸센~일반선 환승 구매',
            '회수권 등의 좌석 지정',
            '지정석 변경\n(좌석 미지정 승차권의 좌석 지정)'
          ]
        };
      default:
        return {
          title: '指定席',
          items: [
            '新幹線／在来線',
            '新幹線～在来線のりつぎ購入',
            '回数券等への座席指定',
            '指定席の変更\n（座席未指定券への座席指定）'
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
            <li key={index}>
              {item.includes('\n') ? (
                <>
                  {item.split('\n')[0]}
                  <br />
                  {item.split('\n')[1]}
                </>
              ) : (
                item
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
