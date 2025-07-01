import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Dummy users with role info
const users = [
  { username: "user123", password: "userpass", role: "user" },
  { username: "ops123", password: "opspass", role: "operation" },
  { username: "tech123", password: "techpass", role: "technical" },
  { username: "admin123", password: "adminpass", role: "admin" },
];

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      // Navigate based on role
      switch (foundUser.role) {
        case "user":
          navigate("/user-dashboard");
          break;
        case "operation":
          navigate("/operation-dashboard");
          break;
        case "technical":
          navigate("/technical-dashboard");
          break;
        case "admin":
          navigate("/admin-dashboard");
          break;
        default:
          alert("Role not recognized");
      }
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Helpdesk System</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleLogin} style={styles.button}>
          Sign In
        </button>

        <div style={styles.links}>
          <Link to="/forgot-password" style={styles.forgot}>
            Forgot password
          </Link>
          <Link to="/signup" style={styles.signup}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#40e0d0",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#b2dfdb",
    padding: "40px",
    borderRadius: "10px",
    width: "90%",
    maxWidth: "350px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    fontStyle: "italic",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "green",
    color: "white",
    padding: "10px",
    border: "none",
    width: "100%",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
    borderRadius: "8px",
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
    fontSize: "14px",
  },
  forgot: {
    color: "red",
    textDecoration: "none",
  },
  signup: {
    color: "black",
    textDecoration: "none",
  },
};

export default Login;
