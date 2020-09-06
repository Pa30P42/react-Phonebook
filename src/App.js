import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import routes from "./routes";
import Layout from "./Components/Layout";
import authOperations from "./redux/authRedux/authOperations";

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Layout>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Switch>
                {routes.map((route) => (
                  <Route key={route.path} {...route} />
                ))}
              </Switch>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     contacts: contactsSelectors.getState(state),
//     alert: contactsSelectors.getAlert(state),
//     isLoading: contactsSelectors.getLoading(state),
//   };
// };

const mapDispatchToProps = {
  getUser: authOperations.getCurrentUser(),
};

export default connect(null, mapDispatchToProps)(App);
