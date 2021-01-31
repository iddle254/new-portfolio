import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TypographyComponent from "./typography.component";

const styles = (theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: "flex",
    position: "relative",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 90,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
  },
});

function ServicesComponent(props) {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="../../assets/fruits_pattern_v2.ai"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://images.unsplash.com/photo-1539278670307-a69d04dc8a75?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYnNpdGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="suitcase"
              />
              <TypographyComponent variant="h4" className={classes.title}>
                Stylish websites
              </TypographyComponent>
              <TypographyComponent variant="h5" className={classes.title}>
                What our clients have come to expect from us
              </TypographyComponent>
              <TypographyComponent variant="h6">
                Responsive websites, Classy designs and occasional hugs 🤭
              </TypographyComponent>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/themes/onepirate/productValues2.svg"
                alt="graph"
              />
              <TypographyComponent variant="h4" className={classes.title}>
                Cool apps
              </TypographyComponent>
              <TypographyComponent variant="h5" className={classes.title}>
                Why us?
              </TypographyComponent>
              <TypographyComponent variant="h6">
                We have perfected the art of crafting functional cross-platform
                applications for both android and IOS platforms
              </TypographyComponent>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/themes/onepirate/productValues3.svg"
                alt="clock"
              />
              <TypographyComponent variant="h4" className={classes.title}>
                Search Engine Optimization
              </TypographyComponent>
              <TypographyComponent variant="h5" className={classes.title}>
                Is it really important?
              </TypographyComponent>
              <TypographyComponent variant="h6">
                Let us improve your site's ranking for better visibility by
                potential customers
              </TypographyComponent>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
ServicesComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ServicesComponent);
