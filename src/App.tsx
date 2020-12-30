import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import GlobalStyles from "./styles/GlobalStyles";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import store from "./store";

function App(): JSX.Element {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
