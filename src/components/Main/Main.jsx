import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";
import { ExpenseTrackerContext } from "../../context/context";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Made by Zaki" />
      <CardContent>
        <Typography variant="h5" align="center">
          Total Balance : ${balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{
            lineHeight: "1.5em",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Try saying add income/expense for "x" dollars in category "y" for date
          "z"{" "}
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.CardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
