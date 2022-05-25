import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Presentation from "./pages/presentation/Presentation";
import ThemeModeProvider from "./components/theme-mode-context/ThemeModeContext";
import AttendeePage from "./pages/attendee/Attendees";

function App() {
  return (
    <div className="App">
      <ThemeModeProvider>
        <Navbar />
        <Routes>
          <Route path="/presentations" element={<Presentation />} />
          <Route path="/attendees" element={<AttendeePage />} />
        </Routes>
      </ThemeModeProvider>
    </div>
  );
}

export default App;
