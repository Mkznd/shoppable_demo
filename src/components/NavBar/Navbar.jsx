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

const StyledMenuButtonLink = styled(Link)(({ theme }) => ({
  color: "#fff",
  textDecoration: "none",
  m: 2,
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
          <StyledMenuButtonLink to={"/About"}>
            <MenuItem>
              <Typography variant="h6" textAlign="center">
                About
              </Typography>
            </MenuItem>
          </StyledMenuButtonLink>

          <StyledMenuButtonLink to={"/Contact"}>
            <MenuItem>
              <Typography variant="h6" textAlign="center">
                Contact
              </Typography>
            </MenuItem>
          </StyledMenuButtonLink>
        </Box>
      </StyledNavBarContainer>
    </AppBar>
  );
}
