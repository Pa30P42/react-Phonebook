import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsReducer from "./contactsReducer";
import authReducers from "./authRedux/authReducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
//====

// import tasksReducer from "./tasks/tasksReducer";
// import authReducer from "./auth/authReducer";

// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//     auth: persistReducer(authPersistConfig, authReducer),
//   },
// });

//=====

const defaultMiddleware = getDefaultMiddleware();

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducers),
    // auth: authReducers,
  },
  middleware: [...defaultMiddleware],
});

export const persistor = persistStore(store);
