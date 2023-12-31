import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";
import { Provider } from "react-redux";
import React from "react";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}