import { all } from "redux-saga/effects";
import { mainSaga } from "./mainSaga";

function* watchAll() {
    yield all([...mainSaga]);
}

export default watchAll; 
