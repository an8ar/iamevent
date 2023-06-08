import React from "react";
import { AppBar, Toolbar, Box, Typography, Container } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Air Almaty
          </Typography>
        </Toolbar>
      </AppBar>
      <Container
        sx={{
          mt: 2
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
