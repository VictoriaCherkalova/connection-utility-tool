import React from 'react';
import {BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom';
import App from './containers/App';
import WelcomePage from './containers/WelcomePage'
import MenuPage from './containers/MenuPage'
import QuestionPage from './containers/QuestionPage'

const Router = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/welcome" component={WelcomePage}/>
            <Route exact path="/menu" component={MenuPage}/>
            <Route exact path="/question" component={QuestionPage}/>
        </Switch>
    </HashRouter>
);

export default Router;

