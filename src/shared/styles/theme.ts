import {
    createMuiTheme,
} from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
    },
    typography: {
        fontFamily: [
            'sans-serif',
            'Arial',
        ].join(','),
    },
    props: {
        MuiButtonBase: {
            disableRipple: true,
        },
        MuiAppBar: {
        },
    },
});

export {
    theme,
};
