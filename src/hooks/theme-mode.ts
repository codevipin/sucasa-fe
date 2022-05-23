import { useContext } from "react";
import { ThemeModeUpdateContext } from "../components/theme-mode-context/ThemeModeContext";

export const useThemeMode = () => useContext(ThemeModeUpdateContext);
