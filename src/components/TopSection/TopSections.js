import React from "react";
import Grid from "@material-ui/core/Grid";
import { Datas } from "./datas";
import TopSection from './TopSection/TopSection'


const TopSections = () => {
  return (
    <main>
      <h2>MOST FREQUENTLY ORDERED</h2>

      <Grid container justify="center" spacing={2}>
        {Datas.map((data) => (
          <Grid item key={data.id} xs={12} sm={6} md={4} lg={3}>
            <TopSection data={data} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default TopSections;
