import { Box, Grid, styled } from "@mui/material";
import ProductCard from "./ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import fetchProducts from "../../react_query_fetches/fetchProducts";

export default function ShopMain() {
  const results = useQuery(["productList", 1, 40], fetchProducts);

  if (results.isLoading) {
    return (
      <div
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }

  if (results.isError) {
    return (
      <div
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1>Error...</h1>
      </div>
    );
  }

  const data = results.data.data;
  console.log(data);

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
      {data.map((product, index) => (
        <Grid
          item
          xs={4}
          md={3}
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
