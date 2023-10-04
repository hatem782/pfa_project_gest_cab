import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    position: "relative",
    padding: "100px 220px 120px 220px",

    "& h1": {
      fontSize: "56px",
      textAlign: "center",
      color: "#1E1C24",
      fontWeight: "700",
      marginBottom: "40px",
    },

    "& .txt2": {
      fontSize: "30px",
      fontWeight: "400",
      lineHeight: "1.8",
      textAlign: "center",
      padding: "0px 40px",
    },

    "& .carossel": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "60px 0px",

      "& h4": {
        fontSize: "60px",
        color: "#4791FF",
        cursor: "pointer",
        userSelect: "none",
      },
      "& h4.left": {
        transform: "translateX(100px)",
      },
      "& h4.right": {
        transform: "translateX(-100px)",
      },
    },

    "& .carossel-content": {
      width: "100%",
      height: "600px",

      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "column",

      padding: "83px 230px",
      boxShadow: "0px 0px 30px #00000033",
      "& img": {
        display: "block",
        margin: "auto",
        height: "150px",
      },
      "& p": {
        textAlign: "center",
        fontSize: "36px",
      },
      "& .puces": {
        display: "flex",
        justifyContent: "center",
        "& .puce": {
          display: "block",
          height: "16px",
          width: "16px",
          margin: "3px",
          border: "solid 2px #4791FF",
          borderRadius: "500px",
          cursor: "pointer",
        },
        "& .selected": {
          backgroundColor: "#4791FF",
        },
      },
    },

    "& .download": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      "& img": {
        margin: "50px 0px",
        width: "250px",
        cursor: "pointer",
      },
    },
    "& .link": {
      color: theme.palette.primary.main,
      textDecoration: "underline",
      fontWeight: "600",
      fontSize: "24px",
      textAlign: "center",
      cursor: "pointer",
    },
  },
}));
