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

    "& .part1": {
      display: "flex",
      alignItems: "center",
    },

    "& .part2": {
      "& button": {
        padding: "15px 20px !important",
        margin: "0px 0px 0px 20px",
        minWidth: "180px",
        boxShadow: "0px 3px 6px #00000033",
      },
      "& .red-btn": {
        border: ` solid 2px #D32F2F !important`,
        color: "#D32F2F",
        backgroundColor: "transparent !important",
      },
      "& .yello-btn": {
        border: ` solid 2px ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        backgroundColor: "transparent",
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

  foldes: {
    padding: "0px 20px 0px 20px",

    "& .space50": {
      display: "inline-block",
      height: "10px",
      width: "50px",
      //backgroundColor: "red",
    },
    "& .space20": {
      display: "inline-block",
      height: "10px",
      width: "20px",
      //backgroundColor: "red",
    },

    "& table": {
      marginTop: "20px",
    },

    "& tr": {
      borderBottom: "solid 2px #D8EAE6",
    },

    "& td,th": {
      fontWeight: 600,
    },

    "& .folder-name": {
      display: "flex",
      alignItems: "center",
      color: "black !important",

      "& span": { fontSize: "18px" },
      "& img": {
        margin: "0px 10px 0px 0px",
      },
    },
    "& .folder-date , .folder-size": {
      fontSize: "18px",
      color: theme.palette.primary.main,
    },
    "& .buttons-group": {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      padding: "18px 0px",
      "& button": {
        margin: "0px 5px",
      },
      "& .red-btn": {
        backgroundColor: "#f00",
        color: "white",
      },
    },
  },
  menuItems: {
    "& button": {
      width: "100%",
    },
  },
}));
