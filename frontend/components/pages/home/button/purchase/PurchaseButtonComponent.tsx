import "./PurchaseButtonComponent.css";

export const PurchaseButtonComponent = () => {
  return (
    <div className="transfer-button-container">
      <div className="transfer-button-content">
        <div className="text-content">
          <div className="main-text">
            <span className="bold-text">乗換案内</span><span style={{ fontSize: "0.6em" }}>から購入</span>
          </div>
          <div className="sub-text">時間にあわせて 目的地までの列車を提案</div>
        </div>
        <div className="icons">
          <img
            src="/purchase.png"
            alt="Purchase Icon"
            className="purchase-icon"
          />
        </div>
      </div>
    </div>
  );
};