import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import {
    setTasks,
    fetchExampleTasks,
    setAreExampleTasksLoading
} from "./tasksSlice";

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

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}