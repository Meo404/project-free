import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { activeNav } from "utils/navigationHelper";
import {
    Apps as AppsIcon,
    Home as HomeIcon,
    Whatshot as WhatshotIcon
} from "@material-ui/icons";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";

import useStyles from './Styles';

export default function SidebarContent({ closeDrawer }) {
    const classes = useStyles();
    const currentPath = useLocation().pathname;

    return (
        <List>
            <NavLink
                className={classes.navLink}
                onClick={closeDrawer}
                to="/"
            >
                <ListItem
                    button
                    key="Home"
                    className={activeNav("/", currentPath) ? classes.activeNav : ""}
                >
                    <ListItemIcon>
                        <HomeIcon className={activeNav("/", currentPath) ? classes.activeNavIcon : ""} />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
            </NavLink>
            <NavLink
                className={classes.navLink}
                onClick={closeDrawer}
                to="/trending"
            >
                <ListItem 
                    button 
                    key="Trending"
                    className={activeNav("/trending", currentPath) ? classes.activeNav : ""}>
                    <ListItemIcon>
                        <WhatshotIcon className={activeNav("/trending", currentPath) ? classes.activeNavIcon : ""} />
                    </ListItemIcon>
                    <ListItemText primary="Trending" />
                </ListItem>
            </NavLink>
            <NavLink
                className={classes.navLink}
                onClick={closeDrawer}
                to="/subreddits"
            >
                <ListItem
                    button
                    key="Subreddits"
                    className={activeNav("/subreddits", currentPath) ? classes.activeNav : ""}
                >
                    <ListItemIcon>
                        <AppsIcon className={activeNav("/subreddits", currentPath) ? classes.activeNavIcon : ""} />
                    </ListItemIcon>
                    <ListItemText primary="Subreddits" />
                </ListItem>
            </NavLink>
        </List>
    );
}
