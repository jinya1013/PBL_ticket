import './SeatButtonComponent.css';

export const ReservedSeatButtonComponent = () => {
  return (
    <div className="seat-button-container">
      <div className="button-left">指定席</div>
      <div className="button-right">
        <ul className="button-details">
          <li>新幹線／在来線</li>
          <li>新幹線～在来線のりつぎ購入</li>
          <li>回数券等への座席指定</li>
          <li>
            指定席の変更
            <br />
            （座席未指定券への座席指定）
          </li>
        </ul>
      </div>
    </div>
  );
};
