import './InternetButtonComponent.css';

export const InternetButtonComponent = () => {
  return (
    <div className="internet-button-container">
      <div className="internet-button-text">
        <div className="internet-button-top">インターネット</div>
        <div className="internet-button-bottom">予約の受け取り</div>
      </div>
          <div className="internet-icons">
          <img
            src="/internet.png"
            alt="internet Icon"
            className="internet-icon"
          />
        </div>
    </div>
  );
};
