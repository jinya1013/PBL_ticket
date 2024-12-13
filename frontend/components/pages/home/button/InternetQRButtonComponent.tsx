import { InternetButtonComponent } from './InternetButtonComponent';
import { QRButtonComponent } from './QRButtonComponent';

export const InternetQRButtonComponent =  ({ language = 'ja' }: { language?: 'en' | 'ja' | 'zh' | 'ko' }) => {
  return (
    <div className="flex items-center justify-start gap-5 bg-transparent w-[800px] box-border mr-auto">
      <InternetButtonComponent language={language} />
      <QRButtonComponent language={language} />
    </div>
  );
};
