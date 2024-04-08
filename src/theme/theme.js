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
        }
    }
});

export default theme;