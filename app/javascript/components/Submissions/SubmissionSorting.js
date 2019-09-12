import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function SubmissionSorting(props) {
    const classes = useStyles();

    return (
        <FormControl className={classes.formControl}>
            <Select
                value={props.sortMethod}
                onChange={props.handleSortingChange}
                name="sorting"
                className={classes.selectEmpty}
            >
                <MenuItem value={"hot"}>HOT</MenuItem>
                <MenuItem value={"top_day"}>TOP - Daily</MenuItem>
                <MenuItem value={"top_week"}>TOP - Weekly</MenuItem>
                <MenuItem value={"top_month"}>TOP - Monthly</MenuItem>
                <MenuItem value={"top_year"}>TOP - Yearly</MenuItem>
                <MenuItem value={"top_all"}>TOP - All</MenuItem>
            </Select>
            <FormHelperText>Sorting</FormHelperText>
        </FormControl>
    )
}

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        float: "right"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));