export const TicketHeader = ({ language = 'ja', setLanguage }: { language?: 'en' | 'ja' | 'zh' | 'ko', setLanguage: (lang: 'en' | 'ja' | 'zh' | 'ko') => void }) => {
  const getContent = () => {
    switch (language) {
      case 'en':
        return {
          title: 'Please select',
          subtitle: ' your ticket type',
          japanese: '日本語',
          english: 'ENGLISH',
          chinese: '中文',
          korean: '한국어'
        };
      case 'zh':
        return {
          title: '请选择',
          subtitle: '车票种类',
          japanese: '日本語',
          english: 'ENGLISH',
          chinese: '中文',
          korean: '한국어'
        };
      case 'ko':
        return {
          title: '승차권 종류',
          subtitle: '를 선택해 주십시오',
          japanese: '日本語',
          english: 'ENGLISH',
          chinese: '中文',
          korean: '한국어'
        };
      default:
        return {
          title: 'きっぷの種類',
          subtitle: 'をお選びください',
          japanese: '日本語',
          english: 'ENGLISH',
          chinese: '中文',
          korean: '한국어'
        };
    }
  };

  const content = getContent();

  return (
    <div className="flex justify-between items-center bg-black px-5 py-2.5">
      <span>
        <span className="text-[#FEFAA2] text-[42px] font-bold">{content.title}</span>
        <span className="text-white text-[32px] font-bold">{content.subtitle}</span>
      </span>
      <div className="flex gap-2.5">
        <button 
          onClick={() => setLanguage('ja')}
          className="bg-gray-500 text-white rounded px-2.5 py-1.5 cursor-pointer text-[32px]"
        >
          {content.japanese}
        </button>
        <button 
          onClick={() => setLanguage('en')}
          className="bg-gray-500 text-white rounded px-2.5 py-1.5 cursor-pointer text-[32px]"
        >
          {content.english}
        </button>
        <button 
          onClick={() => setLanguage('zh')}
          className="bg-gray-500 text-white rounded px-2.5 py-1.5 cursor-pointer text-[32px]"
        >
          {content.chinese}
        </button>
        <button 
          onClick={() => setLanguage('ko')}
          className="bg-gray-500 text-white rounded px-2.5 py-1.5 cursor-pointer text-[32px]"
        >
          {content.korean}
        </button>
      </div>
    </div>
  );
};