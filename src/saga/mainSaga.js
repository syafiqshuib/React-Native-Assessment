import { call, put, takeLatest, select, delay } from "redux-saga/effects";
import { fetchDataApi, fetchDataSearchApi } from "../api";
import { fetchDataSuccess, fetchDataFailure, fetchDataSearchSuccess, fetchDataSearchFailure } from "../redux/actions/mainAction";

function* fetchDataSaga({ payload }) {
  const { sort, direction } = payload;
  const page = yield select((state) => state.main.offSet);
  try {
    yield delay(500);
    const response = yield call(fetchDataApi, 10, page, sort, direction);
    if (response.success) {
      yield put(fetchDataSuccess(response.data));
    } else {
      console.error("Fetch Data Error:", response.message);
      yield put(fetchDataFailure(response.message));
    }
  } catch (error) {
    console.error("fetchDataSaga Error:", error);
    yield put(fetchDataFailure(error.message));
  }
}

function* fetchDataSearchSaga({ payload }) {
  try {
    yield delay(500);
    const response = yield call(fetchDataSearchApi, payload);
    if (response.success) {
      yield put(fetchDataSearchSuccess(response.data));
    } else {
      console.error("Fetch Data Search Error:", response.message);
      yield put(fetchDataSearchFailure(response.message));
    }
  } catch (error) {
    console.error("fetchDataSearchSaga Error:", error);
    yield put(fetchDataSearchFailure(error.message));
  }
}

export const mainSaga = [
  takeLatest('FETCH_DATA_REQUEST', fetchDataSaga),
  takeLatest('FETCH_DATA_SEARCH_REQUEST', fetchDataSearchSaga)
]