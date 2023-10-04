import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: "650px",
  },
  main: {
    padding: "30px",
    minWidth: "650px",
    overflowX: "hidden",
    "& h3": {
      color: theme.palette.primary.main,
      fontSize: "24px",
      margin: "0px 0px 20px 0px",
      fontWeight: "600",
    },
    "& h4": {
      fontWeight: "500",
      fontSize: "18px",
      color: theme.palette.primary.main,
      textDecoration: "underline",
      cursor: "pointer",
    },
    "& p": {
      fontSize: "18px",
      margin: "0px 0px -5px 0px",
      fontWeight: "600",
      color: "black",
    },
    "& input": {
      width: "100%",
      margin: "0px !important",
    },
    "& button": {
      fontSize: "18px",
      fontWeight: "600",
      display: "block",
      margin: "auto",
      marginTop: "20px",
      padding: "12px 40px",
    },

    "& .choix": {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      marginTop: "40px",
      marginBottom: "20px",

      "& .option": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        "& .border": {
          border: "solid 6px black",
          padding: "20px",
          borderRadius: "500px",
        },

        "& .icon": {
          fontSize: "70px",
        },

        "& p": {
          margin: "20px 0px 0px 0px",
          textAlign: "center",
          fontSize: "22px",
          color: "black",
        },

        "&:hover": {
          cursor: "pointer",
          "& .border": {
            border: `solid 6px ${theme.palette.primary.main}`,
            backgroundColor: theme.palette.primary.main,
          },

          "& .icon": {
            fontSize: "70px",
            color: "white",
          },

          "& p": {
            color: theme.palette.primary.main,
          },
        },
      },
    },
  },
}));
