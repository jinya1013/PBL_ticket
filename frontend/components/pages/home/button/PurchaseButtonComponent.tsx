'use client';

import { useRouter } from "next/navigation";

export const PurchaseButtonComponent = ({ language = 'ja' }: { language?: 'en' | 'ja' | 'zh' | 'ko' }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/purchase?lang=${language}`);
  };  

  const getContent = () => {
    switch (language) {
      case 'en':
        return {
          title: 'Transfer Guide',
          purchase: ' Purchase',
          description: 'Suggesting trains to your destination based on your schedule'
        };
      case 'zh':
        return {
          title: '换乘指南',
          purchase: '购买',
          description: '根据时间为您推荐到目的地的列车'
        };
      case 'ko':
        return {
          title: '환승 안내',
          purchase: '구매',
          description: '시간에 맞춰 목적지까지의 열차를 제안'
        };
      default:
        return {
          title: '乗換案内',
          purchase: 'から購入',
          description: '時間にあわせて 目的地までの列車を提案'
        };
    }
  };

  const content = getContent();

  return (
    <div 
      className="flex items-center justify-center bg-[#40413F] text-white rounded p-5 w-[800px] shadow-md h-[240px] box-border mr-auto"
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className="flex items-center justify-between w-full">
        <div className="text-2xl h-full overflow-visible flex flex-col justify-center text-center">
          <div className={`font-bold mr-5 text-center ${language === 'en' ? 'text-[48px]' : 'text-[56px]'}`}>
            <span className="font-bold">{content.title}</span><span className="text-[0.6em]">{content.purchase}</span>
          </div>
          <div className="list-disc pl-5 m-0 leading-normal text-left">{content.description}</div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/purchase.png"
            alt="Purchase Icon"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      </div>
    </div>
  );
};