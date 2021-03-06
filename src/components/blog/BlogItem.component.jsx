import React from "react";
import Card from "../about/Card";
import CardBody from "../about/CardBody";
import CardHeader from "../about/CardHeader";
import Button from "../about/Button";
import CardFooter from "../about/CardFooter";
import AccessTime from "@material-ui/icons/AccessTime";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/dashboardStyle";

const useStyles = makeStyles(styles);

function BlogItemComponent() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader>
        <img
          className={classes.cardImgTop}
          data-src="holder.js/100px180/"
          alt="100%x180"
          style={{ height: "180px", width: "100%", display: "block" }}
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          data-holder-rendered="true"
        />
      </CardHeader>
      <CardBody>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Button color="primary">Read more</Button>
        <hr />
      </CardBody>
      <CardFooter chart>
        <div className={classes.stats}>
          <AccessTime /> campaign sent 2 days ago
        </div>
      </CardFooter>
    </Card>
  );
}

export default BlogItemComponent;
