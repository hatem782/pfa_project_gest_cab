import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    position: "relative",
    padding: "90px 120px",

    "& .title": {
      fontSize: "18px",
      fontWeight: "500",
    },

    "& .part1": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",

      "& .grid1": {},

      "& .grid2": {
        width: "30%",
      },

      "& p": {
        fontSize: "18px",
        fontWeight: "400",
      },

      "& .rx": {
        margin: "0px 30px 0px 0px",
        height: "30px",
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
          border: "solid 3px #DBDBDB",
          color: "white",
          "&::placeholder": {
            color: "#DBDBDB",
          },
        },

        "& button": {
          height: "100%",
          padding: "15px 20px",
          margin: "14px 0px",
        },
      },
    },

    "& .part2": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      "& img": {
        height: "55px",
      },
    },
  },
}));
