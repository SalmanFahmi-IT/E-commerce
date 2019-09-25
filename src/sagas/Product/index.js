import {takeLatest, call, put} from 'redux-saga/effects';
import * as actions from '../../actions/Product';
import * as types from '../../constants';
import request from '../../utils/request';

function* getProducts (){
    const url = 'https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0';
    try{
      const repos = yield call (request, url);
      yield put(actions.FetchProductsSuccess, repos);
    }catch(err){

    }
}

export default function* watcher(){
  yield takeLatest(types.FETCH_PRODUCTS, getProducts);
}