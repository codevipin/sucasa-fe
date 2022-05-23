import React from "react";
import { useThemeMode } from "../../hooks/theme-mode";
import Switch from "@mui/material/Switch";
import { Box, Typography, useTheme } from "@mui/material";
import { ThemeMode } from "../theme-mode-context/ThemeModeContext";

export default function ThemeModeToggle() {
  const toggleThemeMode = useThemeMode();
  const theme = useTheme();
  return (
    <Box
      sx={{
        mr: 2,
        display: { xs: "none", md: "flex" },
        flexGrow: 1,
        textDecoration: "none",
        alignItems: "center",
      }}
    >
      <Typography>🌞</Typography>
      <Switch
        checked={theme.palette.mode === ThemeMode.DARK}
        onChange={toggleThemeMode}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Typography>🌙</Typography>
    </Box>
  );
}
