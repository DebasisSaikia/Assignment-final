import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 1,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textTransform: "capitalize",
    // alignItems: "center",
    background: "#fff",
    overflowX: "hidden",
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "row-reverse",
    },
  },
}));
