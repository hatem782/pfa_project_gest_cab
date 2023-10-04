import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    padding: "0px 90px 100px 90px",
    "& h3": {
      textAlign: "center",
      fontSize: "40px",
      color: "#1E1C24",
      fontWeight: "600",
    },

    "& .clients": {
      display: "flex",
      justifyContent: "space-between",
    },
  },

  client: {
    width: "30%",
    boxShadow: "0px 0px 20px #1F485D22",
    padding: "35px 40px ",
    borderBottom: `solid 5px ${theme.palette.primary.main} `,
    "& p": {
      color: "#B1AAAA",
      fontSize: "20px",
      fontWeight: "500",
      padding: "0px",
    },

    "& .person": {
      marginTop: "50px",
      display: "flex",
      alignItems: "center",

      "& img": {
        height: "80px",
        width: "80px",
        borderRadius: "500px",
      },

      "& .info": {
        padding: "0px 0px 0px 10px",
        "& h4": {
          margin: "0px",
          fontSize: "21px",
        },
        "& p": {
          margin: "0px",
          color: "#1E1C24",
          fontSize: "18px",
          fontWeight: "400",
        },
      },
    },
  },
}));
