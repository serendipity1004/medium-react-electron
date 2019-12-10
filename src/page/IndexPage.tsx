import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
}));

export const IndexPage: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Typography variant="h1">메인 페이지입니다!</Typography>
        </Grid>
    )
};