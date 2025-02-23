/**
 * 日本語での説明:
 * このコードでは、QRコード読み取りの機能は実際には行わず、
 * ボタンをクリックすると /purchase?lang=en に移動し、
 * クエリパラメータとして大人2名、出発駅「Komaba-Todaimae」、
 * 到着駅「Hongo3-chome」を付与して遷移するだけの「ダミーQRボタン」を実装しています。
 */

// Start of Selection
import { useRouter } from 'next/navigation';

export const QRButtonComponent = ({ language = 'ja' }: { language?: 'en' | 'ja' | 'zh' | 'ko' }) => {
  const router = useRouter();

  const getContent = () => {
    switch (language) {
      case 'en':
        return {
          qrCode: 'QR Code',
          scan: 'Scanner',
          errorMessage: 'Failed to access camera:',
          alertMessage: 'Your browser does not support camera access.',
        };
      case 'zh':
        return {
          qrCode: 'QR码',
          scan: '扫描',
          errorMessage: '无法访问相机:',
          alertMessage: '您的浏览器不支持相机功能。',
        };
      case 'ko':
        return {
          qrCode: 'QR코드',
          scan: '스캔',
          errorMessage: '카메라 접근 실패:',
          alertMessage: '브라우저가 카메라를 지원하지 않습니다。',
        };
      default:
        return {
          qrCode: 'QRコードの',
          scan: '読み取り',
          errorMessage: 'カメラへのアクセスに失敗しました:',
          alertMessage: 'お使いのブラウザはカメラをサポートしていません。',
        };
    }
  };

  const content = getContent();

  // ダミーのQRコードボタンを押すと実行される
  const handleQRClick = () => {
    // adults=2, fromStation=Komaba-Todaimae, toStation=Hongo3-chome をクエリパラメータとして付与してリダイレクト
    router.push('/purchase?lang=en&adults=2&fromStation=Komaba-Todaimae&toStation=Hongo3-chome');
  };

  return (
    <div>
      <div
        onClick={handleQRClick}
        className="flex items-center justify-center gap-5 bg-[#FFFF92] text-[#000099] rounded p-5 w-[400px] shadow-md h-[120px] box-border mr-auto cursor-pointer hover:opacity-80"
      >
        <div className="flex flex-col items-center text-center">
          <div className="text-[32px] font-bold">{content.qrCode}</div>
          <div className="text-[32px] font-bold mt-2">{content.scan}</div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/qr.png"
            alt="QR Icon"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      </div>
    </div>
  );
};
