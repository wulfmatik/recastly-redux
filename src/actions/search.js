import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import videoListReducer from '../reducers/videoList.js';
import currentVideoReducer from '../reducers/currentVideo.js';


var handleVideoSearch = (q) => {
  var max = 5;
  var key = YOUTUBE_API_KEY;

  return ((dispatch) => {
    searchYouTube({key: key, query: q, max: 5}, (videos) => {
      console.log('IN CALLBACK');
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
      // videoListReducer('PUT STATe HERE', changeVideoList(videos));
      // currentVideoReducer('PUT STATe HERE', changeVideo(videos[0]));
    });
  });
};

export default handleVideoSearch;
