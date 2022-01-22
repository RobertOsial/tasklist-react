import { call, all, delay, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import {
    setTasks,
    fetchExampleTasks,
    setAreExampleTasksLoading,
    selectTasks
} from "./tasksSlice";

export function* rootSaga() {
    yield all([
        tasksSaga(),
    ]);
}

function* fetchExampleTasksHandler() {
    try {
        yield put(setAreExampleTasksLoading(true));
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
        yield put(setAreExampleTasksLoading(false));
    } catch (error) {
        yield put(setAreExampleTasksLoading(false));
        yield call(alert, "cos poszło nie tak:(");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler)
}