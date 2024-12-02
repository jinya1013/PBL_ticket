import './QRButtonComponent.css';

export const QRButtonComponent = () => {
  return (
    <div className="qr-button-container">
      <div className="qr-button-text">
        <div className="qr-button-top">QRコードの</div>
        <div className="qr-button-bottom">読み取り</div>
      </div>
          <div className="qr-icons">
          <img
            src="/qr.png"
            alt="QR Icon"
            className="qr-icon"
          />
        </div>
    </div>
  );
};
