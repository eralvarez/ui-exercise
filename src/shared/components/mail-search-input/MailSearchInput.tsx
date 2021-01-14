import {
    IconButton,
    InputAdornment,
    FilledInput,
} from '@material-ui/core';
import {
    Search as SearchIcon,
    ArrowDropDown as ArrowDropDownIcon,
} from '@material-ui/icons';
import {makeStyles, createStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(() =>
    createStyles({
        root: {
            'display': 'flex',
            '& .MuiFilledInput-root': {
                borderRadius: '8px',
                backgroundColor: '#f1f3f4',
            },
            '& .MuiFilledInput-input': {
                padding: '14px 6px',
            },
        },
        filledInput: {
            width: '722px',
        },
    }),
);

const MailSearchInput = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FilledInput
                id="filled-adornment-password"
                type="text"
                disableUnderline={true}
                placeholder="Search mail"
                className={classes.filledInput}
                startAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label=""
                            edge="start"
                        >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label=""
                            edge="start"
                        >
                            <ArrowDropDownIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </div>
    );
};

export default MailSearchInput;
