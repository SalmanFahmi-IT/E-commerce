import { all } from 'redux-saga/effects';
import Products from './Product';

export default function* root() {
  yield all([
   Products()
  ]);
}