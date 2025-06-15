import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login ()  {
const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const handleLogin = async (e) => {
e.preventDefault();
setLoading(true);
setError("");

try {
const response = await fetch("http://localhost:3000/api/login", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ email, password }),
});

if (response.ok) {
// Optionally handle token or user data here
navigate("/admin-dashboard");
} else if (response.status === 401) {
setError("Invalid email or password.");
} else {
setError("An unexpected error occurred. Please try again.");
}
} catch (err) {
setError("Unable to connect to the server.");
} finally {
setLoading(false);
}
};

return (
<div className="login-container">
<h2 className="login-title">Login</h2>
<form onSubmit={handleLogin}>
<div className="form-group">
<label>Email</label>
<input
type="email"
placeholder="Enter your email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
autoComplete="username"
/>
</div>
<div className="form-group">
<label>Password</label>
<input
type="password"
placeholder="Enter your password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
autoComplete="current-password"
/>
</div>
{error && <div className="error-message">{error}</div>}
<button type="submit" className="login-button" disabled={loading}>
{loading ? "Logging in..." : "Login"}
</button>
</form>
<p>
Don't have an account? <a href="/register">Register</a>
</p>
</div>
);
};

export default Login; 