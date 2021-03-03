import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "af961b30-dd9a-4de6-b085-1a2b53982205",
      "User-Name": username,
      "User-Secret": password,
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    };

    try {
      // username | password => chat engine => give messages
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      // if works out => logged in
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      // if not => try new username
      setError("Incorrect Username or Password, Please login again");
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Microsoft Teams</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chat</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
