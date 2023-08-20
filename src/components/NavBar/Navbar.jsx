import { AppBar, Box, MenuItem, styled, Typography } from "@mui/material";
import LogoBox from "./LogoBox/LogoBox";
import Search from "./Search/Search";
import { Link } from "react-router-dom";

const StyledNavBarContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  p: 1,
  width: "95%",
}));

export default function Navbar() {
  return (
    <AppBar position={"static"} color={"primary"}>
      <StyledNavBarContainer>
        <LogoBox />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Search />
          <MenuItem>
            <Typography textAlign="center">About</Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="center">Contact</Typography>
          </MenuItem>
        </Box>
      </StyledNavBarContainer>
    </AppBar>
  );
}
