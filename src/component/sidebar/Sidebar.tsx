import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import BottomArrow from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import PlusIcon from '@material-ui/icons/ControlPoint';
import history from 'service/history';
import {indexRoutes} from "route";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    drawer: {
        backgroundColor: '#350C35',
        height: '100%',
    },
    whiteText: {
        color: '#FFFFFF'
    },
    whiteIcon: {
        fill: '#FFFFFF'
    },
    greyText: {
        color: '#AEAEAE'
    },
    greyIcon: {
        color: '#AEAEAE'
    },
    categoryHeader: {
        marginTop: 20,
    },
    pageHeader: {
        padding: 20
    },
    bold: {
        fontWeight: 'bold'
    }
}));

export const Sidebar: React.FC = (props) => {
    const classes = useStyles();

    return (
        <List component="a" aria-label="nav-header">
            <ListItem
                button
                onClick={() => {
                    history.push('/');
                }}
            >
                <ListItemText primary={
                    <React.Fragment>
                        <Grid container alignItems="center">
                            <Typography variant="h6" className={classes.whiteText}>
                                FiveMinutesDev
                            </Typography>
                            <BottomArrow className={classes.whiteIcon}/>
                        </Grid>
                        <Typography variant="body2" className={classes.whiteText}>
                            CEO 최지호
                        </Typography>
                    </React.Fragment>
                }>
                </ListItemText>
            </ListItem>
            <ListItem
                button
                dense
                onClick={() => {
                }}
            >
                <ListItemText primary={
                    <Grid container justify="space-between">
                        <Typography variant="body2" className={classes.greyText}>
                            Channels
                        </Typography>
                        <PlusIcon className={classes.greyIcon}/>
                    </Grid>
                }/>
            </ListItem>
            {
                indexRoutes.filter(item => item.type === 'channel').map(item => {
                    return (
                        <ListItem
                            button
                            onClick={() => {
                                history.push(item.route)
                            }}
                            dense
                        >
                            <ListItemText primary={
                                <Typography variant="body2" className={classes.greyText}>
                                    # {item.title}
                                </Typography>
                            }/>
                        </ListItem>
                    )
                })
            }
            <ListItem
                button
                className={classes.categoryHeader}
                dense
                onClick={() => {
                }}
            >
                <ListItemText primary={
                    <Grid container justify="space-between">
                        <Typography variant="body2" className={classes.greyText}>
                            Direct Messages
                        </Typography>
                        <PlusIcon className={classes.greyIcon}/>
                    </Grid>
                }/>
            </ListItem>
            {
                indexRoutes.filter(item => item.type === 'message').map(item => {
                    return (
                        <ListItem
                            button
                            onClick={() => {
                                history.push(item.route)
                            }}
                            dense
                        >
                            <ListItemText primary={
                                <Typography variant="body2" className={classes.greyText}>
                                    # {item.title}
                                </Typography>
                            }/>
                        </ListItem>
                    )
                })
            }
        </List>
    )
};