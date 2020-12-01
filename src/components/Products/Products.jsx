import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";
import products from "./products.json";

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
      
    </main>
  );
};

export default Products;
