import { InternetButtonComponent } from './internet/InternetButtonComponent';
import './InternetQRButtonComponent.css';
import { QRButtonComponent } from './qr/QRButtonComponent';

export const InternetQRButtonComponent = () => {
  return (
    <div className="internet-qr-button-container">
      <InternetButtonComponent />
      <QRButtonComponent />
    </div>
  );
};
