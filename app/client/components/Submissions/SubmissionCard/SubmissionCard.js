import React, { useState, useContext } from "react";
import UserActionMenuContext from 'contexts/UserActionMenuContext';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardHeader,
    CardMedia,
    Grid,
    Hidden,
    IconButton,
    Menu,
    MenuItem,
    Tooltip
} from "@material-ui/core";
import {
    CommentOutlined as CommentOutlinedIcon,
    BookmarkBorderOutlined as BookmarkBorderOutlinedIcon,
    BookmarkOutlined as BookmarkOutlinedIcon,
    MoreHoriz as MoreHorizIcon,
    Report as ReportIcon,
    Share as ShareIcon,
    SwapVerticalCircleOutlined as SwapVerticalCircleOutlinedIcon
} from "@material-ui/icons";

import useStyles from './Styles';

export default function SubmissionListCard(props) {
    const { 
        reportButtonHandler,
        saveButtonHandler,
        submission
    } = props;
    const [, dispatch] = useContext(UserActionMenuContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();

    const selectSaveIcon = () => {
        if (submission.is_favorite) {
            return <BookmarkOutlinedIcon classes={{ root: classes.actionButtonIcon }} />
        }

        return <BookmarkBorderOutlinedIcon classes={{ root: classes.actionButtonIcon }} />
    }

    const handleMenuClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleReportClick = () => {
        reportButtonHandler();
        setAnchorEl(null);
    }

    return (
        <Grid
            item xs={12} sm={12} md={12} lg={12}
            className={classes.gridItem}
        >
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        component="iframe"
                        src={submission.medium.embed_url + "?autoplay=1"}
                        allowFullScreen
                        frameBorder={0}
                    />
                    <CardHeader
                        title={submission.title}
                        titleTypographyProps={{ noWrap: true, variant: "h6", classes: { h6: classes.titleText } }}
                        subheader={"by /u/" + submission.author + " - " + submission.created_date_string}
                        subheaderTypographyProps={{ noWrap: true, classes: { body1: classes.subtitleText } }}
                        classes={{ root: classes.cardHeader, content: classes.cardContent }}
                    />
                </CardActionArea>
                <CardActions
                    disableSpacing
                    className={classes.actions}
                >
                    <Button
                        disabled
                        size="small"
                        className={classes.displayButton}
                    >
                        <SwapVerticalCircleOutlinedIcon classes={{ root: classes.actionButtonIcon }} />
                        {submission.score}
                    </Button>
                    <Button
                        disabled
                        size="small"
                        className={classes.displayButton}
                    >
                        <CommentOutlinedIcon classes={{ root: classes.actionButtonIcon }} />
                        {submission.comment_count}
                    </Button>
                    <div className={classes.cardActionIcons}>
                        <Tooltip title="Share" placement="bottom">
                            <Button
                                aria-label="share"
                                size="small"
                                className={classes.actionButton}
                            >
                                <ShareIcon classes={{ root: classes.actionButtonIcon }} />
                                <Hidden xsDown>
                                    Share
                            </Hidden>
                            </Button>
                        </Tooltip>
                        <Tooltip title="Favorite" placement="bottom">
                            <Button
                                aria-label="add to favorites"
                                size="small"
                                className={classes.actionButton}
                                onClick={saveButtonHandler}
                            >
                                {selectSaveIcon()}
                                <Hidden xsDown>
                                    Save
                            </Hidden>
                            </Button>
                        </Tooltip>
                        <IconButton
                            aria-label="more actions"
                            size="small"
                            className={classes.actionButton}
                            onClick={handleMenuClick}>
                            <MoreHorizIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem 
                                onClick={handleReportClick}
                                className={classes.actionButton}
                            >
                                <ReportIcon classes={{ root: classes.actionButtonIcon }} />
                                Report
                            </MenuItem>
                        </Menu>
                    </div>
                </CardActions>
            </Card>
        </Grid>
    );
}
