import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';
import changeVideo from '../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';
// TODO:  Create your redux store, apply thunk as a middleware, and export it!
const middlewareEnhancer = applyMiddleware(thunk);
var baseState = {
  videoList: [],
  currentVideo: {}
};
const store = createStore(rootReducer, baseState, middlewareEnhancer);

export default store;