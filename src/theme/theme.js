import { createTheme } from "@material-ui/core";

const theme = createTheme({
    palette : {
        primary: {
            light: "#8df54f",
            main: "#56c111",
            dark: "#0c9000",
            contrastText: "#FFFFFF"
        },
        secondary: {
            main: '#ECAA43',
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff'
        }

    }
});

export default theme;