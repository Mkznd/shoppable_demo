import { Box, Button, Typography } from "@mui/material";

export default function Categories() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Button variant="contained">Contained</Button>
      <Box
        sx={{
          width: 200,
          background: "red",
        }}
      />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>
    </div>
  );
}
