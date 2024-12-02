export const TicketHeader = () => {
  return (
    <div style={styles.header}>
      <span>
        <span style={styles.mainText}>きっぷの種類</span>
        <span style={styles.subText}>をお選びください</span>
      </span>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>ENGLISH</button>
        <button style={styles.button}>简体中文</button>
        <button style={styles.button}>繁体中文</button>
        <button style={styles.button}>한국어</button>
      </div>
    </div>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    padding: "10px 20px",
  },
  mainText: {
    color: "#FEFAA2",
    fontSize: "42px",
    fontWeight: "bold",
  },
  subText: {
    color: "white",
    fontSize: "32px",
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
  },
  button: {
    backgroundColor: "gray",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "32px",
  },
};