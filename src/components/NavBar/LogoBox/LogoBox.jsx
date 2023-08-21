import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function LogoBox() {
  return (
    <Link to={"/"} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          ml: 2,
          height: "8vh",
        }}
      >
        <Box
          component={"img"}
          src={"/static/logo.png"}
          sx={{
            width: "7%",
            m: 2,
          }}
        />
        <Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Touching lives, Improving Life
        </Typography>
      </Box>
    </Link>
  );
}
