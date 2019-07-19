import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Products extends Component {
  state = {
    products: []
  };

  //fetching the json data
  componentDidMount() {
    fetch("https://us-central1-appsero.cloudfunctions.net/sourov-test-api")
      .then(res => res.json())
      .then(products => {
        this.setState({ products });
        console.log(products);
      });
  }

  render() {
    return (
      <div>
        <div className="root">
          <Grid container spacing={3}>
            {this.state.products.map(product => {
              return (
                <Grid item xs={4}>
                  <Paper className="paper">
                    <Card className="card">
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="140"
                          image={product.image}
                          title="Conon EOS 77D"
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            align="center"
                          >
                            {product.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            align="center"
                          >
                            Price: {product.price}$
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Share
                        </Button>
                        <Button size="small" color="primary">
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Products;