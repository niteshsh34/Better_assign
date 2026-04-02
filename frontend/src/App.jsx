import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="container">
      {user ? (
        <Dashboard user={user} setUser={setUser} />
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
}

export default App;