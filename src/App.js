import "./App.css";
import "./styles.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <p>
        {" "}
        <a
          href="https://github.com/aga-92/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Aga Jackiewicz
      </p>
    </div>
  );
}

export default App;
