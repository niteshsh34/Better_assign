import { useState } from "react";
import API from "./api";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = async () => {
    try {
      if (isRegister) {
        await API.post("/register", { username, password });
        alert("Registered successfully!");
      } else {
        const res = await API.post("/login", { username, password });
        setUser(res.data.user);
      }
    } catch (err) {
      alert("Error: " + (err.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <div className="card">
      <h2>{isRegister ? "Register" : "Login"}</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {isRegister ? "Register" : "Login"}
      </button>

      <p onClick={() => setIsRegister(!isRegister)} className="link">
        {isRegister ? "Already have an account? Login" : "Create new account"}
      </p>
    </div>
  );
}

export default Login;