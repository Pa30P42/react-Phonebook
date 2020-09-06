import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Alert from "../alert/Alert";
import Form from "../contactsForm/Form";
import Filter from "../filter/Filter";
import styles from "../App.module.css";
import stylesAlert from "../alert/Alert.module.css";
import { connect } from "react-redux";
import Contacts from "../contacts/Contacts";
import contactsSelectors from "../redux/contactsSelectors";
import contactActions from "../redux/actions";

const ContactsView = ({ isLoading, switchAlert, addContact, alert }) => {
  const alertSwitch = () => {
    switchAlert();
  };
  return (
    <>
      <TransitionGroup className={styles.titleWrapper}>
        <CSSTransition
          classNames={styles}
          in={true}
          appear={true}
          timeout={500}
          unmountOnExit
        >
          <h2 className={styles.phonebookTitle}> Phonebook</h2>
        </CSSTransition>
        {alert && (
          <CSSTransition
            classNames={stylesAlert}
            in={true}
            appear={true}
            timeout={500}
            unmountOnExit
          >
            <Alert alertSwitch={alertSwitch} />
          </CSSTransition>
        )}
      </TransitionGroup>
      <Form addContact={addContact} />
      <h2 className={styles.phonebookTitle}>Contacts</h2>
      <Filter />
      {isLoading && <h2>Loading contacts ...</h2>}
      <Contacts />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    // contacts: contactsSelectors.getState(state),
    alert: contactsSelectors.getAlert(state),
    isLoading: contactsSelectors.getLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(contactActions.onAddContact(contact)),
    switchAlert: () => dispatch(contactActions.switchAlert()),
    // fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
