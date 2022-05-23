import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Attendees from "./pages/attendees/Attendees";
import Navbar from "./components/navbar/Navbar";
import Presentation from "./pages/presentation/Presentation";
import ThemeModeProvider from "./components/theme-mode-context/ThemeModeContext";

function App() {
  return (
    <div className="App">
      <ThemeModeProvider>
        <Navbar />
        <Routes>
          <Route path="/presentations" element={<Presentation />} />
          <Route path="/attendees" element={<Attendees />} />
        </Routes>
      </ThemeModeProvider>
    </div>
  );
}

export default App;
