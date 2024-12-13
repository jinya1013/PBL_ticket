export const SubscriptionButtonComponent = ({ language = 'ja' }: { language?: 'en' | 'ja' | 'zh' | 'ko' }) => {
  const getContent = () => {
    switch (language) {
      case 'en':
        return {
          title: 'Commuter Pass',
          items: [
            'New Purchase / Renewal',
            'Online Commuter Pass'
          ]
        };
      case 'zh':
        return {
          title: '定期券',
          items: [
            '新规/续期购买',
            '网上定期券'
          ]
        };
      case 'ko':
        return {
          title: '정기권',
          items: [
            '신규/계속 구매',
            '온라인 정기권'
          ]
        };
      default:
        return {
          title: '定期券',
          items: [
            '新規／継続購入',
            'ネットde定期'
          ]
        };
    }
  };

  const content = getContent();

  return (
    <div className="flex items-center justify-center bg-[#DD4281] text-white rounded p-5 w-[800px] h-[120px] shadow-md ml-auto">
      <div className={`font-bold mr-5 text-center ${language === 'en' ? 'text-[48px]' : 'text-[64px]'}`}>{content.title}</div>
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
