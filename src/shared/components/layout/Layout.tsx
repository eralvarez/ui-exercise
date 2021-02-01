import React, {ReactNode} from 'react';
import {
    AppBar,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from '@material-ui/core';
import {
    Menu as MenuIcon,
    HelpOutline as HelpOutlineIcon,
    Settings as SettingsIcon,
    Apps as AppsIcon,
    Label as LabelIcon,
} from '@material-ui/icons';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';

import MailSearchInput from '@shared/components/mail-search-input/MailSearchInput';
import CircleAvatar from '@shared/components/circle-avatar/CircleAvatar';
import {IEmailTag} from '@shared/services/email/email.interface';


const drawerWidth = 256;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: 'white',
            boxShadow: 'none',
            borderBottomStyle: 'solid',
            borderBottomColor: '#eceff1',
            borderBottomWidth: '1px',
            color: '#5f6368',
        },
        toolbar: {
            padding: '8px',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            [theme.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerContainer: {
            overflow: 'auto',
        },
        content: {
            flexGrow: 1,
            padding: '0px',
        },
        logoContainer: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '16px',
            paddingRight: '16px',
            width: '248px',
            [theme.breakpoints.down('sm')]: {
                flexGrow: 1,
            },
        },
        mailSearchInputContainer: {
            flexGrow: 1,
            [theme.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
        tagName: {
            textTransform: 'capitalize',
        },
        appbarButtonContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
        selectedSidebarItem: {
            backgroundColor: '#fce8e6',
            color: '#d93025',
            '&:hover': {
                backgroundColor: '#fce8e6',
            }
        },
        selectedSidebarItemIcon: {
            color: '#d93025',
        }
    }),
);

interface IProps {
    children?: ReactNode,
    emailTags: IEmailTag,
}

const Layout = (props: IProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.logoContainer}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start">
                            <MenuIcon />
                        </IconButton>
                        <img
                            src="/logo.png"
                            alt="App logo"
                            width={109}
                            height={40}
                        />
                    </div>
                    <div className={classes.mailSearchInputContainer}>
                        <MailSearchInput></MailSearchInput>
                    </div>
                    <div className={classes.appbarButtonContainer}>
                        <IconButton
                            color="inherit"
                            aria-label=""
                            edge="start">
                            <HelpOutlineIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label=""
                            edge="start">
                            <SettingsIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label=""
                            edge="start">
                            <AppsIcon />
                        </IconButton>
                    </div>
                    <div>
                        <CircleAvatar firstName="Erick"></CircleAvatar>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem button className={ classes.selectedSidebarItem }>
                            <ListItemIcon><LabelIcon className={classes.selectedSidebarItemIcon}/></ListItemIcon>
                            <ListItemText className={classes.tagName} primary={`All (9)`} />
                        </ListItem>
                        {Object.keys(props.emailTags).map((tagName, tagNameIndex) => (
                            <ListItem button key={tagNameIndex}>
                                <ListItemIcon><LabelIcon /></ListItemIcon>
                                <ListItemText className={classes.tagName} primary={`${tagName} (${props.emailTags[tagName]})`} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                {props.children}
            </main>
        </div>
    );
};

export default Layout;
