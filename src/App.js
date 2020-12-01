import React from "react";
import Products from "./components/Products/Products.jsx";
import {
  Container,
  Grow,
  Grid,
  Chip,
  Paper,
} from "@material-ui/core";

import TopSections from "./components/TopSection/TopSections";
import SideSection from "./components/SideSection/SideSection.js";

// Mui Theming
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
     
        <TopSections />
        <Paper className={classes.appBar} position="static">
          <div>
            <Chip className={classes.chip} label="5+ratings" />
            <Chip className={classes.chip} color="default" label="0-5kms" />
            <Chip className={classes.chip} label="Veg" />
            <Chip className={classes.chip} label="Non-Veg" />
          </div>
        </Paper>
        <Grow in>
          <Grid
            className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={4}>
            {/* checkboxSections */}
              <SideSection />
            </Grid>
            <Grid item xs={12} sm={7}>
            {/* products section */}
              <Products />
            </Grid>
          </Grid>
        </Grow>
      </Container>
    </>
  );
}

export default App;
