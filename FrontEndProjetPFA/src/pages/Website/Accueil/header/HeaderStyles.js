import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    position: "relative",

    "& .background": {
      width: "100%",
      position: "absolute",
      zIndex: "-1",
    },

    "& .main-content": {
      padding: "180px 92px 0px 92px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      "& .dash ": {
        width: "55%",
      },

      "& .content": {
        width: "45%",

        "& h1": {
          color: "white",
          fontSize: "45px",
          fontWeight: "700",
          margin: "0px",
        },
        "& p": {
          color: "white",
          fontSize: "28px",
          fontWeight: "500",
          lineHeight: "1.8",
          margin: "10px 0px 0px 0px",
        },

        "& .form": {
          width: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",

          "& .edited-input": {
            width: "65%",
            "& label": {
              display: "none",
            },
          },

          "& input": {
            backgroundColor: "transparent !important",
            border: "solid 3px white",
            color: "white",
            "&::placeholder": {
              color: "white",
            },
          },

          "& button": {
            backgroundColor: "white !important",
            color: theme.palette.primary.main,
            height: "100%",
            width: "320px",
            padding: "15px 20px",
            margin: "10px 0px",
            border: "solid 3px white",
            transform: "translateX(60px)",
          },
        },
      },

      "& .dash": {
        "& img": {
          width: "110%",
        },
      },
    },
  },
}));
