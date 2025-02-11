import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import watchAll from "../saga";
import mainReducer from "./reducers/mainReducer";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        main: mainReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(watchAll);
export default store;

