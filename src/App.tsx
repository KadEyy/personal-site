import * as React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Routes from './routes';
import { I18nextProvider } from "react-i18next";
import i18n from './i18n';

const App: React.FC = () => {
    return(
        <I18nextProvider i18n={i18n}>
            <Router>
                <Switch>
                    {routes}
                </Switch>
            </Router>
        </I18nextProvider>
    )
}

//Function converting your route array from routes.ts to <Route> components
const routes = Routes.map((route) => <Route exact={route.exact} path={route.url} component={route.component}/> );

export default App;