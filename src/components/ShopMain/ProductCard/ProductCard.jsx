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
      }}
    >
      <CardMedia
        sx={{ height: 140, objectFit: "fill" }}
        image="https://as1.ftcdn.net/v2/jpg/05/99/62/60/1000_F_599626096_iHHefX8AgWzijastvgNUETQSZ7vyG3nm.jpg"
        title="green iguana"
        component={"img"}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textTransform: "capitalize" }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
