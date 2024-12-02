import './RefundButtonComponent.css';

export const RefundButtonComponent = () => {
  return (
    <div className="refund-button-container">
      <div className="refund-button-text">
        きっぷの払いもどし
      </div>
          <div className="refund-icons">
          <img
            src="/refund.png"
            alt="Refund Icon"
            className="refund-icon"
          />
        </div>
    </div>
  );
};
