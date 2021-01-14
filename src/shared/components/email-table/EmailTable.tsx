import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    Checkbox,
} from '@material-ui/core';
import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    ArrowDropDown as ArrowDropDownIcon,
    StarBorder as StarBorderIcon,
    Refresh as RefreshIcon,
    MoreVert as MoreVertIcon,
} from '@material-ui/icons';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';

import {IEmail} from '@shared/services/email/email.service';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        checkbox: {
            padding: '0px',
        },
        starIcon: {
            padding: '0px',
            marginLeft: '0px',
        },
        toolbarIcon: {
            padding: '0px',
            margin: '0px',
        },
        toolbarChevronIcon: {
            padding: '0px',
            margin: '0px 8px',
        },
        emailBodyContainer: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
        emailSubject: {
            fontWeight: 'bold',
            marginRight: '10px',
        },
        emailTableRow: {
            cursor: 'pointer',
        },
        emailTable: {
            tableLayout: 'fixed',
        },
        hideOnSM: {
            [theme.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }),
);

interface IProps {
    emails: IEmail[]
}

const EmailTable = (props: IProps) => {
    const classes = useStyles();
    const emails = props.emails.map((email) => {
        const date = new Date(email.date);
        return {
            ...email,
            checked: false,
            dateString: date.toDateString(),
        };
    });

    const removeHtmlTags = (html: string) => {
        const htmlRegex = new RegExp(/<.+?>/, 'g');
        const cleanHtml = html.replace(htmlRegex, '');
        return cleanHtml;
    };

    return (
        <TableContainer component={Paper}>
            <Table className={classes.emailTable} aria-label="emails">
                <TableBody>
                    <TableRow key={'row.name'}>
                        <TableCell component="th" scope="row">
                            <Checkbox
                                className={classes.checkbox}
                                color="primary"
                            />
                            <IconButton
                                className={classes.toolbarIcon}
                                aria-label=""
                                edge="start">
                                <ArrowDropDownIcon />
                            </IconButton>
                            <IconButton
                                className={classes.toolbarIcon}
                                aria-label=""
                                edge="start">
                                <RefreshIcon />
                            </IconButton>
                            <IconButton
                                className={classes.toolbarIcon}
                                aria-label=""
                                edge="start">
                                <MoreVertIcon />
                            </IconButton>
                        </TableCell>
                        <TableCell className={classes.hideOnSM} align="right"></TableCell>
                        <TableCell align="right">
                            <span>1-50 of 300</span>
                            <IconButton
                                className={classes.toolbarChevronIcon}
                                aria-label=""
                                edge="start">
                                <ChevronLeftIcon />
                            </IconButton>
                            <IconButton
                                className={classes.toolbarChevronIcon}
                                aria-label=""
                                edge="start">
                                <ChevronRightIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>

                    {emails.map((email) => (
                        <TableRow className={classes.emailTableRow} key={email.id} data-testid="emailRow">
                            <TableCell component="th" scope="row">
                                <Checkbox
                                    className={classes.checkbox}
                                    color="primary"
                                />
                                <IconButton
                                    className={classes.starIcon}
                                    aria-label=""
                                    edge="start">
                                    <StarBorderIcon />
                                </IconButton>
                                {email.sender}
                            </TableCell>
                            <TableCell align="left" className={classes.hideOnSM}>
                                <span className={classes.emailSubject}>{email.subject}</span>
                                <div className={classes.emailBodyContainer} >{removeHtmlTags(email.body)}</div>
                            </TableCell>
                            <TableCell align="right">{email.dateString}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EmailTable;
