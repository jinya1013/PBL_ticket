export const TicketFooter = () =>  {
  return (
    <div style={{ backgroundColor: '#ccc', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* JAPAN RAIL PASS button */}
      <button style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#444',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        marginLeft: '400px'
      }}>
        <img
          src="https://via.placeholder.com/40" // アイコン画像のURLに差し替えてください
          alt="icon"
          style={{ marginRight: '10px', borderRadius: '5px' }}
        />
        JAPAN RAIL PASS
      </button>

      {/* 白黒表示 button */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', marginLeft: '200px' }}>
        <button style={{
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '15px 30px',
          cursor: 'pointer',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>
          白黒表示
        </button>
      </div>
    </div>
  );
}