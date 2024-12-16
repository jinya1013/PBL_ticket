import jsQR from 'jsqr';
import { useEffect, useRef, useState } from 'react';

export const QRScanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [qrCode, setQrCode] = useState<string | null>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (error) {
        console.error('カメラの起動に失敗しました', error);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const scanQRCode = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (canvas && video) {
      const ctx = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
      if (imageData) {
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) {
          setQrCode(code.data); // QRコードのデータをセット
        }
      }
    }
    requestAnimationFrame(scanQRCode); // 次のフレームで再スキャン
  };

  useEffect(() => {
    if (!qrCode) {
      scanQRCode();
    }
  }, [qrCode]);

  return (
    <div>
      <video ref={videoRef} style={{ display: qrCode ? 'none' : 'block' }} />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      {qrCode && <p>QRコードの内容: {qrCode}</p>}
    </div>
  );
};
