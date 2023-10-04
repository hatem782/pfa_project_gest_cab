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

    "& .offres": {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0px 50px",
    },
  },
}));
