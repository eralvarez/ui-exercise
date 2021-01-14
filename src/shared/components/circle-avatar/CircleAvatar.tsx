import {makeStyles, createStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
        },
        avatar: {
            backgroundColor: '#0172ff',
            width: '32px',
            borderRadius: '16px',
            height: '32px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
        },
    }),
);

interface IProps {
    firstName: string;
}

const CircleAvatar = (props: IProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.avatar}>
                <span>{props.firstName[0]}</span>
            </div>
        </div>
    );
};

export default CircleAvatar;
