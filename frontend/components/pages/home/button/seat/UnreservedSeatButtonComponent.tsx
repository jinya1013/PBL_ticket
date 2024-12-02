import './SeatButtonComponent.css';

export const UnreservedSeatButtonComponent = () => {
  return (
    <div className="seat-button-container">
      <div className="button-left">自由席</div>
      <div className="button-right">
        <ul className="button-details">
          <li>新幹線／在来線</li>
          <li>新幹線～在来線のりつぎ購入</li>
          <li>新幹線自由席特急券の日付変更</li>
        </ul>
      </div>
    </div>
  );
};
