import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ThemeModeProvider from "./components/theme-mode-context/ThemeModeContext";

function App() {
  return (
    <div className="App">
      <ThemeModeProvider>
        <Navbar />
      </ThemeModeProvider>
    </div>
  );
}

export default App;
