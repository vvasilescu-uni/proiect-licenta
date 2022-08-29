import { call, put, takeLatest } from 'redux-saga/effects';
import { homeActions as actions } from '.';

async function postImage(imageData) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/predict`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ image: imageData })
  });
  const data = await response.json();
  return data;
}

function* sendImageForPrediction(action) {
  const imageData = action.payload;
  const predictionResult = yield call(postImage, imageData);
  
  yield put(actions.setPredictionResult(predictionResult));
}

export function* homeSaga() {
  yield takeLatest(actions.predictImage.type, sendImageForPrediction);
}
