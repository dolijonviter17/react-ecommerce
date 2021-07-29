import { Grid, GridListTileBar } from '@material-ui/core';
import React from 'react';
import Product from './Product';



const Products = ({ products, onAddToCart }) => {
    return (
        <main>
            <Grid container justify="center" style={{ marginTop: "5rem" }} spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )

}

export default Products;