import { Box, Typography } from "@mui/material";

export default function LogoBox() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        ml: 2,
      }}
    >
      <Box
        component={"img"}
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Procter_%26_Gamble_logo.svg/640px-Procter_%26_Gamble_logo.svg.png"
        }
        sx={{
          width: "7%",
          m: 1,
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
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Touching lives, Improving Life
      </Typography>
    </Box>
  );
}
