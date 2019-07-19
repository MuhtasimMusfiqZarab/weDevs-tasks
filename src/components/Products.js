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
import _ from "lodash";

class Products extends Component {
  state = {
    products: [],
    ordered: []
  };

  //fetching the json data
  componentDidMount() {
    fetch("https://us-central1-appsero.cloudfunctions.net/sourov-test-api")
      .then(res => res.json())
      .then(products => {
        this.setState({ products });
        // console.log(products);
      });
  }

  //here is the function for placing the order
  placeOrder = () => {};

  //Here is the function for deleting from the cart
  deleteCart(e, or) {
    this.setState({
      ordered: _.filter(this.state.ordered, order => order.id !== or.id)
    });
  }

  //handling the add to cart click here
  handleClick(e, product) {
    // console.log(product);
    this.setState({
      ordered: [...this.state.ordered, product]
    });
    // console.log(this.state.ordered);
  }

  render() {
    //Here is the total of the ordered products
    let total = 0;
    return (
      <div>
        <div className="root">
          <Grid container spacing={5}>
            {this.state.products.map(product => {
              return (
                <Grid
                  key={product.id}
                  item
                  xs={4}
                  style={{ marginTop: "40px" }}
                >
                  <Paper className="paper">
                    <Card className="card">
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt={product.title}
                          height="140"
                          image={product.image}
                          title={product.title}
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
                        <Button
                          size="medium"
                          color="primary"
                          fullWidth="true"
                          onClick={e => this.handleClick(e, product)}
                        >
                          Add to cart
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>

          {this.state.ordered.length > 0 && (
            <div>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={5}
              >
                <Grid item xs={12} style={{ marginLeft: "450px" }}>
                  <Typography
                    variant="h2"
                    component="h2"
                    style={{ color: "#aaa", margin: "auto" }}
                  >
                    Here are Your Orders
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Typography
                    variant="h5"
                    component="h5"
                    style={{
                      color: "#aaa",
                      marginTop: "20px",
                      marginLeft: "40%"
                    }}
                  >
                    Ordered Products
                  </Typography>
                  {this.state.ordered.map(order => {
                    total = total + order.price;
                    return (
                      <div style={{ marginTop: "20px" }}>
                        <Paper style={{ padding: "20px 20px" }}>
                          *{order.title} costs =======> {order.price}$
                          <Button
                            variant="contained"
                            color="primary"
                            style={{ marginLeft: "10px" }}
                            onClick={e => this.deleteCart(e, order)}
                          >
                            x
                          </Button>
                        </Paper>
                      </div>
                    );
                  })}
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h5"
                    component="h5"
                    style={{
                      color: "#aaa",
                      marginTop: "20px",
                      marginLeft: "40%"
                    }}
                  >
                    Billing Info
                  </Typography>

                  <Paper>
                    <Typography
                      variant="h6"
                      style={{ padding: "20px 20px", marginTop: "20px" }}
                    >
                      The Subtotal amount is : {total}$
                    </Typography>
                  </Paper>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth="true"
                    onClick={this.placeOrder}
                  >
                    Place Order
                  </Button>
                </Grid>
              </Grid>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Products;
