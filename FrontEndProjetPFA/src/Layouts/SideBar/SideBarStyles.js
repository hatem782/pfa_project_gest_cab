import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  siderbar: {
    width: 220,
    backgroundColor: "white",
    height: "100vh",
    padding: "40px 20px",
    boxShadow: "5px 21px 40px #00000022",
    position: "fixed",
    zIndex: "99",

    display: "flex",
    flexDirection: "column",
    transition: "all 0.1s",

    [theme.breakpoints.down("xl")]: {
      width: "160px",
      padding: "20px 20px",
    },
  },

  full_logo: {
    width: "60%",
    display: "block",
    margin: "0px auto 100px auto",

    [theme.breakpoints.down("xl")]: {
      margin: "0px auto 40px auto",
    },
  },

  navlinks: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& a": {
      width: "100%",
    },

    "& .icon_link": {
      width: "100%",

      display: "flex",
      alignItems: "center",
      transition: "all 0.1s",
      padding: "0px 0px 30px 0px",

      [theme.breakpoints.down("xl")]: {
        padding: "0px 0px 20px 0px",
      },

      "& .icon_rt": {
        width: "18px",
        margin: "0px 10px 0px 0px",
        display: "block",
        color: "#A2A2A2",
      },

      "& .link_text": {
        fontSize: "18px",
        color: "#A2A2A2",

        [theme.breakpoints.down("xl")]: {
          fontSize: "13px",
        },
      },
      "&:hover": {
        "& .icon_rt": {
          color: theme.palette.primary.main,
          // filter:
          //   "invert(47%) sepia(71%) saturate(438%) hue-rotate(100deg) brightness(110%) contrast(100%)",
        },
        "& .link_text": {
          color: theme.palette.primary.main,
        },
      },
    },

    "& hr": {
      display: "block",
      height: "1px",
      width: "100%",
      backgroundColor: "#A2A2A299",
      marginTop: "40px",
      marginBottom: "40px",
      outline: "none",
      border: "none",

      [theme.breakpoints.down("xl")]: {
        marginTop: "20px",
        marginBottom: "40px",
      },
    },
  },
}));
