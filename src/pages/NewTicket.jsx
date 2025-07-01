import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewTicket = () => {
  const navigate = useNavigate();

  // State for form fields
  const [form, setForm] = useState({
    ticketNo: "",
    date: "",
    name: "",
    department: "",
    subject: "",
    category: "",
    description: "",
    type: "",
    priority: "",
    attachment: null
  });
  const [notRobot, setNotRobot] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    if (type === "file") {
      setForm({ ...form, [name]: files[0] });
    } else if (type === "checkbox") {
      setNotRobot(checked);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!notRobot) {
      alert("Please confirm you are not a robot.");
      return;
    }
    // Prepare ticket object
    const ticket = {
      ...form,
      id: Date.now(),
      attachment: form.attachment ? form.attachment.name : null
    };
    // Get existing tickets
    const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
    tickets.push(ticket);
    localStorage.setItem("tickets", JSON.stringify(tickets));
    // Redirect
    navigate("/my-ticket");
  };

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
      height: "100vh",
      position: "fixed",
      left: 0,
      top: 60,
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
      marginLeft: "200px",
      display: "flex",
      flexDirection: "column",
    },
    fullHeaderBar: {
      width: "100vw",
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
      padding: "100px 40px 20px",
    },
    title: {
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "30px",
    },
    formRow: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "15px",
      gap: "20px",
    },
    input: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      backgroundColor: "#f7f7f7",
      fontSize: "16px",
      marginTop: "6px",
      marginBottom: "18px",
      boxSizing: "border-box"
    },
    textarea: {
      width: "100%",
      minHeight: "100px",
      padding: "12px 14px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      backgroundColor: "#f7f7f7",
      fontSize: "16px",
      marginTop: "6px",
      marginBottom: "18px",
      resize: "vertical",
      boxSizing: "border-box"
    },
    fileInput: {
      width: "100%",
      padding: "10px 0",
      marginTop: "6px",
      marginBottom: "18px",
      fontSize: "16px",
      backgroundColor: "#f7f7f7",
      border: "1px solid #ccc",
      borderRadius: "6px",
      boxSizing: "border-box"
    },
    label: {
      fontWeight: "500",
      marginBottom: "2px",
      display: "block",
      fontSize: "15px"
    },
    formGroup: {
      marginBottom: "18px"
    },
    captcha: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    submitBtn: {
      backgroundColor: "#40e0d0",
      padding: "10px 20px",
      border: "none",
      borderRadius: "6px",
      color: "white",
      fontWeight: "bold",
      cursor: "pointer",
    },
    footer: {
      padding: "10px",
      textAlign: "center",
      backgroundColor: "#40e0d0",
    },
  };

  return (
    <>
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

      <div style={styles.container}>
        <div style={styles.sidebar}>
          <Link to="/userdashboard" style={styles.link}>📊 Dashboard</Link>
          <Link to="/new-ticket" style={styles.link}>📝 New Ticket</Link>
          <Link to="/my-ticket" style={styles.link}>📁 My Ticket</Link>
        </div>

        <div style={styles.main}>
          <div style={styles.content}>
            <div style={styles.title}>Create New Ticket</div>

            {/* ✅ FORM STARTS HERE */}
            <form onSubmit={handleSubmit} style={{ maxWidth: 900, margin: '0 auto' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px 32px',
                alignItems: 'center',
                marginBottom: 24
              }}>
                <label style={{ gridColumn: '1/2' }}>
                  Ticket No.<br />
                  <input style={styles.input} name="ticketNo" value={form.ticketNo} onChange={handleChange} />
                </label>
                <label style={{ gridColumn: '2/3' }}>
                  Date<br />
                  <input style={styles.input} type="date" name="date" value={form.date} onChange={handleChange} />
                </label>
                <label style={{ gridColumn: '1/2' }}>
                  Name<br />
                  <input style={styles.input} name="name" value={form.name} onChange={handleChange} />
                </label>
                <label style={{ gridColumn: '2/3' }}>
                  Department<br />
                  <input style={styles.input} name="department" value={form.department} onChange={handleChange} />
                </label>
                <label style={{ gridColumn: '1/3' }}>
                  Subject<br />
                  <input style={styles.input} name="subject" value={form.subject} onChange={handleChange} />
                </label>
                <label style={{ gridColumn: '1/2' }}>
                  Category<br />
                  <input style={styles.input} name="category" value={form.category} onChange={handleChange} />
                </label>
                <div style={{ gridColumn: '2/3', position: 'relative' }}>
                  <label>Description</label><br />
                  <textarea style={{ ...styles.textarea, paddingRight: 40 }} name="description" value={form.description} onChange={handleChange} />
                  <label htmlFor="attachment" style={{ position: 'absolute', bottom: 18, right: 12, cursor: 'pointer' }}>
                    <span role="img" aria-label="attach">📎</span>
                  </label>
                  <input id="attachment" style={{ display: 'none' }} type="file" name="attachment" onChange={handleChange} />
                </div>
                <label style={{ gridColumn: '1/2' }}>
                  Type<br />
                  <input style={styles.input} name="type" value={form.type} onChange={handleChange} />
                </label>
                <label style={{ gridColumn: '1/2' }}>
                  Priority<br />
                  <input style={styles.input} name="priority" value={form.priority} onChange={handleChange} />
                </label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <input type="checkbox" id="robot" checked={notRobot} onChange={handleChange} name="notRobot" style={{ width: 22, height: 22 }} />
                  <label htmlFor="robot" style={{ fontSize: 18 }}>I'm not a robot</label>
                  <div style={{ marginLeft: 24, background: '#fff', border: '1px solid #ccc', borderRadius: 6, padding: '2px 8px' }}>
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" style={{ height: 32, verticalAlign: 'middle' }} />
                  </div>
                </div>
                <button style={{ ...styles.submitBtn, marginLeft: 'auto', width: 160, fontSize: 20, background: '#40e0d0', color: '#fff' }} type="submit">Submit</button>
              </div>
            </form>
            {/* ✅ FORM ENDS HERE */}
          </div>

          <div style={styles.footer}>Footer Area</div>
        </div>
      </div>
    </>
  );
};

export default NewTicket;
