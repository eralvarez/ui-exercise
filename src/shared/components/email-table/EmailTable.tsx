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
    Delete as DeleteIcon,
} from '@material-ui/icons';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import { ChangeEvent, useState } from 'react';

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
        selectedEmailRow: {
            backgroundColor: '#c2dbff',
        },
    }),
);

interface IProps {
    emails: IEmail[]
}

const EmailTable = (props: IProps) => {
    const classes = useStyles();
    let _emails = props.emails.map((email) => {
        const date = new Date(email.date);
        return {
            ...email,
            checked: false,
            dateString: date.toDateString(),
        };
    });
    const [ emails, setEmails ] = useState<IEmail[]>(_emails)
    const [ emailIsSelected, setEmailIsSelected ] = useState<boolean>(false);

    const removeHtmlTags = (html: string) => {
        const htmlRegex = new RegExp(/<.+?>/, 'g');
        const cleanHtml = html.replace(htmlRegex, '');
        return cleanHtml;
    };

    const handleSelectAllEmails = (_event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setEmailIsSelected(checked);
        setEmails(emails.map((email) => ({...email, checked})));
    }

    const handleCheckEmail = (checked: boolean, emailIndex: number) => {
        let _emails = [...emails];
        _emails[emailIndex].checked = checked;
        setEmails(_emails);

        if (checked) {
            setEmailIsSelected(true);
        } else {
            const checkedEmails = emails.find((email) => email.checked === true);
            if (checkedEmails) {
                setEmailIsSelected(true);
            } else {
                setEmailIsSelected(false);
            }
        }
    }

    const handleDeleteEmailIcon = () => {
        let _emails = [...emails].filter((email) => !email.checked);
        setEmails(_emails);
        setEmailIsSelected(false);
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.emailTable} aria-label="emails">
                <TableBody>
                    <TableRow key={'row.name'}>
                        <TableCell component="th" scope="row">
                            <Checkbox
                                className={classes.checkbox}
                                color="primary"
                                onChange={handleSelectAllEmails}
                            />
                            {(emailIsSelected) ? (
                                <IconButton
                                    className={classes.toolbarIcon}
                                    aria-label=""
                                    edge="start"
                                    onClick={handleDeleteEmailIcon}>
                                    <DeleteIcon />
                                </IconButton>
                            ) : (
                                <>
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
                                </>
                            )}
                            
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

                    {emails.map((email, emailIndex) => (
                        <TableRow className={[classes.emailTableRow, (email.checked) ? classes.selectedEmailRow : ''].join(' ')} key={email.id} data-testid="emailRow">
                            <TableCell component="th" scope="row">
                                <Checkbox
                                    className={classes.checkbox}
                                    color="primary"
                                    checked={email.checked}
                                    onChange={(_event: any, checked: boolean) => handleCheckEmail(checked, emailIndex)}
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
