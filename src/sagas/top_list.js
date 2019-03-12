import { takeLatest, call, put } from 'redux-saga/effects'

import actions from 'actions'

const { GET_TOP_LIST, TOP_LIST_SUCCESS, TOP_LIST_FAILURE } = actions

function fetchTopList() {
  return fetch(
    'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=7cd938d1d242099bbb0eb708a1374dfed42f074339a86e03c39d23041dcf4f87'
  )
}

function* topListWorker() {
  try {
    const response = yield call(fetchTopList)
    const resolvedResponse = yield response.json()

    yield put({ type: TOP_LIST_SUCCESS, payload: resolvedResponse.Data })
  } catch (e) {
    yield put({ type: TOP_LIST_FAILURE, payload: e })
  }
}

export default function* topListWatcher() {
  yield takeLatest(GET_TOP_LIST, topListWorker)
}
