import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Button from "../footer/Button.js";
import Card from "../footer/Card.js";
import CardBody from "../footer/CardBody.js";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import FooterFaq from "./footer-faq.component";
import TypographyComponent from "../home/typography.component";

import cardImagesStyles from "../../assets/cardImagesStyles";
import footerLogo from "../../assets/Centaur.mp4";

const useStyles = makeStyles((theme) => ({
  ...cardImagesStyles,
  textWhite: {
    "&, & *": {
      color: "#FFF",
    },
  },
}));

export default function CardsImages() {
  const classes = useStyles();
  return (
    <div style={{ margin: 0 }}>
      <Card className={classes.textWhite}>
        <div className={classes.cardImgOverlay}>
          <TypographyComponent component="footer" className={classes.root}>
            <Container className={classes.container}>
              <Grid container spacing={5}>
                <Grid item xs={6} sm={4} md={3}>
                  <FooterFaq />
                </Grid>
              </Grid>
            </Container>
          </TypographyComponent>
        </div>
        <video
          className="videoTag"
          autoPlay
          loop
          muted
          style={{ width: "100%" }}
        >
          <source src={footerLogo} type="video/mp4" />
        </video>
        {/* <img
          className={classes.cardImg}
          data-src="holder.js/100px270/#55595c:#373a3c/text:Card image"
          alt="100%x270"
          style={{ height: "400px", width: "100%", display: "flex" }}
          src={footerImg}
          data-holder-rendered="true"
        /> */}
      </Card>
    </div>
  );
}
