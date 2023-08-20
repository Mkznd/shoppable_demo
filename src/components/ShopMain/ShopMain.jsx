import { Box, Grid, styled } from "@mui/material";
import ProductCard from "./ProductCard/ProductCard";

const LizardNames = [
  "mark",
  "elon",
  "bill",
  "jeff",
  "warren",
  "larry",
  "sergey",
];

export default function ShopMain() {
  return (
    <Grid
      container
      spacing={2}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{
        maxWidth: 1560,
        background: "#ffffff",
        mx: "auto",
        my: 0,
        p: 0,
      }}
    >
      {LizardNames.map((name, index) => (
        <Grid
          item
          xs={4}
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ProductCard name={name} />
        </Grid>
      ))}
    </Grid>
  );
}
