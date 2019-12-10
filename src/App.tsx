import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import {IndexPage} from 'page';
import history from "service/history";
import {Route, Router, Switch} from "react-router";
import {indexRoutes} from "route";
import {Sidebar} from "component/sidebar/Sidebar";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  drawer: {
    backgroundColor: '#350C35',
    height: '100%',
  },
}));

export const App: React.FC = () => {
  const classes = useStyles();

  return (
      <Router history={history}>
        <Switch>
          {/*
                저희가 정의해놓은 라우트를 여기서 실제 라우트 컴포넌트로 전환합니다.
                왼쪽으 사이드바는 어떤 라우트던 고정으로 사용되고
                item.component 부분만 src/route/index.tsx에서 지정해놓은
                컴포넌트로 다이나믹하게 렌더링을 합니다.
                */}
          {indexRoutes.map((item, key) => {
            return (
                <Route path={item.route} exact={item.exact}>
                  <Grid container className={classes.root}>
                    <Grid item xs={2} className={classes.drawer}>
                      <Sidebar/>
                    </Grid>
                    <Grid item xs={10}>
                      {item.component}
                    </Grid>
                  </Grid>
                </Route>
            )
          })}
        </Switch>
      </Router>
  );
};