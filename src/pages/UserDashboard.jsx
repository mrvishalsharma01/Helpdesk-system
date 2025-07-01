import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/login");
  };

  const styles = {
    container: {
      display: "flex",
      height: "100vh",
      fontFamily: "sans-serif",
    },
    sidebar: {
      width: "200px",
      backgroundColor: "#ddd",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      // marginTop: "60px", // 👈 ADDED THIS
      height: "100vh", // ensure full height
      position: "fixed", // to stay fixed while scrolling
      left: 0,
      top: 60, // 👈 pushes it below header
    },

    link: {
      textDecoration: "none",
      color: "black",
      fontSize: "16px",
      padding: "8px 10px",
      borderRadius: "5px",
      backgroundColor: "#f3f3f3",
    },
    main: {
      flex: 1,
      marginLeft: "200px", // 👈 shift right to make room for fixed sidebar
      display: "flex",
      flexDirection: "column",
    },
    fullHeaderBar: {
      width: "100vw", // full width including sidebar
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#40e0d0",
      padding: "10px 20px",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000,
    },
    headerLeft: {
      fontWeight: "bold",
      fontSize: "22px",
      color: "white",
    },
    headerRight: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
    },
    icon: {
      fontSize: "18px",
      background: "black",
      color: "white",
      padding: "6px 10px",
      borderRadius: "6px",
      cursor: "pointer",
    },
    content: {
      flex: 1,
      backgroundColor: "#fff",
      padding: "100px 20px 20px", // Top padding added for fixed header
    },
    title: {
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "30px",
    },
    cards: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    card: {
      width: "180px",
      height: "120px",
      borderRadius: "12px",
      color: "#000066",
      boxShadow: "4px 4px 6px #aaa",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "20px",
    },
    blue: { backgroundColor: "#2196f3" },
    green: { backgroundColor: "#00ff66" },
    red: { backgroundColor: "#f44336" },
    yellow: { backgroundColor: "#ffff66" },
    footer: {
      padding: "10px",
      textAlign: "center",
      backgroundColor: "#40e0d0",
    },
  };

  return (
    <>
      {/* Full width header */}
      <div style={styles.fullHeaderBar}>
        <div style={styles.headerLeft}>Helpdesk</div>
        <div style={styles.headerRight}>
          <span style={styles.icon}>BM</span>
          <span style={styles.icon}>BI</span>
          <span style={styles.icon}>🔔</span>
          <span style={styles.icon}>👤</span>
          <span style={styles.icon} onClick={handleLogout}>↪️</span>
        </div>
      </div>

      {/* Body */}
      <div style={styles.container}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <Link to="/userdashboard" style={styles.link}>📊 Dashboard</Link>
          <Link to="/new-ticket" style={styles.link}>📝 New Ticket</Link>
          <Link to="/my-ticket" style={styles.link}>📁 My Ticket</Link>
        </div>

        {/* Main Content */}
        <div style={styles.main}>
          <div style={styles.content}>
            <div style={styles.title}>Dashboard</div>

            <div style={styles.cards}>
              <div style={{ ...styles.card, ...styles.blue }}>
                <p>Total Tickets</p>
                <h1>12</h1>
              </div>
              <div style={{ ...styles.card, ...styles.green }}>
                <p>Total Solved</p>
                <h1>8</h1>
              </div>
              <div style={{ ...styles.card, ...styles.red }}>
                <p>Total Awaiting Approval</p>
                <h1>2</h1>
              </div>
              <div style={{ ...styles.card, ...styles.yellow }}>
                <p>Total in Progress</p>
                <h1>2</h1>
              </div>
            </div>
          </div>

          <div style={styles.footer}>Footer Area</div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
