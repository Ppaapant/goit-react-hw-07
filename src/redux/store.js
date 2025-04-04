import { configureStore} from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import storage from "redux-persist/lib/storage";
import filtersReducer from "./filtersSlice";
import { persistStore, persistReducer } from "redux-persist";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const contactsPersistConfig = {
	key: "contacts",
	storage,
	whitelist: ['items'],
  };

  const filtersPersistConfig = {
	key: "filters",
	storage,
	whitelist: ['name'],
  };

export const store = configureStore({
    reducer: {
		contacts: persistReducer(contactsPersistConfig, contactsReducer),
		filters: persistReducer(filtersPersistConfig, filtersReducer),
	   },
	   middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
		  serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		  },
		}),
});

export const persistor = persistStore(store);

