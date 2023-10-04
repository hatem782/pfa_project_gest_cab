import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    position: "relative",
  },

  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    //marginBottom: "100px",

    "& img": {
      width: "43%",
    },
    "& .content": {
      width: "57%",
      padding: "0px 150px",
      "& h2": {
        margin: "0px",
        fontSize: "42px",
      },

      "& p": {
        color: "#8F8F8F",
        fontSize: "24px",
        fontWeight: "500",
        lineHeight: "1.8",
      },

      "& h3": {
        fontSize: "24px",
        color: theme.palette.primary.main,
      },
    },
  },
}));
