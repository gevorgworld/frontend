import './styles.module.scss';
import AlertBox                    from './components/AlertBox';
import Bet                         from './screens/Bet';
import Home                        from './screens/Home';
import Logout                      from './screens/Logout';
import Popup                       from './components/Popup';
import PrivacyPolicy               from './screens/PrivacyPolicy';
import Routes                      from './constants/Routes';
import WalletDeposit               from './screens/WalletDeposit';
import store                       from './store';
import TermsAndConditions          from './screens/TermsAndConditions';
import Wallet                      from './screens/Wallet';
import Welcome                     from './screens/Welcome';
import { ConnectedRouter }         from 'connected-react-router';
import { history }                 from './store';
import { Provider }                from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';

const configuredStore = store();

const App = () => {
    return (
        <Provider store={configuredStore}>
            <ConnectedRouter history={history}>
                <AlertBox />
                <Popup />
                <Switch>
                    <Route
                        exact
                        path={Routes.logout}
                        component={Logout}
                    />
                    <Route
                        exact
                        path={Routes.welcome}
                        component={Welcome}
                    />
                    <Route
                        exact
                        path={Routes.termsAndConditions}
                        component={TermsAndConditions}
                    />
                    <Route
                        exact
                        path={Routes.privacyPolicy}
                        component={PrivacyPolicy}
                    />
                    <Route
                        exact
                        path={Routes.home}
                        component={Home}
                    />
                    <Route
                        exact
                        path={Routes.bet}
                        component={Bet}
                    />
                    <Route
                        path={Routes.walletDeposit}
                        component={WalletDeposit}
                    />
                    <Route
                        path={Routes.wallet}
                        component={Wallet}
                    />
                    <Redirect to={Routes.welcome} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
};

// Calculating height for mobile screens
let vh = window.innerHeight * 0.01;

// Recalculating after resizing screen
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

export default App;
