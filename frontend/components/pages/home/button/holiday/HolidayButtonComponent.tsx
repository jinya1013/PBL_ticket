import './HolidayButtonComponent.css';

export const HolidayButtonComponent = () => {
  return (
    <div className="holiday-button-container">
      <div className="holiday-button-text">
      <div className="holiday-button-top">大人の休日倶楽部</div>
      <div className="holiday-button-bottom">割引きっぷ</div>
      </div>
      <div className="holiday-icons">
          <img
            src="/club.png"
            alt="Club Icon"
            className="holiday-icon"
          />
        </div>
    </div>
  );
};
