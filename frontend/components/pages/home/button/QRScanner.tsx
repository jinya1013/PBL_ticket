/**
 * 以下のコードでは、実際のQRコードの読み取りロジックは省略し、
 * カメラは起動したまま「スキャン」ボタンを押すとダミーのQR読み取りが完了したようにふるまい、
 * 指定のページに遷移するときにカメラを停止する実装を行っています。
 */

// Start of Selection
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

export const QRScanner = ({ language = 'ja' }: { language?: 'en' | 'ja' | 'zh' | 'ko' }) => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  const getContent = () => {
    switch (language) {
      case 'en':
        return 'Scan';
      case 'zh':
        return '扫描';
      case 'ko':
        return '스캔';
      default:
        return 'スキャン';
    }
  };

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (error) {
        console.error('カメラの起動に失敗しました', error);
      }
    };

    startCamera();

    // クリーンアップ（コンポーネントアンマウントや画面遷移時にカメラを停止する）
    return () => {
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // ダミーの「スキャン」ボタンを押したときの処理
  const handleDummyScan = () => {
    // ページ遷移前にカメラを停止
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
    }
    // 指定のページにクエリパラメータを付与して遷移する
    router.push(`/purchase?lang=en&adults=2&fromStation=Komaba-Todaimae&toStation=Hongo 3-chome`);
  };

  return (
    <div>
      {/* カメラ映像のプレビュー */}
      <video ref={videoRef} style={{ display: 'block', width: '100%', maxHeight: '400px' }} />
      {/* ダミーの「スキャン」ボタン */}
      <button
        onClick={handleDummyScan}
        style={{ marginTop: '16px', padding: '8px 16px', background: '#CCCCCC' }}
      >
        {getContent()}
      </button>
    </div>
  );
};
