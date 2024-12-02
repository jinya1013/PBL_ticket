import './SubscriptionButtonComponent.css';

export const SubscriptionButtonComponent = () => {
  return (
    <div className="subscription-button-container">
      <div className="button-left">定期券</div>
      <div className="button-right">
        <ul className="button-details">
          <li>新規／継続購入</li>
          <li>ネットde定期</li>
        </ul>
      </div>
    </div>
  );
};
