import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import GlobalStyles from "./styles/GlobalStyles";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import store, { persistor } from "./store";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <Layout>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/favorite">
                <Favorites />
              </Route>
            </Layout>
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
