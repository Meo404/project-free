import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const drawerWidth = 225;

const useStyles = makeStyles(theme => ({
    list: {
        width: drawerWidth,
    },
    desktopDrawer: {
        width: drawerWidth,
        flexShrink: 0,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    drawerPaper: {
        zIndex: "-1"
    },
    toolbar: theme.mixins.toolbar,
}));

export default function SideDrawer({mobileMenu, mobileMenuHandler}) {
    const classes = useStyles();

    const mobileDrawer = (
        <div className={classes.list} role="presentation">
            <List>
                <ListItem button key="Home">
                    <ListItemIcon><HomeIcon/></ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItem>
                <ListItem button key="Trending">
                    <ListItemIcon><WhatshotIcon/></ListItemIcon>
                    <ListItemText primary="Trending"/>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListSubheader>Popular Subreddits</ListSubheader>
                {['r/leagueoflegends', 'r/dota2', 'r/pokemon', 'r/wow', 'r/destiny2game'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <Drawer
                open={mobileMenu}
                onClose={mobileMenuHandler}>
                {mobileDrawer}
            </Drawer>
            <Drawer className={classes.desktopDrawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}>
                <div className={classes.toolbar}/>
                {mobileDrawer}
            </Drawer>
        </div>
    );
}