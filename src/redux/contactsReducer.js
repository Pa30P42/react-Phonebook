import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const addTask = (state, action) => {
  return [...state, action.payload];
};
const removeTast = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};
const filterValue = (state, action) => {
  return (state = action.payload.filter);
};
const alertSwitch = (state, action) => {
  return (state = !state);
};
const editContact = (state, { type, payload }) => {
  return state.map((item) =>
    item.id === payload.id ? { ...item, ...payload } : item
  );
};

const items = createReducer([], {
  [actions.fetchContactSuccess]: (state, action) => action.payload,
  [actions.removeContactSuccess]: removeTast,
  [actions.addContactSuccess]: addTask,
  [actions.editContactSuccess]: editContact,
  [actions.onDeleteContact]: removeTast,
});

const filter = createReducer("", {
  [actions.filterValue]: filterValue,
});

const alert = createReducer(false, {
  [actions.switchAlert]: alertSwitch,
});

const loading = createReducer(false, {
  [actions.fetchContactRequest]: () => true,
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.fetchContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.fetchContactError]: () => false,
});

export default combineReducers({ items, filter, alert, loading });
