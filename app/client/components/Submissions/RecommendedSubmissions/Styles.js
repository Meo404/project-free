import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    moreButton: {
        color: "#FFF",
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up("sm")]: {
            color: "rgba(0, 0, 0, 0.87)",
            backgroundColor: "#e0e0e0"
        },
    },
    moreButtonContainer: {
        textAlign: "center",
        marginTop: 10
    }
}));

export default useStyles;