"use client";

import { useRef } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import globalReducer from "@/state/slices/globalSlice";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import companyReducer from "@/state/slices/companySlice";
import storage from "redux-persist/lib/storage";
import { api } from "@/state/api";

/* REDUX STORE */
const companyPersistConfig = {
  key: "company",
  storage,
};

const persistedCompanyReducer = persistReducer(
  companyPersistConfig,
  companyReducer
);

export const makeStore = () => {
  return configureStore({
    reducer: {
      global: globalReducer,
      company: persistedCompanyReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(api.middleware),
  });
};

/* REDUX TYPES */
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

let persistor: ReturnType<typeof persistStore>;
/* PROVIDER */
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    const store = makeStore();
    storeRef.current = store;
    setupListeners(store.dispatch);
    persistor = persistStore(store);
  }
  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
