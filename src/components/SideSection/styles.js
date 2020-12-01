import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    "& checked": {
      color: "orangered",
    },
    width: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    background: "#fff",
  },

  heading: {
    fontWeight: 600,
  },
  slider: {
    color: "orangered",
  },
}));
