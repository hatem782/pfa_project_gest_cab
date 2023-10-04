import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    padding: "20px 0px 15px 0px",

    "& h4": {
      fontSize: "21px",
      margin: "0px",
      fontFamily: "myriad",
    },
    "& h5": {
      color: "#A2A2A2",
      fontSize: "18px",
      margin: "0px",
      marginTop: "10px",
      fontFamily: "myriad",
    },
  },

  filter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 0px",

    "& .part1": {
      display: "flex",
      alignItems: "center",

      "& .fields": {
        width: "100%",
      },
    },

    "& .part2": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      "& button": {
        padding: "10px 15px !important",
        margin: "0px 0px 0px 10px",
        boxShadow: "0px 3px 6px #00000033",
      },
    },

    "& h4": {
      margin: "0px 10px 0px 0px",
    },

    "& .claned-filter": {
      width: "276px",
      margin: "0px 10px 0px 10px",
    },

    "& .source-filter , .rech-filter": {
      width: "230px",
      margin: "0px 10px 0px 10px",
    },

    "& .rech-filter": {
      width: "230px",
      margin: "0px 10px 0px 10px",
    },
  },

  prestab: {
    padding: "20px 20px",
    "& h3": {
      color: "#646D82",
      padding: "0px",
      fontWeight: "400",
      fontSize: "22px",
      margin: "0px 0px 10px 0px",
      textTransform: "uppercase",
    },
    "& .tab-buttons": {
      display: "flex",
      justifyContent: "flex-end",

      "& .edit, .delete": {
        margin: "0px 10px 0px 0px",
        cursor: "pointer",
      },

      "& .edit": {
        color: theme.palette.primary.main,
      },
      "& .delete": {
        color: theme.palette.error.main,
      },
    },
  },
}));
