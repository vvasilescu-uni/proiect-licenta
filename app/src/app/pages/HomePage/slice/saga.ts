import { call, put, takeLatest } from 'redux-saga/effects';
import { homeActions as actions } from '.';

async function predictImage(image) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/predict`, {
    method: 'POST',
    body: JSON.stringify(image)
  });
  const data = await response.json();
  return data;
}

function* sendImageForPrediction(action) {
  const imageData = action.payload;
  const predictionResult = yield call(predictImage, imageData);
  
  yield put(actions.setPredictionResult(predictionResult));
}

export function* homeSaga() {
  yield takeLatest(actions.predictImage.type, sendImageForPrediction);
}
