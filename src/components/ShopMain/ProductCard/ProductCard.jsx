import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import fetchImages from "../../../react_query_fetches/fetchImages";

export default function ProductCard({ product }) {
  const results = useQuery(["productImages", product.id], fetchImages);

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        height: 420,
        pb: "2%",
      }}
    >
      <CardMedia
        sx={{ flex: 1, objectFit: "fill", height: "60%" }}
        image={
          results.isSuccess
            ? results.data.data[0].url_standard
            : "https://static.thenounproject.com/png/4440881-200.png"
        }
        title={`${product.name} image`}
        component={"img"}
      />
      <CardContent
        sx={{
          height: "10%",
          pb: 2,
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            textTransform: "capitalize",
            textOverflow: "ellipsis",
            fontSize: { xs: 15, md: 18 },
            mb: 2,
            textAlign: "left",
          }}
        >
          {product.name}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          height: "10%",
        }}
      >
        <Button
          size="big"
          variant={"contained"}
          onClick={() => {
            // eslint-disable-next-line no-undef
            ShoppableCart({ upc: `${product.upc}`, variation: false });
          }}
          sx={{
            flex: 1,
            mt: 2,
          }}
        >
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}
