import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    position: "absolute",
    padding: "40px 92px",
    zIndex: "999",

    "& .navbar": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",

      "& .routes": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& p": {
          margin: "0px 10px",
          fontSize: "18px",
          fontWeight: "600",
          color: "white",
          cursor: "pointer",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },

      "& .button-group": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& button": {
          width: "180px",
          padding: "12px 0px",
          textAlign: "center",
          margin: "0px 0px 0px 10px",
          border: `solid 3px ${theme.palette.primary.main}`,
        },
        "& .outlined": {
          backgroundColor: "transparent !important",
          color: theme.palette.primary.main,
        },
      },
    },
  },
}));
