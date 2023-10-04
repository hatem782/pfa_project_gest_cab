import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    padding: "60px 0px",
    height: "100%",
    width: "100%",

    "& h4": {
      fontSize: "20px",
      margin: "0px 0px 5px 0px",
      fontWeight: "500",
      fontFamily: "myriad",

      [theme.breakpoints.down("xl")]: {
        fontSize: "16px",
      },
    },

    "& .paper": {
      minHeight: "830px",
      width: "100%",
      boxShadow: "0px 0px 30px #00000033",
      borderRadius: "16px",
      display: "flex",

      "& .params , .content": {
        height: "100%",
        padding: "60px",
      },

      "& .params": {
        width: "30%",

        "& .grey-p": {
          color: "#A2A2A2",
          fontSize: "16px",
          fontWeight: "700",
          margin: "0px",

          [theme.breakpoints.down("xl")]: {
            fontSize: "12px",
            fontWeight: "600",
          },
        },

        "& .list": {
          listStyle: "none",
          padding: "0px 0px 0px 0px",
        },

        "& .list li": {
          width: "250px",
          padding: "13px 25px",
          margin: "15px 0px",

          fontSize: "18px",
          fontWeight: "600",
          borderRadius: "5px",
          transition: "all 0.2s",
          cursor: "pointer",

          [theme.breakpoints.down("xl")]: {
            fontSize: "14px",
            padding: "12px 18px",
          },
        },
        "& .list li.selected": {
          backgroundColor: "#17e6c833",
          color: theme.palette.primary.main,
        },
      },
      "& .content": {
        width: "70%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      },
    },
  },

  header: {
    "& .container": {
      display: "flex",
      alignItems: "center",
      margin: "20px 0px",

      "& .img": {
        width: "150px",
        height: "150px",
        borderRadius: "500px",
        margin: "0px 20px 0px 0px",
        cursor: "pointer",

        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

        [theme.breakpoints.down("xl")]: {
          width: "110px",
          height: "110px",
        },
      },

      "& .group-buttons": {
        height: "150px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-evenly",

        "& button": {
          width: "100% !important",
          height: "50px !important",
        },

        [theme.breakpoints.down("xl")]: {
          height: "110px",

          "& button": {
            width: "100% !important",
            height: "40px !important",
            fontSize: "14px",
          },
        },
      },
    },
    "& .ID": {
      color: theme.palette.primary.main,
    },
  },

  hint: {
    marginTop: "20px",
    paddingTop: "20px",
    borderTop: "solid 2px #F2F3F7",

    "& .red": {
      color: "red",
      "&:hover": {
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
  },

  editedFieldData: {
    width: "100%",
    "& .text-field-container": {
      display: "flex",
      alignItems: "flex-end",
      width: "100%",

      "& .text-field": {
        width: "60%",
      },

      "& .button": {
        fontSize: "20px",
        backgroundColor: "#FCFCFC",
        border: "solid 2px #95989A66",
        borderRadius: "5px",
        padding: "13px",
        margin: "10px",
        cursor: "pointer",
        "&:hover": {
          border: "solid 2px #95989A",
        },

        [theme.breakpoints.down("xl")]: {
          fontSize: "14px",
          margin: "5px",
          padding: "8.5px",
        },
      },
    },

    "& .opt-field-container": {
      "& .opt-txt": {
        color: "#CECECE",
        fontSize: "16px",
        fontWeight: "700",
        margin: "0px",
        [theme.breakpoints.down("xl")]: {
          fontSize: "14px",
          fontWeight: "600",
        },
      },
    },
  },

  signature: {
    "& img": {
      width: "300px",
      height: "300px",
    },

    "& button": {
      padding: "10px 20px !important",
    },
  },

  inputs: {
    padding: "10px 0px",
    display: "flex",
    alignItems: "center",
    //justifyContent: "space-between",

    "& .match": {
      border: `solid 3px ${theme.palette.primary.main} !important`,
    },

    "& .not-match": {
      border: `solid 3px #FF0000 !important`,
    },

    [theme.breakpoints.down("xl")]: {
      padding: "5px 0px",
    },

    "& input": {
      height: "80px",
      width: "80px",
      margin: "0px 10px 0px 0px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "35px",
      textAlign: "center",
      backgroundColor: "#FCFCFC",
      border: "solid 3px #C7E6C2",
      borderRadius: "19px",
      transition: "all 0.1s",
      outline: "none",
      "&:focus": {
        border: `solid 3px ${theme.palette.primary.main}`,
      },

      [theme.breakpoints.down("xl")]: {
        height: "45px",
        width: "45px",
        fontSize: "20px",
        borderRadius: "15px",
        border: "solid 2px #C7E6C2",
        borderRadius: "10px",
        "&:focus": {
          border: `solid 2px ${theme.palette.primary.main}`,
        },
      },
    },
  },
}));
