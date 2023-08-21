import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function ProductCard({ name }) {
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
        image="/static/no_item.png"
        title="green iguana"
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
          {name}
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
