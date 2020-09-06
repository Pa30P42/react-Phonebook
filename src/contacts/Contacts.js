import React, { Component } from "react";
import ContactItem from "./ContactItem";
import styles from "./Contact.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import contactsSelectors from "../redux/contactsSelectors";
import contactsOperations from "../redux/contactsOperations";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <>
        <TransitionGroup className={styles.contacts}>
          {this.props.items.map((contact) => (
            <CSSTransition
              key={contact.id}
              timeout={1000}
              classNames={styles}
              unmountOnExit
            >
              <ContactItem key={contact.id} id={contact.id} contact={contact} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: contactsSelectors.getFilteredContacts(state),
    // contacts: state.contacts.items.filter((contact) =>
    //   contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
    // ),
    filter: contactsSelectors.getFilter(state),
  };
};

const mapDispatchToProps = {
  getContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
