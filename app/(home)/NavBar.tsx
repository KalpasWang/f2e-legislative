"use client";

import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "./Logo";
import { useTheme } from "@mui/material";
import ComposedNextLink from "@/components/ComposedNextLink";
import Paw from "./Paw";

export default function NavBar() {
  const theme = useTheme();
  return (
    <AppBar position="fixed" sx={{ bgcolor: theme.palette.primary.light }}>
      <Container maxWidth="lg" sx={{ py: theme.spacing(5) }}>
        <Toolbar>
          <Link
            component={ComposedNextLink}
            href="/"
            sx={{ mr: theme.spacing(20) }}
          >
            <Logo />
          </Link>
          <Box sx={{ display: "flex", gap: theme.spacing(10) }}>
            <Link href="/#activity">
              <Box
                sx={{
                  display: "flex",
                  gap: theme.spacing(2),
                }}
              >
                <Paw />
                <Typography variant="button">最新活動</Typography>
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
