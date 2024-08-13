import logo from './logo.svg';
import './App.css';

function App() {
  console.log("ENV: ", process.env.REACT_APP)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          DevOps <code>CI/CD pipeline</code> tutorial using GitHub Actions & Pages in {process.env.REACT_APP}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Documentation..
        </a>
      </header>
    </div>
  );
}

export default App;
