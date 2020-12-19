import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App(): JSX.Element {
  return (
    <>
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
    </>
  );
}

export default App;
