import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import { CgSquare } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";


// custom styles
import useStyles from "./styles";

const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5"></Typography>
          </div>
          <Typography variant="body2" color="textSecondary">
            <span style={{ color: "orangered" }}>Rs 199/- </span>{" "}
            {product.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <Button
            startIcon={<AiFillStar />}
            variant="contained"
            size="small"
            color={product.rating <= 2 ? "secondary" : "primary"}
          >
            {product.rating}
          </Button>

          <IconButton aria-label="Category" className={classes.category}>
            <CgSquare />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
