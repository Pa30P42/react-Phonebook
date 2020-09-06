import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import routes from "./routes";
import Layout from "./Components/Layout";

class App extends Component {
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addContact: (contact) => dispatch(contactActions.onAddContact(contact)),
//     switchAlert: () => dispatch(contactActions.switchAlert()),
//     fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
//   };
// };

export default connect()(App);
