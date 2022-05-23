import { Box, CssBaseline, Divider, Drawer } from "@mui/material";
import React from "react";

interface PageLayoutProps {
  sidebar: React.ReactNode;
  content: React.ReactNode;
}
const drawerWidth = 340;
function PageLayout({ sidebar, content }: PageLayoutProps) {
  return (
    <Box sx={{ display: "flex", flex: 1 }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          borderRight: 1,
          borderColor: "grey.400",
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: "block",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth - 1,
              position: "relative",
            },
          }}
          open
        >
          {sidebar}
        </Drawer>
      </Box>
      <Divider />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {content}
      </Box>
    </Box>
  );
}

export default PageLayout;
