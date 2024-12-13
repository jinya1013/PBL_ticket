export const TicketFooter = ({ language = 'ja' }: { language?: 'en' | 'ja' | 'zh' | 'ko' }) => {
  const getContent = () => {
    switch (language) {
      case 'en':
        return {
          railPass: 'JAPAN RAIL PASS',
          blackAndWhite: 'Black & White'
        };
      case 'zh': 
        return {
          railPass: 'JR通票',
          blackAndWhite: '黑白显示'
        };
      case 'ko':
        return {
          railPass: 'JR패스',
          blackAndWhite: '흑백 표시'
        };
      default:
        return {
          railPass: 'JAPAN RAIL PASS',
          blackAndWhite: '白黒表示'
        };
    }
  };

  const content = getContent();

  return (
    <div className="bg-gray-300 p-5 flex justify-between items-center">
      {/* JAPAN RAIL PASS button */}
      <button className="flex items-center bg-gray-600 text-white border-none rounded px-5 py-2.5 cursor-pointer text-base font-bold ml-[400px]">
        <img
          src="https://via.placeholder.com/40" // アイコン画像のURLに差し替えてください
          alt="icon"
          className="mr-2.5 rounded"
        />
        {content.railPass}
      </button>

      {/* 白黒表示 button */}
      <div className="flex-1 flex justify-start ml-[200px]">
        <button className="bg-black text-white border-none rounded px-7 py-4 cursor-pointer text-lg font-bold">
          {content.blackAndWhite}
        </button>
      </div>
    </div>
  );
}