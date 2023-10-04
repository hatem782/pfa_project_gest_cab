import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    position: "relative",
    padding: "400px 256px 0px 256px",

    "& .section": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      "& .content": {
        width: "50%",
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

      "&  .steps": {
        width: "50%",
      },
    },
  },

  step: {
    display: "flex",
    width: "100%",
    padding: "0px 0px 0px 100px",

    "& .num-part": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      flexDirection: "column",
      "& .num": {
        width: "60px",
        height: "60px",
        color: "white",
        fontSize: "24px",
        fontWeight: "600",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "500px",
        marginBottom: "12px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },

      "& .traject": {
        display: "block",
        width: "4px",
        backgroundColor: "#BCBCBC",
        borderRadius: "500px",
        flexGrow: "1",
      },
    },
    "& .txt-part": {
      padding: "0px 0px 0px 30px",
      "& h3": {
        color: "#3B3A3A",
        fontSize: "24px",
        margin: "35px 0px 0px 0px",
      },
      "& p": {
        color: "#8F8F8F",
        fontSize: "20px",
        fontWeight: "500",
        padding: "0px 0px 0px 0px",
      },
    },
  },
}));
