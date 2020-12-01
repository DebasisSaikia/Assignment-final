import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";

// custom MUI styles
import useStyles from "./styles";

const TopSection = ({ data }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={data.image}
          title={data.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="subtitle1" gutterBottom>
              {data.name}
            </Typography>
          </div>

          <Typography variant="body2" color="textSecondary">
            {data.street}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <Typography variant="h6" className={classes.category}>
            RE-ORDER
          </Typography>
        </CardActions>
      </Card>
    </>
  );
};

export default TopSection;
