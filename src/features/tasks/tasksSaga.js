import { call, put, takeEvery } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { setTasks, fetchExampleTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "cos poszło nie tak:(");
    }
}

export function* watchFetchExampleTasks() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}