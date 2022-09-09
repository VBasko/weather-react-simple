import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/vbasko/"
          target="_blank"
          rel="noreferrer"
        >
          Viktoriia Basko
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/VBasko/weather-react-simple"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
