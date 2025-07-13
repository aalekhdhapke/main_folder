import logo from "./logo.svg";
import "./App.css";
import { Audio } from "react-loader-spinner";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* login page */}
        <div className="login-page">
          <h1>login</h1>
          <form>
            <label>Username:</label>
            <br />
            <input type="text"className=" text-area" name="username" />
            <br />
            <label>Password:</label>
            <br />
            <input type="password"className=" text-area" name="password" />
            <br />
            <br />
            <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"

        >
         login
        </a>
          </form>
        </div>
{/* over */}
      
       
       

       
      </header>
    </div>
  );
}

export default App;
