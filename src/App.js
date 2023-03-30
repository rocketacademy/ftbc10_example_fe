import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Students from "./Components/Students";

function App() {
  const [users, setUsers] = useState([]);

  const callUsers = async () => {
    let data = await axios.get("http://localhost:8000/users");
    console.log("data", data);
    setUsers([...users, ...data.data]);
  };

  useEffect(() => {
    callUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {users && users.length > 0 ? (
          users.map((person) => <h3>Hello {person.email}</h3>)
        ) : (
          <>No users</>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Students />
      </header>
    </div>
  );
}

export default App;
